let btn=document.getElementById("btn");
btn.addEventListener("click",OpeningCeremony)

function OpeningCeremony() {
  console.log("Let the games begin");
  setTimeout(function() {
    let score = {
      red: 0,
      yellow: 0,
      green: 0,
      blue: 0
    };
    Race100M(score, function(score) {
      LongJump(score, function(score) {
        HighJump(score, function(score) {
          AwardCeremony(score);
        });
      });
    });
  }, 1000);
}

function Race100M(score, callbackFnc) {
  console.log("Score before Race100M:", score);
  setTimeout(function() {
    let timeRed = Math.floor(Math.random() * 6) + 10;
    let timeYellow = Math.floor(Math.random() * 6) + 10;
    let timeGreen = Math.floor(Math.random() * 6) + 10;
    let timeBlue = Math.floor(Math.random() * 6) + 10;

    let results = [
      { color: "red", time: timeRed },
      { color: "yellow", time: timeYellow },
      { color: "green", time: timeGreen },
      { color: "blue", time: timeBlue }
    ];

    results.sort(function(a, b) {
      return a.time - b.time;
    });

    score[results[0].color] += 50;
    score[results[1].color] += 25;

    console.log(
      `${results[0].color} won Race100M with ${results[0].time} seconds.`
    );
    console.log(
      `${results[1].color} came second in Race100M with ${results[1].time} seconds.`
    );
    console.log(`Score after Race100M:`, score);
    callbackFnc(score);
  }, 3000);
}

function LongJump(score, callbackFnc) {
  
}

function HighJump(score, callbackFnc) {
  
  callbackFnc(score);
}

function AwardCeremony(score) {
 
}

