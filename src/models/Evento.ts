import { Associado } from "./Associado";

export class Evento {
    nome: string;
    data: string;
    hora: string;
    local:string;
    descricao: string;
    link: string;
    valorAssociado: number;
    valorNaoAssociado: number;
    organizador: Associado;
}