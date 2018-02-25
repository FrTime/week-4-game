crystalGame = {
  // Variables to be used
  gem1: 0,
  gem2: 0,
  gem3: 0,
  gem4: 0,
  winCounter: 0,
  lossCounter: 0,
  currentScore: 0,
  randomNumber: 0,
  gameActive: false,

  getRandom: function(min, max) {
    // min = inclusive, max = exclusive
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },

  initializeGame: function() {
    this.gem1 = 0;
    this.gem2 = 0;
    this.gem3 = 0;
    this.gem4 = 0;
    this.winCounter = 0;
    this.lossCounter = 0;
    this.currentScore = 0;
    this.randomNumber = 0;
    this.gameActive = true;
  },

  gameListener: function() {
    if (crystalGame.gameActive === true) {
      if (crystalGame.currentScore === crystalGame.randomNumber) {
        alert("You win!");
        crystalGame.winCounter++;
        $("#wins").text(crystalGame.winCounter);
        crystalGame.gameStart();
      }
      if (crystalGame.currentScore > this.randomNumber) {
        alert("You lose!");
        crystalGame.lossCounter++;
        $("#losses").text(crystalGame.lossCounter);
        crystalGame.gameStart();
      }
    }
  },

  gameStart: function() {
    this.gem1 = this.getRandom(1, 13);
    this.gem2 = this.getRandom(1, 13);
    this.gem3 = this.getRandom(1, 13);
    this.gem4 = this.getRandom(1, 13);
    this.currentScore = 0;
    this.randomNumber = this.getRandom(19, 121);
    this.gameActive = true;
    this.gameListener();
    $("#current-score").text(this.currentScore);
    $("#random-number").text(this.randomNumber);
    $("#wins").text(crystalGame.winCounter);
    $("#losses").text(crystalGame.lossCounter);
  },

  gameEvents: $(document).ready(function() {
    $("#start-game").on("click", function() {
      crystalGame.initializeGame();
      crystalGame.gameStart();
    });

    $("#gem1").on("click", function() {
      crystalGame.currentScore = crystalGame.currentScore + crystalGame.gem1;
      $("#current-score").text(crystalGame.currentScore);
      crystalGame.gameListener();
    });

    $("#gem2").on("click", function() {
      crystalGame.currentScore = crystalGame.currentScore + crystalGame.gem2;
      $("#current-score").text(crystalGame.currentScore);
      crystalGame.gameListener();
    });

    $("#gem3").on("click", function() {
      crystalGame.currentScore = crystalGame.currentScore + crystalGame.gem3;
      $("#current-score").text(crystalGame.currentScore);
      crystalGame.gameListener();
    });

    $("#gem4").on("click", function() {
      crystalGame.currentScore = crystalGame.currentScore + crystalGame.gem4;
      $("#current-score").text(crystalGame.currentScore);
      crystalGame.gameListener();
    });
  })
};
