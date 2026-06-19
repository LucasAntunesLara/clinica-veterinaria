import { Medicamento } from "./Medicamento";

export class Estoque {
  itens: InstanceType<typeof Medicamento>[] = [];

  adicionar(m: InstanceType<typeof Medicamento>): void {
    this.itens.push(m);
  }

  darBaixa(nomeMedicamento: string, qtd: number): boolean {
    for (const m of this.itens) {
      if (m.nome === nomeMedicamento) {
        try {
          if (m.quantidade < qtd) {
            throw new Error("Estoque insuficiente");
          }
          m.quantidade -= qtd;
          return true;
        } catch (e) {
          return false;
        }
      }
    }

    return false;
  }

  getItens(): InstanceType<typeof Medicamento>[] {
    return this.itens;
  }

  imprimirEstoque(): void {
    console.log("===== ESTOQUE =====");
    for (const m of this.itens) {
      console.log(
        m.nome +
          " | " +
          m.tipo +
          " | Qtd: " +
          m.quantidade +
          " | Validade: " +
          m.validade +
          " | R$" +
          m.preco,
      );
    }
  }

  alertarEstoqueBaixo(): void {
    for (const m of this.itens) {
      if (m.quantidade < 5) {
        console.log("ALERTA: estoque baixo para " + m.nome);
      }
    }
  }
}
