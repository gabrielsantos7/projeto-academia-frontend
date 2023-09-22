import Avaliacao  from './Avaliacao';

export default interface Aluno {
   id: number;
   nome: string; 
   //altura: number; // Verificar
   //peso: number; // Verificar
   telefone: string;
   dataNascimento: Date;
   endereco: {
      id: number;
      logradouro: string;
      numero: string;
      bairro: string;
      cidade: string;
      estado: string;
      cep: string;
      //aluno: number; // Verificar
   }

   avaliacoes: Avaliacao[];

   // {
      // "id": 1,
      // "nome": "João Silva",
      // "altura": 1.75,
      // "peso": 70.5,
      // "telefone": "(11) 98765-4321",
      // "dataNascimento": "2000-05-15",
      // "endereco": {
      // "id": 1,
      // "logradouro": "Rua Principal",
      // "numero": "123",
      // "bairro": "Centro",
      // "cidade": "São Paulo",
      // "estado": "SP",
      // "cep": "01234-567",
      // "aluno": 1
      // },
      // "avaliacoes": [
      // {
      // "id": 1,
      // "data": "2023-08-24",
      // "peso": 70.5,
      // "altura": 1.75,
      // "medidas": [
      // 80,
      // 60,
      // 90
      // ],
      // "porcentagemGordura": 15,
      // "observacoes": "Avaliação física completa"
      // },
      // {
      // "id": 2,
      // "data": "2023-08-25",
      // "peso": 68,
      // "altura": 1.7,
      // "medidas": [
      // 82,
      // 62,
      // 91
      // ],
      // "porcentagemGordura": 14.5,
      // "observacoes": "Avaliação de seguimento"
      // },
      // {
      // "id": 3,
      // "data": "2023-08-26",
      // "peso": 75.2,
      // "altura": 1.8,
      // "medidas": [
      // 85,
      // 65,
      // 94
      // ],
      // "porcentagemGordura": 16,
      // "observacoes": "Avaliação pós-treino"
      // }
      // ]
      // }
}