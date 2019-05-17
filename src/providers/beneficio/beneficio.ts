import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BeneficioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BeneficioProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BeneficioProvider Provider');
  }

}
