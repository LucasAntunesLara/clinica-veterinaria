import { Medicamento, MedicamentoDTO } from "./Medicamento";

export class Estoque {
  private itens: Medicamento[] = [];

  adicionar(m: Medicamento): void {
    this.itens.push(m);
  }

  darBaixa(nomeMedicamento: string, qtd: number): boolean {
    const m = this.itens.find((it) => it.nome === nomeMedicamento);
    if (!m) return false;
    return m.reduzirQuantidade(qtd);
  }

  getItens(): ReadonlyArray<MedicamentoDTO> {
    return this.itens.map((m) => m.toDTO());
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
