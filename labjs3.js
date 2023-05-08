// LAB 3.1: Chuyển đổi kiểu và ép kiểu
/*
let n = '9' - '5';

let m = '19' - '13' + '17';

let l = '19' - '13' + 17;

let p = '123' < 57;

let q = 5 + 6 + '4' + 9 - 4 - 2;
console.log(n);
console.log(m);
console.log(l);
console.log(p);
console.log(q);
*/



////////////////////////////////////////////////////////////////////////////


// LAB3.2: Toán tử bằng: == với ===
// const numNeighbours =
//  Number( prompt('How many neighbor countries does your country have?'));



// if (numNeighbours == 1) {
//   console.log('Only 1 border 👍');
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border 🤞');
// } else {
//   console.log('No borders 🤌');
// }

// Toán tử === – so sánh cân bằng nghiêm ngặt

// Toán tử == – so sánh cân bằng lỏng lẻo

// So sánh bằng === cũng được các lập trình viên
//  khuyên dùng ngay cả khi ta phải thực hiện ép kiểu, 
//  trước khi so sánh, tốt hơn nên chuyển đổi kiểu một
//   cách thủ công thay vì dùng ==.




// if (numNeighbours===1) {
//   console.log('Only 1 border 👍');
// }else{
//   console.log('no borders');
// }



//////////////////////////////////////////////////////////////////////////////////////



// LAB3.3: Toán tử logic
// const danSobehon50=true;
// const ngonNgutiengAnh= true;
// const daoQuoc = false;

// // const datnuoccuasarah=prompt(danSobehon50&&ngonNgutiengAnh&&daoQuoc);


// const datnuocsarahcan= danSobehon50&&ngonNgutiengAnh&&daoQuoc;
// if(datnuocsarahcan){
//   console.log('You should live in Portugal');
// }else{
//   console.log('Portugal does not meet your criteria :(');
// }




// LAB3.4: Câu lệnh switch
/* 
const language='hindi'
switch (language) {
  case 'chinese':
  case 'mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D');
}
*/






// LAB3.5: Toán tử điều kiện (ba ngôi)
/*
const danSo=33000000;
const muctrungbinh=danSo ? 'tren' : 'duoi';
console.log(muctrungbinh);



let dansotrungbinh;
if(dansotrungbinh>=33000000){
  dansotrungbinh='tren';
}else{
  dansotrungbinh='duoi'
}
console.log(dansotrungbinh);

console.log(`dân số nước tây ban nha ${dansotrungbinh ? 'tren':'duoi'} mức trung bình. `);

*/

/////////////////////////////////////////////////////////////////////////////////////////

// Lab 3.6.1. Đội nào chiến thắng?
/*
const diemDolphins = (96+108+89) / 3;
const diemKoalas = (88+91+110) / 3;

console.log(diemDolphins,diemKoalas);

if (diemDolphins>diemKoalas){
  console.log('Dophins win');
}else if (diemDolphins<diemKoalas){
  console.log('Koalas win');
}else{
  console.log('no win');
}

*/


// BONUS 1
/*

const diemDolphins = (97+112+101) / 3;
const diemKoalas = (109+95+123) / 3;

console.log(diemDolphins,diemKoalas);

if (diemDolphins>diemKoalas&&diemDolphins>=100){
  console.log('Dophins win');
}else if (diemDolphins<diemKoalas&&diemKoalas>=100){
  console.log('Koalas win');
}else if(diemDolphins===diemKoalas&&diemDolphins>=100&&diemKoalas>=100){
  console.log('hoa');
}else{
  console.log('no win');
}
*/

// BONUS 2

/*
const diemDolphins = (97+112+101) / 3;
const diemKoalas = (109+95+106) / 3;

console.log(diemDolphins,diemKoalas);

if (diemDolphins>diemKoalas&&diemDolphins>=100){
  console.log('Dophins win');
}else if (diemDolphins<diemKoalas&&diemKoalas>=100){
  console.log('Koalas win');
}else if(diemDolphins===diemKoalas&&diemDolphins>=100&&diemKoalas>=100){
  console.log('hoa');
}else{
  console.log('no win');
}

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Lab 3.6.2. Tip calculator

const bill = 430;
const tip=bill <= 300 && bill >=50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);




