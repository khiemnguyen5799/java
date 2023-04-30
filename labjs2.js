//LAB 2.1 : Các kiểu dữ liệu
// let country = 'vietnam';
// let continent = 'asia';
// let population = 90000000;
// let language = '';
// let islslan = false;


// console.log(population);
// console.log(islslan);
// console.log(country);
// console.log(language);

////////////////////////////////////////

//LAB 2.2 : Let, const và var 
// const country = 'vietnam';
// const continent = 'asia';
// const population = 90000000;
// const language = 'vietnamese';
// const islslan = false;

// // giá trị sau khi thay đổi const ko thay đổi


// console.log(population);
// console.log(islslan);
// console.log(country);
// console.log(language);




////////////////////////////////////////////


// LAB 2.3 : Các toán tử cơ bản
const country = 'vietnam';
const continent = 'asia';
const vietnam = 90000000;
const language = 'vietnamese';
const populationvn = 90000000;
const dansothegioi = 33000000;
const population = populationvn / 2;
console.log(population);

const populationnow = population + 1;
console.log(populationnow);

const phanlan = 6000000;
console.log(phanlan);

console.log(population > phanlan);

console.log(vietnam < dansothegioi);

const description = country + ' and its ' + vietnam + ' people speak ' + language + '.';

// const description=`${country} and its ${populationvn} people speak ${language}.`
console.log(description);

if (vietnam > 33000000) {
  console.log(`${country} population is above average`);
} else {
  console.log(`${country}'s population is ${vietnam - dansothegioi} below average`);
}



