;(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Util = window.Asteroids.Util;

  var Asteroid = Asteroids.Asteroid = function (posObject) {
    optionObject = {
      pos: posObject.pos,
      radius: Asteroid.RADIUS,
      color: Asteroid.COLOR,
      vel: Asteroids.Util.randomVec(1),
      game: posObject.game
    };
    Asteroids.MovingObject.call(this, optionObject);
  };

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);


  Asteroid.COLOR = "#F64E9C";
  Asteroid.RADIUS = 20;


  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    }
    else if (otherObject instanceof Asteroids.Bullet) {
      otherObject.game.remove(this);
      otherObject.game.remove(otherObject);
    }
  };


})();
