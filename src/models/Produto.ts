import Categoria from './Categoria'
import User from './User'

interface Produto{
    id: number;
    nome: string;
    quantidade: number|null;
    servico: boolean;
    foto: string;
    descricao: string;
    preco: number|null;
    categoria: Categoria| null
    usuario: User|null
}

export default Produto;