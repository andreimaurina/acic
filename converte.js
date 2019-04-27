var firebase = require("firebase")

var config = {
  apiKey: "AIzaSyBnv2FDzNmV3Auz8FlHkkApsgujK6ASTXk",
  authDomain: "teste-c17e4.firebaseapp.com",
  databaseURL: "https://teste-c17e4.firebaseio.com",
  projectId: "teste-c17e4",
  storageBucket: "teste-c17e4.appspot.com",
  messagingSenderId: "872085547758"
};
firebase.initializeApp(config);

var parseString = require('xml2js').parseString;
var https = require('https');

function xmlToJson(url, callback) {
  var req = https.get(url, function(res) {
    var xml = '';
    
    res.on('data', function(chunk) {
      xml += chunk;
    });

    res.on('error', function(e) {
      callback(e, null);
    }); 

    res.on('timeout', function(e) {
      callback(e, null);
    }); 

    res.on('end', function() {
      parseString(xml, function(err, result) {
        callback(null, result);
      });
    });
  });
}


var url = "https://noticiahoje.net/feed/";
var itens;

xmlToJson(url, function(err, data) {
  if (err) {
    return console.err(err);
  }
  itens = (JSON.stringify(data['rss']['channel'], null, 2));
  for (var x = 0; x < itens.length; x++){
    if (!this.cod) {
      let newNoticia = firebase.database().ref('noticias/').push();
      newNoticia.set(this.noticia);
    } else {
      let newNoticia = firebase.database().ref(`noticias/${this.cod}`);
      newNoticia.update(this.noticia);
    }
  }
});
