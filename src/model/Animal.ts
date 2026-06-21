type Especie = "cachorro" | "gato" | "passaro" | "reptil";
type Porte = "pequeno" | "medio" | "grande";

type CaracteristicasOpcionais = {
  raca?: string;
  vacinado?: boolean;
  ehCastrado?: boolean;
  pelagem?: string;
};

export class Animal {
  nome: string;
  idade: number;
  peso: number;
  especie: string;
  porte: string;
  nomeDono: string;
  telefoneDono: string;
  cpfDono: string;
  caracteristicas: CaracteristicasOpcionais;

  constructor(
    nome: string,
    idade: number,
    peso: number,
    especie: string,
    porte: string,
    nomeDono: string,
    telefoneDono: string,
    cpfDono: string,
    caracteristicas: CaracteristicasOpcionais = {},
  ) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.especie = especie;
    this.porte = porte;
    this.nomeDono = nomeDono;
    this.telefoneDono = telefoneDono;
    this.cpfDono = cpfDono;
    this.caracteristicas = caracteristicas;
  }

  getCategoriaVacina(): string {
    if (this.especie === "cachorro") {
      let categoria: string;

      switch (this.porte) {
        case "pequeno":
          categoria = "V8-pequeno";
          break;
        case "medio":
          categoria = "V8-medio";
          break;
        default:
          categoria = "V10-grande";
      }

      if (this.caracteristicas?.vacinado !== undefined) {
        return `${categoria} ${this.caracteristicas.vacinado ? "-reforco" : "-primaria"}`;
      }
    } else if (this.especie === "gato") {
      return "V4-felino";
    }

    return "";
  }

  imprimirFicha(): void {
    console.log("========== FICHA DO ANIMAL ==========");
    console.log("Nome   : " + this.nome);
    console.log("Espécie: " + this.especie);
    console.log("Porte  : " + this.porte);
    console.log("Peso   : " + this.peso + " kg");
    console.log("Idade  : " + this.idade + " anos");
    console.log(
      "Dono   : " +
        this.nomeDono +
        " | CPF: " +
        this.cpfDono +
        " | Tel: " +
        this.telefoneDono,
    );
    console.log("=====================================");

    if (this.caracteristicas.raca !== undefined)
      console.log("Raça   : " + this.caracteristicas?.raca);

    if (this.caracteristicas.vacinado !== undefined)
      console.log(
        "Vacina : " + (this.caracteristicas?.vacinado ? "Em dia" : "Pendente"),
      );
  }
}
