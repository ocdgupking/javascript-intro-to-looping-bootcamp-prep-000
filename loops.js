function forLoop(array){
  for (var i = 0; i < 25; i++) {
    if (i == 1) {
    console.log array.push("I am 1 strange loop")
  }
    else console.log array.push("I am ${i} strange loops")
}
return array;
}