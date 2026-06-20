export class Estoque {
  static Medicamento = class {
    nome: string;
    tipo: string;
    preco: number;
    quantidade: number;
    validade: string;

    constructor(
      nome: string,
      tipo: string,
      preco: number,
      quantidade: number,
      validade: string,
    ) {
      this.nome = nome;
      this.tipo = tipo;
      this.preco = preco;
      this.quantidade = quantidade;
      this.validade = validade;
    }
  };

  itens: InstanceType<typeof Estoque.Medicamento>[] = [];

  adicionar(m: InstanceType<typeof Estoque.Medicamento>): void {
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

  getItens(): InstanceType<typeof Estoque.Medicamento>[] {
    return this.itens;
  }

  imprimirEstoque(): string {
    let resultado = "===== ESTOQUE =====\n";

    for (const m of this.itens)
      resultado += `${m.nome} | ${m.tipo} | Qtd: ${m.quantidade} | Validade: ${m.validade} | R$${m.preco}\n`;

    return resultado;
  }

  alertarEstoqueBaixo(): string[] {
    const alertas: string[] = [];

    for (const m of this.itens) {
      if (m.quantidade < 5)
        alertas.push(`ALERTA: estoque baixo para ${m.nome}`);
    }

    return alertas;
  }
}
