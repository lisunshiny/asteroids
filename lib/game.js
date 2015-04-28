(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function () {
    this.asteroids = this.addAsteroids(Game.NUM_ASTEROIDS);
    this.ship = new Asteroids.Ship(this);
    this.bullets = []
  };

  Game.DIM_X = 700;
  Game.DIM_Y = 500;

  Game.NUM_ASTEROIDS = 20;


  Game.prototype.addAsteroids = function (numberOfAsteroids) {
    var asteroids = [];
    var that = this;
    for (var i = 0; i < numberOfAsteroids ; i++) {
      asteroids.push(new Asteroids.Asteroid({
        pos: that.randomPosition(),
        game: that
      }));
    };
    return asteroids;
  };

  Game.prototype.randomPosition = function () {
    return [(Game.DIM_X*Math.random()), (Game.DIM_Y * Math.random())];
  };


  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.allObjects().forEach(function(asteroid){
      asteroid.draw(ctx);

    });
  };

  Game.prototype.moveObjects = function () {
    this.allObjects().forEach(function(asteroid) {
      asteroid.move();
    });
  };

  Game.prototype.wrap = function (pos) {
    var x = pos[0] < 0 ? Game.DIM_X + pos[0] : pos[0] % Game.DIM_X;
    var y = pos[1] < 0 ? Game.DIM_Y + pos[1] : pos[1] % Game.DIM_Y;

    return [x, y ];
  }

  Game.prototype.checkCollisions = function () {
    var that = this;
    this.allObjects().forEach(function(object1, i) {
      that.allObjects().slice(i+1).forEach(function(object2, j) {
        if (object1.isCollidedWith(object2)) {
          console.log("Collision");
          object1.collideWith(object2);
        };
      });
    });
  };

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function (obj) {
    if (obj instanceof Asteroids.Asteroid) {
      this.asteroids.splice(this.asteroids.indexOf(obj), 1);
    }
    else if (obj instanceof Asteroids.Bullet) {
      this.bullets.splice(this.bullets.indexOf(obj), 1);
    }
  };

  Game.prototype.allObjects = function() {
    return this.asteroids.concat([this.ship]).concat(this.bullets);
  };

  Game.prototype.add = function(object) {
    if (object instanceof Asteroids.Bullet) {
      this.bullets.push(object);
    }
    else if (object instanceof Asteroids.Asteroid) {
      this.asteroids.push(object);
    }
  };

  Game.prototype.isOutOfBounds = function(pos) {
    if (pos[0] < 0 || pos[0] > Game.DIM_X || pos[1] > Game.DIM_Y || pos[1] < 0) {
      return true;
    }
    else {
      return false;
    }
  };






















})();
