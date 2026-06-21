import { Animal } from "./Animal";

interface Registravel {
  registrar(): void;
  atualizar(): void;
}

interface Imprimivel {
  imprimir(): void;
}

interface ComunicavelPorEmail {
  enviarEmail(): void;
}

export class Prontuario
  implements Registravel, Imprimivel, ComunicavelPorEmail
{
  id: number;
  animal: Animal;
  observacoes: string[] = [];
  dataCriacao: Date;
  peso: number;
  diagnostico?: string;
  prescricao?: string;

  constructor(id: number, animal: Animal) {
    this.id = id;
    this.animal = animal;
    this.dataCriacao = new Date();
    this.peso = animal.peso;
  }

  registrar(): void {
    console.log("Prontuário #" + this.id + " registrado.");
  }

  atualizar(): void {
    console.log("Prontuário atualizado.");
  }

  imprimir(): void {
    console.log(
      "Prontuário #" +
        this.id +
        " | Animal: " +
        this.animal.nome +
        " | Diagnóstico: " +
        this.diagnostico,
    );
  }

  enviarEmail(): void {
    console.log("Enviando prontuário por email para " + this.animal.nomeDono);
  }

  adicionarObservacao(obs: string): void {
    this.observacoes.push(obs);
  }
}
