const poll = {
  question: "What is your favourite programming language? ",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  numberOfVotes: new Array(4).fill(0),

  registerNewAnswer: function () {
    const prom = Number(
      prompt(`${this.question}\n${this.options[0]}\n${this.options[1]}\n${this.options[2]}\n${this.options[3]}\n(Write option number)`)
    );

    if (!isNaN(prom) && prom >= 0 && prom <= 3) {
      this.numberOfVotes[prom]++;
    }else{
      alert("Câu trả lời không hợp lệ");
    }
  },
  displayResults: function (type) {
    if (type === 'string') {
      console.log(`Poll result are${this.numberOfVotes.join(',')}`);
    } else if (type === 'array') {
      console.log(this.numberOfVotes);
    }
  }
};
btnAnswer = document.getElementById("btn-answer");

btnAnswer.addEventListener('click', function () {
  poll.registerNewAnswer();
  poll.displayResults('array');
  poll.displayResults('string');
});



