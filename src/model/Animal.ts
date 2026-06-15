type Especie = "cachorro" | "gato" | "passaro" | "reptil";
type Porte = "pequeno" | "medio" | "grande";

export class Animal {
  private _nome: string;
  private _idade: number;
  private _peso: number;
  private _especie: string;
  private _porte: string;
  private _nomeDono: string;
  private _telefoneDono: string;
  private _cpfDono: string;

  constructor(
    nome: string,
    idade: number,
    peso: number,
    especie: string,
    porte: string,
    nomeDono: string,
    telefoneDono: string,
    cpfDono: string,
  ) {
    this._nome = nome;
    this._idade = idade;
    this._peso = peso;
    this._especie = especie;
    this._porte = porte;
    this._nomeDono = nomeDono;
    this._telefoneDono = telefoneDono;
    this._cpfDono = cpfDono;
  }

  get nome(): string {
    return this._nome;
  }

  get idade(): number {
    return this._idade;
  }

  get peso(): number {
    return this._peso;
  }

  get especie(): string {
    return this._especie;
  }

  get porte(): string {
    return this._porte;
  }

  get nomeDono(): string {
    return this._nomeDono;
  }

  get telefoneDono(): string {
    return this._telefoneDono;
  }

  get cpfDono(): string {
    return this._cpfDono;
  }

  getCategoriaVacina(): string {
    if (this._especie === "cachorro") {
      if (this._porte === "pequeno") return "V8-pequeno";
      if (this._porte === "medio") return "V8-medio";
      return "V10-grande";
    } else if (this._especie === "gato") {
      return "V4-felino";
    }

    return "";
  }

  imprimirFicha(): void {
    console.log("========== FICHA DO ANIMAL ==========");
    console.log("Nome   : " + this._nome);
    console.log("Espécie: " + this._especie);
    console.log("Porte  : " + this._porte);
    console.log("Peso   : " + this._peso + " kg");
    console.log("Idade  : " + this._idade + " anos");
    console.log(
      "Dono   : " +
        this._nomeDono +
        " | CPF: " +
        this._cpfDono +
        " | Tel: " +
        this._telefoneDono,
    );
    console.log("=====================================");
  }
}
