import Avaliacao from './Avaliacao.model';
import Endereco from './Endereco.model';

export default interface Aluno {
  id: number;
  nome: string;
  telefone: string;
  dataNascimento: Date;
  endereco: Endereco;
  avaliacoes: Avaliacao[];
}
