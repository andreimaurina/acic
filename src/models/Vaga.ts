import { Associado } from "./Associado";

export class Vaga {
    cod: number;
    profissao: string;
    visibilidade: string;
    descricao: string;
    empregador: Associado;
    emailEmpregador: Associado;
}