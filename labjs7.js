'use strict';

/*
// truy vấn vào class message html
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='🎊🎉 Correct Number!';

//  thay đổi text trong html bằng các class
document.querySelector('.number').textContent='13';
document.querySelector('.score').textContent='10';

//  truy cập và thay đổi giá trị input
document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);
*/
//////////////////////////////////////////////////////////////////////////


//  thuật toán số ngẫu nhiên , trong đó 'trunc' làm mất số thập phân
const secritNumber = Math.trunc(Math.random() * 20) + 1;
// thêm biến đc tính taons ở trên gán vào trình thay đổi nội dung html
document.querySelector('.number').textContent = secritNumber;

// thêm điểm số bị giảm mỗi lần đoán sai rồi thêm vào hàm bên dưới
let score = 20;



// tạo hàm và tru cập đoán số bằng 'lắng nghe sự kiện 'click''
// java sẽ xác định sự kiện khi bạn 'click'
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);


  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';



  } else if (guess === secritNumber) {
    document.querySelector('.message').textContent = '🎊🎉 Correct Number!';

  } else if (guess > secritNumber) {

    // thêm if vào trog khung else if này để khi thua trò chơi sẽ chạy thông báo
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;

    } else {
      document.querySelector('.message').textContent = 'Bạn thua rồi 💣';

      document.querySelector('.score').textContent = 0;

    }

  } else if (guess < secritNumber) {

    //  tương tự như trên
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;

    } else {
      document.querySelector('.message').textContent = 'Bạn thua rồi 💣';

      document.querySelector('.score').textContent = 0;

    }


  }
});
