const Pessoa = require('./Pessoa');

class PJ extends Pessoa {
    #cnpj;
    
    setCNPJ(cnpj) {
        if(cnpj.length < 18) {
            return false;
        } else {
            this.#cnpj = cnpj;
            return true;
        }
    }

    getCNPJ() {
        return this.#cnpj = cnpj;
    }

    setEMAIL(email) {
        if(email != '' && email.includes('@')) {
            super.setEMAIL(email);
            return true;
        } else  {
            return false;
        }
    }
}
module.exports = Pj;