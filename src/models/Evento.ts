import { Associado } from "./Associado";

export class Evento {
    codigo: number;
    nome: string;
    data: String;
    hora: string;
    local:string;
    descricao: string;
    vlrAssociado: number;
    vlrNaoAssociado: number;
    organizador: Associado;
}