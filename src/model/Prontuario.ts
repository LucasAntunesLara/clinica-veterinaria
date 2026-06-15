import { Animal } from "./Animal";

interface Registravel {
  registrar(): void;
  atualizar(): void;
  deletar(): void;
  imprimir(): void;
  exportarCSV(): void;
  enviarEmail(): void;
}

export class Prontuario implements Registravel {
  private _id: number;
  private _animal: Animal;
  private _observacoes: string[] = [];
  private _dataCriacao: Date;
  private _peso: number;
  private _diagnostico?: string;
  private _prescricao?: string;

  constructor(id: number, animal: Animal) {
    this._id = id;
    this._animal = animal;
    this._dataCriacao = new Date();
    this._peso = animal.peso;
  }

  get id(): number {
    return this._id;
  }

  get animal(): Animal {
    return this._animal;
  }

  get observacoes(): ReadonlyArray<string> {
    return this._observacoes;
  }

  get dataCriacao(): Date {
    return this._dataCriacao;
  }

  get peso(): number {
    return this._peso;
  }

  get diagnostico(): string | undefined {
    return this._diagnostico;
  }

  set diagnostico(value: string | undefined) {
    this._diagnostico = value;
  }

  get prescricao(): string | undefined {
    return this._prescricao;
  }

  set prescricao(value: string | undefined) {
    this._prescricao = value;
  }

  registrar(): void {
    console.log("Prontuário #" + this._id + " registrado.");
  }

  atualizar(): void {
    console.log("Prontuário atualizado.");
  }

  deletar(): void {}

  imprimir(): void {
    console.log(
      "Prontuário #" +
        this._id +
        " | Animal: " +
        this._animal.nome +
        " | Diagnóstico: " +
        this._diagnostico,
    );
  }

  exportarCSV(): void {}

  enviarEmail(): void {
    console.log("Enviando prontuário por email para " + this._animal.nomeDono);
  }

  adicionarObservacao(obs: string): void {
    this._observacoes.push(obs);
  }
}
