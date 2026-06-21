import { Animal } from "./Animal";

export class Consulta {
  id: number;
  animal: Animal;
  veterinario: string;
  dataHora: Date;
  status: string;
  motivoCancelamento?: string;
  valorConsulta: number;
  formaPagamento?: string;
  pago: boolean;

  constructor(
    id: number,
    animal: Animal,
    veterinario: string,
    dataHora: Date,
    valorConsulta: number,
  ) {
    this.validarDados(animal, veterinario, valorConsulta);

    this.id = id;
    this.animal = animal;
    this.veterinario = veterinario;
    this.dataHora = dataHora;
    this.valorConsulta = valorConsulta;
    this.status = "agendada";
    this.pago = false;
  }

  private validarDados(
    animal: Animal,
    veterinario: string,
    valorConsulta: number,
  ): void {
    if (!animal) throw new Error("Animal é obrigatório.");

    if (!animal.nome || animal.nome.trim().length === 0)
      throw new Error("Animal deve ter um nome válido.");

    if (!veterinario || veterinario.trim().length === 0)
      throw new Error("Veterinário é obrigatório.");

    if (valorConsulta < 0)
      throw new Error("Valor da consulta não pode ser negativo.");

    if (valorConsulta === 0)
      throw new Error("Valor da consulta deve ser maior que zero.");
  }

  registrarPagamento(forma: string): void {
    const formasValidas = ["pix", "cartao", "dinheiro"];

    if (!forma || forma.trim().length === 0) {
      throw new Error("Forma de pagamento é obrigatória");
    }

    const formaNormalizada = forma.toLowerCase().trim();

    if (!formasValidas.includes(formaNormalizada)) {
      throw new Error(
        `Forma de pagamento inválida: "${forma}". Formas permitidas: ${formasValidas.join(", ")}`,
      );
    }

    if (this.pago) throw new Error("Esta consulta já foi paga");

    if (this.status === "cancelada")
      throw new Error("Não é possível pagar uma consulta cancelada");

    this.formaPagamento = formaNormalizada;
    this.pago = true;
  }

  cancelar(motivo: string): void {
    if (!motivo || motivo.trim().length === 0)
      throw new Error("Motivo do cancelamento é obrigatório.");

    if (this.status === "cancelada")
      throw new Error("Esta consulta já está cancelada.");

    if (this.pago)
      throw new Error("Não é possível cancelar uma consulta já paga.");

    this.status = "cancelada";
    this.motivoCancelamento = motivo.trim();
  }

  imprimirResumo(): void {
    const statusPagamento = this.pago ? "Sim" : "Não";
    const statusConsulta = this.status;
    const motivo = this.motivoCancelamento
      ? ` (Motivo: ${this.motivoCancelamento})`
      : "";

    console.log(
      `[Consulta #${this.id}] ${this.animal.nome} | Vet: ${this.veterinario} | Status: ${statusConsulta}${motivo} | Valor: R$${this.valorConsulta.toFixed(2)} | Pago: ${statusPagamento}`,
    );
  }
}
