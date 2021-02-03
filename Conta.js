import {Cliente} from "../Cliente.js";

export class Conta{
    constructor(agencia, numero, cliente){
    //Não pode instanciara classe Conta porque ela é uma classe abstrata
        if(this.constructor == Conta){
            throw new Error("Conta é uma classe abstrata! Não pode ser instanciada.");
        }
        this._saldo = 0;
        this._agencia = agencia;
        this._numero = numero;
        this.cliente = cliente;
    }
    get saldo(){
        return this._saldo;
    }

    get cliente(){
        return this._cliente;
    }
    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente;
            console.log("Cliente " + novoCliente.nome + " incluído com sucesso!");
        }else{
            console.log("Insira um valor válido para continuar!");
        }
    }
    //Método abstrato
    saca(valor){
       throw new Error("Método abstrato! Implemente ele na classe apropriada.");
    }
    _saca(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            console.log("Saque no valor de " + valorSacado + " realizado com sucesso!");
        }else{
            console.log("Saldo insuficiente! Valor solicitado: " + valorSacado + ", Saldo: " + this._saldo);
        }
    }
    deposita(valor){
        if(valor > 0){
            this._saldo += valor;
            console.log("Deposito de " + valor + " realizado com sucesso!");
        }else{
            console.log("Depósito inválido! Valor: " + valor);
        }
    }
    transfere(valor, conta){
        if(this._saldo >= valor){
            this.saca(valor);
            conta.deposita(valor);
            console.log("Tranferência de " + valor + " R$ para a conta " + conta._numero + " realizada com sucesso!");
        }else{
            console.log("Valor insuficiente!");
        }
    }
}
