class ContaBancaria {
    constructor(agencia,numero,tipo,saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;

    }

    get saldo() {
        return this._saldo
    }

    set saldo(valor) {
        this._saldo = valor;
    } 


    sacar(valor) {
        if (valor > this._saldo) {
            return "Operação Negada!"
        }
        this._saldo = this._saldo - valor;


        return this._saldo;
    }

    depositar(valor) {
        if(valor < 0) {
            return "Não é possível incrementar algo negativo!"
        }
         this._saldo = this._saldo + valor;

         return this._saldo;
    }


}


class ContaCorrente extends ContaBancaria {
    constructor(agencia,numero,cartaoCredito) {
        super(agencia,numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }


}





class ContaPoupanca extends ContaBancaria {
    constructor(agencia,numero,saldo) {
        super(agencia,numero);
        this.tipo = 'poupança';
        this._cartaoCredito = cartaoCredito;
    }

}


class ContaUniversitaria  extends ContaBancaria {
    constructor(agencia,numero,saldo) {
        super(agencia,numero);
        this.tipo = 'universitaria';
        this._cartaoCredito = cartaoCredito;
    }


    sacar(valor) {
        if(valor > 500) {
            return "Operação negada!"
        }

        this._saldo = this._saldo - valor;
    }
    


    
}
