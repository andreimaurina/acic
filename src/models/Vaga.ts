import { Associado } from "./Associado";

export class Vaga {
    nome: String;
    profissao: string;
    descricao: string;
    email: String;
    visibilidade: string;
    empregador: Associado;
}