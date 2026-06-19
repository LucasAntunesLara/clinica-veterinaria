export class Medicamento {
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
}
