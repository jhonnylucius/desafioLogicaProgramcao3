class Heroi {
    constructor(nome, idade, tipo, poder) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.poder = poder;

    }

    atacar() {
        return `o ${this.tipo}, usou ataque com ${this.poder}`;
    }
}

class Guerreiro extends Heroi {
    constructor(nome, idade, tipo, poder) {
        super(nome, idade, tipo, poder);
    }
    atacar(poder="espada") {
        return `o ${this.tipo} usou ataque com ${poder}`;
    }
}

class Mago extends Heroi {
    constructor(nome, idade, tipo) {
        super(nome, idade, tipo);
    }
    atacar(poder="magia") {
        return `o ${this.tipo} usou ataque com ${poder}!`;
    }
}

class Monge extends Heroi {
    constructor(nome, idade, tipo) {
        super(nome, idade, tipo);
    }
    atacar(poder="artes marciais") {
        return `o ${this.tipo} usou ataque com ${poder}!`;
    }
}

class Ninja extends Heroi {
    constructor(nome, idade, tipo) {
        super(nome, idade, tipo);
    }
    atacar(poder="shuriken") {
        return `o ${this.tipo} usou ataque com ${poder}`;
    }
}


const guerreiroHeroi = new Guerreiro("Rimuro", 20, "guerreiro");
const magoHeroi = new Mago("Merlin", 30, "mago");
const mongeHeroi = new Monge("Goku", 25, "monge");
const ninjaHeroi = new Ninja("Naruto", 18, "ninja");


console.log(guerreiroHeroi.atacar());
console.log(magoHeroi.atacar());
console.log(mongeHeroi.atacar());
console.log(ninjaHeroi.atacar());