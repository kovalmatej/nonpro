export const rateAnswers = (answers) => {
  let rating = [];
  console.log(answers.length);

  for(let i = 0; i < answers.length;i++) {
    console.log(answers[i])
    if(i == 0) {
      switch(answers[i].answer){
        case "0":
          rating.push(100);
          break;
        case "1":
          rating.push(60);
          break;
        case "2":
          rating.push(0);
          break;
        case "3":
          break;
      }
    }

    if(i == 1) {
      switch(answers[i].answer){
        case "0":
          rating.push(0);
          break;
        case "1":
          rating.push(50);
          break;
        case "2":
          rating.push(10);
          break;
        case "3":
          rating.push(0);
          break;
      }
    }

    if(i == 2) {
      switch(answers[i].answer){
        case "0":
          rating.push(100);
          break;
        case "1":
          rating.push(70);
          break;
        case "2":
          rating.push(30);
          break;
        case "3":
          rating.push(0);
          break;
      }
    }

    if(i == 3) {
      switch(answers[i].answer){
        case "0":
          rating.push(100);
          break;
        case "1":
          rating.push(80);
          break;
        case "2":
          rating.push(0);
          break;
        case "3":
          rating.push(40);
          break;
      }
    }

    if(i == 4) {
      switch(answers[i].answer){
        case "0":
          rating.push(100);
          break;
        case "1":
          rating.push(60);
          break;
        case "2":
          rating.push(30);
          break;
        case "3":
          rating.push(10);
          break;
      }
    }

    if(i == 5) {
      switch(answers[i].answer){
        case "0":
          rating.push(100);
          break;
        case "1":
          rating.push(70);
          break;
        case "2":
          rating.push(0);
          break;
        case "3":
          break;
      }
    }

    if(i == 6) {
      switch(answers[i].answer){
        case "0":
          rating.push(100);
          break;
        case "1":
          rating.push(60);
          break;
        case "2":
          rating.push(0);
          break;
        case "3":
          break;
      }
    }

    if(i == 7) {
      switch(answers[i].answer){
        case "0":
          rating.push(100);
          break;
        case "1":
          rating.push(0);
          break;
        case "2":
          rating.push(40);
          break;
        case "3":
          break;
      }
    }

    if(i == 8) {
      switch(answers[i].answer){
        case "0":
          rating.push(0);
          break;
        case "1":
          rating.push(100);
          break;
      }
    }

    if(i == 9) {
      switch(answers[i].answer){
        case "0":
          rating.push(100);
          break;
        case "1":
          rating.push(0);
          break;
        case "2":
          rating.push(30);
          break;
        case "3":
          break;
      }
    }

    if(i == 10) {
      switch(answers[i].answer){
        case "0":
          rating.push(100);
          break;
        case "1":
          rating.push(0);
          break;
      }
    }

    if(i == 11) {
      switch(answers[i].answer){
        case "0":
          rating.push(100);
          break;
        case "1":
          rating.push(0);
          break;
      }
    }

    if(i == 12) {
      switch(answers[i].answer){
        case "0":
          rating.push(100);
          break;
        case "1":
          rating.push(0);
          break;
        case "2":
          rating.push(30);
          break;
        case "3":
          break;
      }
    }

    if(i == 13) {
      switch(answers[i].answer){
        case "0":
          rating.push(100);
          break;
        case "1":
          rating.push(60);
          break;
        case "2":
          rating.push(20);
          break;
        case "3":
          rating.push(0);
          break;
      }
    }

    if(i == 14) {
      switch(answers[i].answer){
        case "0":
          rating.push(100);
          break;
        case "1":
          rating.push(80);
          break;
        case "2":
          rating.push(40);
          break;
        case "3":
          rating.push(0);
          break;
      }
    }

    if(i == 15) {
      switch(answers[i].answer){
        case "0":
          rating.push(100);
          break;
        case "1":
          rating.push(0);
          break;
        case "2":
          rating.push(60);
          break;
        case "3":
          break;
      }
    }

    if(i == 16) {
      switch(answers[i].answer){
        case "0":
          rating.push(100);
          break;
        case "1":
          rating.push(60);
          break;
        case "2":
          rating.push(40);
          break;
        case "3":
          rating.push(0);
          break;
      }
    }

    if(i == 17) {
      switch(answers[i].answer){
        case "0":
          rating.push(100);
          break;
        case "1":
          rating.push(0);
          break;
        case "2":
          rating.push(60);
          break;
        case "3":
          break;
      }
    }

    if(i == 18) {
      switch(answers[i].answer){
        case "0":
          rating.push(100);
          break;
        case "1":
          rating.push(60);
          break;
        case "2":
          rating.push(30);
          break;
        case "3":
          rating.push(0);
          break;
      }
    }

    if(i == 19) {
      switch(answers[i].answer){
        case "0":
          rating.push(100);
          break;
        case "1":
          rating.push(60);
          break;
        case "2":
          rating.push(30);
          break;
        case "3":
          rating.push(0);
          break;
      }
    }

  }

  return rating;
};
