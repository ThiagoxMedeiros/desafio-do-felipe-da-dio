/*Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante*/
let heroi = [
  {nomeHeroi:'Link', qtdXp: 999},
  {nomeHeroi:'Kratos', qtdXp:2001},
  {nomeHeroi:'Seya', qtdXp:1500},
  {nomeHeroi:'Shaka', qtdXp:7000},
  {nomeHeroi:'Goku', qtdXp:10001},
]

for(let i=0;i<=heroi.length;i++){
  if(heroi[i].qtdXp >= 0 && heroi[i].qtdXp <=1000){
    console.log(`O herói ${heroi[i].nomeHeroi} é nível Ferro!`);
  }else if(heroi[i].qtdXp >= 1001 && heroi[i].qtdXp <= 2000){
    console.log(`O herói ${heroi[i].nomeHeroi} é  nível Bronze!`)
  }else if(heroi[i].qtdXp >= 2001 && heroi[i].qtdXp <= 5000){
    console.log(`O herói ${heroi[i].nomeHeroi} é nível Prata!`)
  }else if(heroi[i].qtdXp >= 5001 && heroi[i].qtdXp <= 7000){
    console.log(`O herói ${heroi[i].nomeHeroi} é nível Ouro!`)
  }else if(heroi[i].qtdXp >= 7001 && heroi[i].qtdXp <= 8000){
    console.log(`O herói ${heroi[i].nomeHeroi} é nível Platina!`)
  }else if(heroi[i].qtdXp >= 8001 && heroi[i].qtdXp <= 9000){
    console.log(`O herói ${heroi[i].nomeHeroi} é nível Ascendente!`)
  }else if(heroi[i].qtdXp >= 9001 && heroi[i].qtdXp <= 10000){
    console.log(`O herói ${heroi[i].nomeHeroi} é nível Imortal!`)
  }else{
    console.log(`O herói ${heroi[i].nomeHeroi} é nível Radiante!`)
  }
}

