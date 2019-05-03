import { Associado } from "./Associado";

export class Evento {
    // codigo: number;
    nome: string;
    data: String;
    hora: string;
    local:string;
    descricao: string;
    valorAssociado: number;
    valorNaoAssociado: number;
    organizador: Associado;
}