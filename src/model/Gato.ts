import { Animal } from "./Animal";
import { Especie } from "./enums/Especie";
import { Porte } from "./enums/Porte";

export class Gato extends Animal {
  ehCastrado: boolean;
  pelagem: string;

  constructor(
    nome: string,
    idade: number,
    peso: number,
    ehCastrado: boolean,
    pelagem: string,
    nomeDono: string,
    telefoneDono: string,
    cpfDono: string,
  ) {
    super(
      nome,
      idade,
      peso,
      Especie.Gato,
      Porte.Pequeno,
      nomeDono,
      telefoneDono,
      cpfDono,
    );
    this.ehCastrado = ehCastrado;
    this.pelagem = pelagem;
  }
}
