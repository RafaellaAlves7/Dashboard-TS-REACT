import api from './api';

export interface Informacoes {
    
    id: number,
    foto: string,
    nome: string,
    cargo: string,
    resumo: string
}

export async function creatInformacoes(informacoes: Informacoes): Promise<Informacoes> {
    //post(cadastrar informaçao), put(atualizar ou editar a informaçao)
    return await api.put<Informacoes>('/informacoes/1', informacoes);
}