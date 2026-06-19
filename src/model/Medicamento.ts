export type MedicamentoDTO = Readonly<{
  nome: string;
  tipo: string;
  preco: number;
  quantidade: number;
  validade: string;
}>;

export class Medicamento {
  private _nome: string;
  private _tipo: string;
  private _preco: number;
  private _quantidade: number;
  private _validade: string;

  constructor(
    nome: string,
    tipo: string,
    preco: number,
    quantidade: number,
    validade: string,
  ) {
    this._nome = nome;
    this._tipo = tipo;
    this._preco = preco;
    this._quantidade = quantidade;
    this._validade = validade;
  }

  get nome(): string {
    return this._nome;
  }

  get tipo(): string {
    return this._tipo;
  }

  get preco(): number {
    return this._preco;
  }

  get quantidade(): number {
    return this._quantidade;
  }

  get validade(): string {
    return this._validade;
  }

  reduzirQuantidade(qtd: number): boolean {
    if (qtd < 0) return false;
    if (this._quantidade < qtd) return false;
    this._quantidade -= qtd;
    return true;
  }

  toDTO(): MedicamentoDTO {
    return Object.freeze({
      nome: this._nome,
      tipo: this._tipo,
      preco: this._preco,
      quantidade: this._quantidade,
      validade: this._validade,
    });
  }
}
