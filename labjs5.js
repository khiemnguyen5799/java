
// Lab 5.1. Giới thiệu về Object
/*
const myCountry = {
  country: 'Finland ',
  capital: 'Helsinki',
  language: 'finnish',
  population: 6,
  neighbours: ['Norway', 'Sweden', 'Russia']
}


// Lab 5.2. Dấu chấm với dấu ngoặc

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours} neighbouring countries and a capital called ${myCountry.capital}`);

console.log(myCountry.population + 2);
console.log(myCountry['population'] - 2);

*/





/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lab 5.3. Phương thức Object
/*

const myCountry = {
  country: 'Finland ',
  capital: 'Helsinki',
  language: 'finnish',
  population: 6,
  neighbours: ['Norway', 'Sweden', 'Russia'],
  describe: function () {
    console.log(`${this.country} has ${this.population} million${this.language}-speaking people, ${this.neighbours} neighbouring countries and a capital called ${this.capital}`);
  },
  checkIsland:function(){
   console.log(this.checkIsland=this.neighbours.length === 0 ? true : false); 
  }
}
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

*/










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lab 5.4. Vòng lặp For
/*

for (rep = 1; rep <= 50; rep++) {
console.log(`Voter number ${rep} is currently voting`);
}


*/


////////////////////////////////////////////////////////////////////////////////////////////////////
// Lab 5.5. Lặp trong array, break và continue
/*
const populations = ['vietnam','china','japan','usa']

const tinhtile=function (tile){

  return tile/7900000000*100;
}
for (let i =0; i<populations.length; i++){
const percentages= [90000000,1441000000,125000000,336000000]
const tile1=tinhtile(percentages[0]);
const tile2=tinhtile(percentages[1]);
const tile3=tinhtile(percentages[2]);
const tile4=tinhtile(percentages[3]);

console.log(`dan so cua cac nuoc lan luot la
  ${tile1}% 
  ${tile2}%  
  ${tile3}% 
  ${tile4}%`);

}

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lab 5.6. Vòng lặp ngược và Vòng lặp trong vòng lặp 


/*
const listOfNeighbours=  [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i =1; i<=1; i++){
  console.log(`-------------- các nước lân cận`);

  for(let o=2;o<listOfNeighbours[0].length;o++){
    console.log(`các nước là ${listOfNeighbours[0]}`);
  }
  for(let e=2;e<listOfNeighbours[1].length;e++){
    console.log(`các nước là ${listOfNeighbours[1]}`);
  }
  for(let a=2;a<listOfNeighbours[2].length;a++){
    console.log(`các nước là ${listOfNeighbours[2]}`);
  }
}

*/



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Lab 5.7. Vòng lặp While 

/*
const populations = ['vietnam','china','japan','usa']

const tinhtile=function (tile){

  return tile/7900000000*100;
}
let i =0;
while (i<4) {
const percentages= [90000000,1441000000,125000000,336000000]
const tile1=tinhtile(percentages[0]);
const tile2=tinhtile(percentages[1]);
const tile3=tinhtile(percentages[2]);
const tile4=tinhtile(percentages[3]);
 i++;
console.log(`dan so cua cac nuoc lan luot la
  ${tile1}% 
  ${tile2}%  
  ${tile3}% 
  ${tile4}%`);

}


*/









////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Lab 5.8.1. So sánh chỉ số BMI 
/*
const mark={
  fullName:'Mark Miller',
  mass:78,
  height:1.69,

  calcBMI :function(){
console.log(this.mass/(this.height*this.height));
  }
}
const john={
  fullName:'John Smith',
  mass:92,
  height:1.95,

  calcBMI :function(){
console.log(this.mass/(this.height*this.height));
  }
}
mark.calcBMI();
john.calcBMI();

console.log(`${john.fullName}'s BMI (27.3) is higher than ${mark.fullName}'s (24.2)!`);

*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Lab 5.8.2. Cải thiện Tip calculator
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips=[];
const totals=[];
const clacTip = function (){
const tips=bills[0] <= 300 && bills[0] >=50 ? bills[0] * 0.15 : bills[0] * 0.2;
}
console.log(`The bill was ${bills[0]}, the tip was ${tips}, and the totals value ${bills[0]+tips}`);








