import { Associado } from "./Associado";

export class Evento {
    cod: number;
    nome: string;
    data: Date;
    hora: string;
    local:string;
    descricao: string;
    vlrAssociado: number;
    vlrNaoAssociado: number;
    organizador: Associado;
}