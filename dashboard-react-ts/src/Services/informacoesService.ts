import api from './api';

export interface Informacoes {
    
    id: number,
    foto: string,
    nome: string,
    cargo: string,
    resumo: string
}

export async function createInformacoes(informacoes: Informacoes): Promise<Informacoes> {
    //post(cadastrar informaçao), put(atualizar ou editar a informaçao)
    const response = await api.put<Informacoes>('/informacoes/1', informacoes);
    return response.data;
    
};