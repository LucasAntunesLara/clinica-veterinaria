import { Animal } from "./Animal";

interface Registravel {
  registrar(): string;
  atualizar(): string;
  deletar(): void;
  imprimir(): string;
  exportarCSV(): void;
  enviarEmail(): string;
}

export class Prontuario implements Registravel {
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

  registrar(): string {
    return `Prontuário # ${this.id} registrado.`;
  }

  atualizar(): string {
    return "Prontuário atualizado.";
  }

  deletar(): void {}

  imprimir(): string {
    return `Prontuário #${this.id}
         | Animal: ${this.animal.nome} 
        | Diagnóstico: ${this.diagnostico}`;
  }

  exportarCSV(): void {}

  enviarEmail(): string {
    return `Enviando prontuário por email para ${this.animal.nomeDono}`;
  }

  adicionarObservacao(obs: string): void {
    this.observacoes.push(obs);
  }
}
