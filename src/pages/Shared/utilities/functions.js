function wordLimiter(text, number) {
  let Text = "";
  let wordCounter = 0;
  let temp = "";
  console.log(text.length);
  for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
    temp += text[i];
    if (text[i] === " ") {
      console.log("word: ", temp);
      Text += temp;
      wordCounter += 1;
      temp = "";
    }
    if (wordCounter === number) {
      return Text;
    }
  }
}

export { wordLimiter };
