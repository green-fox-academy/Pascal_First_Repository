"use strict";
export {};

class PostIt {
  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(backgroundColor: string, text: string, textColor: string) {
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.textColor = textColor;
  }
}

let myFirstPostIt: PostIt = new PostIt("orange", "Idea 1", "blue");
console.log(myFirstPostIt);
let mySecondPostIt: PostIt = new PostIt("pink", "Awesome", "black");
console.log(mySecondPostIt);
let myThirdPostIt: PostIt = new PostIt("yellow", "Superb!", "green");
console.log(myThirdPostIt);
