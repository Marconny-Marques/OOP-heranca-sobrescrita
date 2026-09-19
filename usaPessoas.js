const Pessoa = require('./pessoas/Pessoa');

const fulano = new Pessoa();

resposta = fulano.setNome('');

console.log(respota);

if(reposta) {
    console.log(fulano.getNome());
} else {
    console.log("Nome vazio");
}

resposta = fulano.setEMAIL('fulano@gmail.com');

console.log(respota);

if(resposta) {
    console.log(fulano.getEMAIL());
} else {
    console.log("Email vazio");
}

console.log("=== Objeto PF ===");

const PF = require('./pessoas/PF');

const ciclano = new PF();

resposta = ciclano.setNome('ciclano');
console.log(resposta);

if(resposta) {
    console.log(ciclano.getNome());
} else {
    console.log("Nome vazio");
}

reposta = ciclano.setCPF('23343456546');
console.log(resposta);

if(resposta) {
    console.log(ciclano.getCPF());
} else {
    console.log("CPF vazio");
}

console.log("=== Objeto PJ ===");

const PJ = require('./pessoas/PJ');

const z = new PJ();

resposta = z.setNome('Empresa ABC');
console.log(resposta);

if (resposta) {
   console.log(z.getNome());
} else {
   console.log("Nome vazio");
}

resposta = z.setEmail('contato@empresa.com');
console.log(resposta);

if (resposta) {
   console.log(z.getEmail());
} else {
   console.log("E-mail inválido");
}
 
resposta = z.setCNPJ('12.345.678/0001-90');
console.log(resposta);

if (resposta) {
   console.log(z.getCNPJ());
} else {
   console.log("CNPJ inválido");
}