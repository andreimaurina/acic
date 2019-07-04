export class Associado {
    nome: string;
    tipo: string;
    email: string;
    telefone: string;
    cep: string;
    cidade: string;
    rua: string;
    numEndereco: number;
    bairro: string;
    constructor(tipo: string) {
        this.tipo = tipo;
    }
}

export class PessoaFisica extends Associado {
    cpf: string;
    sexo: string;
    dataNasc: string;
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
    constructor() {
        super('pessoaFisica');
    }
}

export class PessoaJuridica extends Associado {
    cnpj: string;
    razaoSocial: string;
    nomeFantasia: string;
    site: string;
     constructor() {
         super('pessoaJuridica')
    }
}