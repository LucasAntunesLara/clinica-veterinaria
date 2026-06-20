import { Animal } from "./Animal";

export class Cachorro extends Animal {
  raca: string;
  vacinado: boolean;

  constructor(
    nome: string,
    idade: number,
    peso: number,
    porte: string,
    raca: string,
    vacinado: boolean,
    nomeDono: string,
    telefoneDono: string,
    cpfDono: string,
  ) {
    super(
      nome,
      idade,
      peso,
      "cachorro",
      porte,
      nomeDono,
      telefoneDono,
      cpfDono,
    );
    this.raca = raca;
    this.vacinado = vacinado;
  }

  override getCategoriaVacina(): string {
    return (
      super.getCategoriaVacina() + (this.vacinado ? "-reforco" : "-primaria")
    );
  }

  override imprimirFicha(): string {
    return `${super.imprimirFicha()}
Raça: ${this.raca}
Vacina: ${this.vacinado ? "Em dia" : "Pendente"}`;
  }
}
