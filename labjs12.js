/*
function checkDogs(dogJulia, dogKate) {
  const newJulia = dogJulia.slice(); 
  // xóa tuổi của 2 con chó đầu tiên trong mảng newJulia
  newJulia.splice(0, 2);

  // nối newJulia và dogKate với nhau
  const allDogs = newJulia.concat(dogKate);

  // kiểm tra tuổi của từng con chó và in ra kết quả phù hợp
  allDogs.forEach((age, i) => {
    if (age >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
}

// test hàm
const dogJulia = [3, 5, 2, 12, 7];
const dogKate = [4, 1, 15, 8, 3];
checkDogs(dogJulia, dogKate)

*/
/////////////////////////////////////////////////////////////////////////
// Lab 12.2: Chuyển đổi tuổi thú cưng
/*

function calcAverageHumanAge(dogAges) {
  const humanAges = dogAges.map(dogAge => dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4);
  const adultHumanAges = humanAges.filter(humanAge => humanAge >= 18);
  const averageAdultHumanAge = adultHumanAges.reduce((sum, humanAge) => sum + humanAge, 0) / adultHumanAges.length;
  return averageAdultHumanAge;
}

const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];


console.log(calcAverageHumanAge(testData1));
console.log(calcAverageHumanAge(testData2));

*/

//////////////////////////////////////////////////////////////////////////
// Lab 12.3: Sử dụng Arrow Function

// Lab 12.3: Sử dụng Arrow Function

function calcAverageHumanAge(dogAges) {
  const humanAges = dogAges.map(age => age <= 2 ? 2 * age : 16 + age * 4);
  const adultHumanAges = humanAges.filter(age => age >= 18);
  const averageHumanAge = adultHumanAges.reduce((acc, age) => acc + age, 0) / adultHumanAges.length;

  return averageHumanAge;
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));