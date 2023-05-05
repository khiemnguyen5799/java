// LAB4.1: HÀM
/*
function datnuoc(country, population, capitalCity) {
  const quocgia = `${country} has ${population} people and its capital city is ${capitalCity}'.`
  console.log(quocgia);
  return quocgia;
}

const phanLan = datnuoc('Finland', 6000000, 'Helsinki');
const nhatban=datnuoc('Nhật Bản', 125000000, 'Osaka');
const USA=datnuoc('USA', 336000000, 'Washington D.C');
*/
///////////////////////////////////////////////////////////////////




// LAB4.2: Khai báo hàm với biểu thức hàm

// function percentageOfWorld1(tennuoc,population){
//   const tile=(`dân số ${tennuoc} chiếm ${population/7900000000*100}% dân số thế giới.`);
//   console.log(tile);
//   return tile;
// }


// cách 1

// const phantramtrungquoc=percentageOfWorld1(1441000000);
// console.log(`dân số Trung Quốc chiếm ${phantramtrungquoc}% dân số thế giới.`);
// const nhatban=percentageOfWorld1(125000000);
// console.log(`dân số Nhật Bản chiếm ${nhatban}% dân số thế giới.`);
// const USA=percentageOfWorld1(336000000);
// console.log(`dân số USA chiếm ${USA}% dân số thế giới.`);


//cách 2
// const phanLan = percentageOfWorld1('Finland', 6000000);
// const nhatban=percentageOfWorld1('Nhật Bản', 125000000);
// const USA=percentageOfWorld1('USA', 336000000);





//////////////////////////////////////////////////////////////////////////

// Lab 4.3. Hàm mũi tên 
/*
const percentageOfWorld3 = (tennuoc,population) => {
  const tile = population / 7900000000 * 100;
  return `dân số ${tennuoc} chiếm ${tile}% dân số thế giới.`
}
console.log(percentageOfWorld3('USA',336000000));
console.log(percentageOfWorld3('Japan',125000000));
console.log(percentageOfWorld3('china',1441000000));


*/

//////////////////////////////////////////////////////////////////////////


// Lab 4.4. Hàm gọi hàm

const describePopulation = function (country,population) {
  return `dân số ${country} chiếm ${population/7900000000*100}% dân số thế giới.`;

}
function percentageOfWorld1(ten,tilechina) {
  const trung = describePopulation(ten,tilechina);
  return trung;
}



console.log(percentageOfWorld1('china',1441000000));
console.log(percentageOfWorld1('japan',125000000));
console.log(percentageOfWorld1('usa',336000000));


////////////////////////////////////////////////////////////////////////////////////




// Lab 4.5. Giới thiệu về Array
/*
const populations = ['vietnam','china','japan','usa']
console.log(populations);
 

const tinhtile=function (tile){

  return tile/7900000000*100;
}
const percentages= [9000000000,1441000000000,125000000000,336000000000]
const tile1=tinhtile(percentages[0]);
const tile2=tinhtile(percentages[1]);
const tile3=tinhtile(percentages[2]);
const tile4=tinhtile(percentages[3]);

console.log(`dan so cua cac nuoc lan luot la ${tile1}%  ${tile2}%  ${tile3}%  ${tile4}%`);

*/



/////////////////////////////////////////////////////////////////////////////////////////////

// Lab 4.6. Các phép toán cơ bản với array
/*
const neighbours=['Republic of Sweden','laos','thailan'];

const newneighbours=neighbours.push('Utopia');
const bienmat=neighbours.pop();
// console.log( 'Probably not a central European country :D');
console.log(neighbours);
*/