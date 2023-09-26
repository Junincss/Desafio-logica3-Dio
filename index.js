class hero {
  constructor(nameHero, ageHero, typeHero, execute) {
    this.nameHero = nameHero;
    this.ageHero = ageHero;
    this.typeHero = typeHero;
    this.execute = execute;
  }
  attack() {
    let type = "";
    let strike = "";
    switch (this.typeHero) {
      case "1":
        type = "guerreiro";
        strike = "usou espada";
        alert(`O ${type}, ${strike} para atacar`);
        break;
      case "2":
        type = "mago";
        strike = "usou magia";
        alert(`O ${type}, ${strike} para atacar`);
        break;
      case "3":
        type = "monge";
        strike = "usou artes marciais";
        alert(`O ${type}, ${strike} para atacar`);
        break;
      case "4":
        type = "ninja";
        strike = "usou shuriken";
        alert(`O ${type}, ${strike} para atacar`);
        break;
      default:
        alert(`error! na próxima janela tecle 1 para repetir`);
        break;
    }
  }
}
do {
  let person = new hero(
    prompt("Insira o nome do personagem"),
    prompt("Insira a idade do personagem:"),
    prompt(
      "Escolha a classe do personagem: \n 1- guerreiro \n2- mago\n3- monge \n4- ninja"
    )
  );
  person.attack();
  execute = prompt("repetir ? (1 - sim / 2 - não)");
} while (execute !== "2");
