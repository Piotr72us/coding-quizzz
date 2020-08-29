var clearEvent = document.getElementById("clear")

function printHighscores() {
  // either get scores from localstorage or set to empty array
  highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];

  // (optional) sort highscores by score property in descending order
  highScores.sort(function(a, b) {
    return b.score - a.score;
  });

  // for each score
  highScores.forEach(function(score) {
    var liTag = document.createElement("li");
    liTag.textContent = score;

    var olEl = document.getElementById("highscores");
    olEl.append(liTag);
  }


  );
    // create li tag for each high score

    // display on page
}

function clearHighscores() {
  // (and reload)
  console.log("I was clicked");
  var clearHighscores = document.getElemenentsByTagName("li");
  clearHighscores.textContent = "";

}

// attach clear event to clear score button

clearEvent.onclick = clearHighscores;

// run printhighscore when page loads
printHighscores();