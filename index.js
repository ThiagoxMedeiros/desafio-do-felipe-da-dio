/*Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante*/

let heroi = [
  {nomeHeroi:'Link', qtdXp:999},
  {nomeHeroi:'Kratos', qtdXp:2001},
  {nomeHeroi:'Seya', qtdXp:1500},
  {nomeHeroi:'Shaka', qtdXp:7000},
  {nomeHeroi:'Goku', qtdXp:10001},
]
let nivelHeroi = 0;
let rankHeroi ="";
let i = 0;
let nome =""

// CRIANDO LAÇO DE REPETIÇÃO COM FOR
/*for(let i=0;i<heroi.length;i++){
 let nome = heroi[i].nomeHeroi 
  nivelHeroi = heroi[i].qtdXp
  if(nivelHeroi >= 0 && nivelHeroi <=1000){
    rankHeroi = "Ferro"
    console.log(`O herói ${nome} é nível ${rankHeroi}!`);
  }else if(nivelHeroi >= 1001 && nivelHeroi <= 2000){
    rankHeroi = "Bronze"
    console.log(`O herói ${nome} é nível ${rankHeroi}!`);
  }else if(nivelHeroi >= 2001 && nivelHeroi <= 5000){
    rankHeroi = "Prata"
    console.log(`O herói ${nome} é nível ${rankHeroi}!`);
  }else if(nivelHeroi >= 5001 && nivelHeroi <= 7000){
    rankHeroi = "Ouro"
    console.log(`O herói ${nome} é nível ${rankHeroi}!`);
  }else if(nivelHeroi >= 7001 && nivelHeroi <= 8000){
    rankHeroi = "Platina"
    console.log(`O herói ${nome} é nível ${rankHeroi}!`);
  }else if(nivelHeroi >= 8001 && nivelHeroi <= 9000){
    rankHeroi = "Ascendente"
    console.log(`O herói ${nome} é nível ${rankHeroi}!`);;
  }else if(nivelHeroi >= 9001 && nivelHeroi <= 10000){
    rankHeroi = "Imortal"
    console.log(`O herói ${nome} é nível ${rankHeroi}!`);
  }else{
    rankHeroi = "Radiante"
    console.log(`O herói ${nome} é nível ${rankHeroi}!`);
  }
}*/

//FAZENDO LAÇO DE REPETIÇÃO COM WHILE
/*while(i < heroi.length){
  let nome = heroi[i].nomeHeroi 
   nivelHeroi = heroi[i].qtdXp
   if(nivelHeroi >= 0 && nivelHeroi <=1000){
     rankHeroi = "Ferro"
     console.log(`O herói ${nome} é nível ${rankHeroi}!`);
   }else if(nivelHeroi >= 1001 && nivelHeroi <= 2000){
     rankHeroi = "Bronze"
     console.log(`O herói ${nome} é nível ${rankHeroi}!`);
   }else if(nivelHeroi >= 2001 && nivelHeroi <= 5000){
     rankHeroi = "Prata"
     console.log(`O herói ${nome} é nível ${rankHeroi}!`);
   }else if(nivelHeroi >= 5001 && nivelHeroi <= 7000){
     rankHeroi = "Ouro"
     console.log(`O herói ${nome} é nível ${rankHeroi}!`);
   }else if(nivelHeroi >= 7001 && nivelHeroi <= 8000){
     rankHeroi = "Platina"
     console.log(`O herói ${nome} é nível ${rankHeroi}!`);
   }else if(nivelHeroi >= 8001 && nivelHeroi <= 9000){
     rankHeroi = "Ascendente"
     console.log(`O herói ${nome} é nível ${rankHeroi}!`);;
   }else if(nivelHeroi >= 9001 && nivelHeroi <= 10000){
     rankHeroi = "Imortal"
     console.log(`O herói ${nome} é nível ${rankHeroi}!`);
   }else{
     rankHeroi = "Radiante"
     console.log(`O herói ${nome} é nível ${rankHeroi}!`);
   }
   i = i + 1
 }*/

 //FAZENDO LAÇO DE REPETIÇÃO COM FOREACH
 /* heroi.forEach(item =>{
  let nome = heroi[i].nomeHeroi 
   nivelHeroi = heroi[i].qtdXp
   if(nivelHeroi >= 0 && nivelHeroi <=1000){
     rankHeroi = "Ferro"
     console.log(`O herói ${nome} é nível ${rankHeroi}!`);
   }else if(nivelHeroi >= 1001 && nivelHeroi <= 2000){
     rankHeroi = "Bronze"
     console.log(`O herói ${nome} é nível ${rankHeroi}!`);
   }else if(nivelHeroi >= 2001 && nivelHeroi <= 5000){
     rankHeroi = "Prata"
     console.log(`O herói ${nome} é nível ${rankHeroi}!`);
   }else if(nivelHeroi >= 5001 && nivelHeroi <= 7000){
     rankHeroi = "Ouro"
     console.log(`O herói ${nome} é nível ${rankHeroi}!`);
   }else if(nivelHeroi >= 7001 && nivelHeroi <= 8000){
     rankHeroi = "Platina"
     console.log(`O herói ${nome} é nível ${rankHeroi}!`);
   }else if(nivelHeroi >= 8001 && nivelHeroi <= 9000){
     rankHeroi = "Ascendente"
     console.log(`O herói ${nome} é nível ${rankHeroi}!`);;
   }else if(nivelHeroi >= 9001 && nivelHeroi <= 10000){
     rankHeroi = "Imortal"
     console.log(`O herói ${nome} é nível ${rankHeroi}!`);
   }else{
     rankHeroi = "Radiante"
     console.log(`O herói ${nome} é nível ${rankHeroi}!`);
   }
   i = i + 1
  })*/

  // FAZENDO A ESTRUTURA DE DECIÇÃO COM SWITH CASE
  heroi.forEach(item =>{
    nome = heroi[i].nomeHeroi;
    nivelHeroi = heroi[i].qtdXp;
    i = i +1;
    switch (true){ 
      case (nivelHeroi >=0 && nivelHeroi <= 1000):
        rankHeroi = "Ferro";
        console.log(`O herói ${nome} é nível ${rankHeroi}!`);
        break;
      case (nivelHeroi >= 1001 && nivelHeroi <=2000):
        rankHeroi = "bronze";
        console.log(`O herói ${nome} é nível ${rankHeroi}!`);
        break;
        case (nivelHeroi >= 2001 && nivelHeroi <=5000):
        rankHeroi = "prata";
        console.log(`O herói ${nome} é nível ${rankHeroi}!`);
        break;
        case (nivelHeroi >= 5001 && nivelHeroi <=7000):
        rankHeroi = "Ouro";
        console.log(`O herói ${nome} é nível ${rankHeroi}!`);
        break;
        case (nivelHeroi >= 7001 && nivelHeroi <=8000):
        rankHeroi = "Platina";
        console.log(`O herói ${nome} é nível ${rankHeroi}!`);
        break;
        case (nivelHeroi >= 8001 && nivelHeroi <=9000):
        rankHeroi = "Ascedente";
        console.log(`O herói ${nome} é nível ${rankHeroi}!`);
        break;
        case (nivelHeroi >= 9001 && nivelHeroi <=10000):
          rankHeroi = "Imortal";
          console.log(`O herói ${nome} é nível ${rankHeroi}!`);
          break;
      
      default:
        rankHeroi = "Radiante";
        console.log(`O herói ${nome} é nível ${rankHeroi}!`);
     }
    })