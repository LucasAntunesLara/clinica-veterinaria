import { Pessoa } from "./Pessoa";
import { Consulta } from "./Consulta";
import { Especialidade } from "./enums/Especialidade";
import { ConsultaStatus } from "./enums/ConsultaStatus";

export class Veterinario extends Pessoa {
  crmv: string;
  especialidade: Especialidade;
  historicoConsultas: Consulta[] = [];
  disponivel: boolean = true;

  constructor(
    nome: string,
    cpf: string,
    telefone: string,
    email: string,
    crmv: string,
    especialidade: Especialidade,
  ) {
    super(nome, cpf, telefone, email);
    this.crmv = crmv;
    this.especialidade = especialidade;
  }

  calcularValorConsulta(tipoConsulta: string): number {
    if (this.especialidade === "clinico") {
      if (tipoConsulta === "rotina") return 150.0;
      if (tipoConsulta === "emergencia") return 300.0;
    } else if (this.especialidade === "cirurgiao") {
      if (tipoConsulta === "rotina") return 250.0;
      if (tipoConsulta === "emergencia") return 500.0;
    }

    return 0.0;
  }

  finalizarConsulta(c: Consulta): void {
    c.status = ConsultaStatus.Finalizada;
    this.historicoConsultas.push(c);
    this.disponivel = true;
  }
}
