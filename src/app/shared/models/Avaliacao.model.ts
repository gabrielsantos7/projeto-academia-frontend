export default interface Avaliacao {
   id: number;
   data: Date;
   peso: number;
   altura: number;
   medidas: [number, number, number];
   porcentagemGordura: number;
   observacoes: string;
}

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