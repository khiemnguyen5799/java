const poll = {
  question: "What is your favourite programming language? ",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  numberOfVotes: new Array(4).fill(0),

  registerNewAnswer() {
    let prom = Number(
      prompt(`${this.question}?/n${this.options}/n(Write option number)`)
    );

    while (isNaN(prom) || prom < 0 || prom > 3) {
      alert("Câu trả lời không hợp lệ");
      prom = prompt(
        `${this.question}?/n${this.options}/n(Write option number)`
      );
    }
    // this.numberOfVotes[prom]++;
  },
  displayResults(type = "string") {
    if (type === "string") {
      console.log(`Poll result are${this.numberOfVotes.join(',')}`);
    } else if (type === "array") {
      console.log(this.numberOfVotes);
    }
  }
};
const btnAnswer = document.getElementById("btn-answer");
btnAnswer.addEventListener('click', function () {
  console.log( [5, 2, 3]);
})

