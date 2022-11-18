function setTimeoutSecond(second) {
  setTimeout(() => console.log(`${second}초 뒤에 실행시켜줘!`), second * 1000);
}

setTimeoutSecond(3);
