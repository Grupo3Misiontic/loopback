import {injectable, /* inject, */ BindingScope} from '@loopback/core';

const generador = require('password-generator')//generara aleatoriamente la clave
const cryptojs = require('crypto-js')//cifrar la clave

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */

  GenerarClave(){
    let clave = generador(8,false)
    return clave
  }

  CifrarClave(clave: String){
    let claveCifrada = cryptojs.MD5(clave).toString()
    return claveCifrada
  }

}
