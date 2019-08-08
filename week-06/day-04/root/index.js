let x = 2;
let imgToUse = `${x}.jpg`;

function navLeft() {
  if (document.body
    .querySelectorAll('.navimg')[0].src === "1.jpg") {
        x = 6
    } else if(){
    document.body
      .querySelectorAll('.navimg')[0]
      .setAttribute('src', `${x--}.jpg`);
  } else {
    x = 6;
    document.body
      .querySelectorAll('.navimg')[0]
      .setAttribute('src', `${x--}.jpg`);
  }
}

function navRight() {
  if (x < 6) {
    document.body
      .querySelectorAll('.navimg')[0]
      .setAttribute('src', `${x++}.jpg`);
  } else {
    x = 1;
    document.body
      .querySelectorAll('.navimg')[0]
      .setAttribute('src', `${x++}.jpg`);
  }
}

function changeNavImg() {}
