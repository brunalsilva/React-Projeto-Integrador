import Categoria from './Categoria'

interface Produto{
    id: number;
    nome: string;
    quantidade: number;
    servico: boolean;
    foto: string;
    descricao: string;
    preco: number;
    categoria?: Categoria| null
}

export default Produto;