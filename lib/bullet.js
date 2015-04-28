(function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function (obj) {
    moveParams = {
      pos: obj.pos,
      vel: [obj.vel[0] + 1, obj.vel[1] + 1],
      radius: Bullet.RADIUS,
      color: Bullet.COLOR,
      game: obj.game
    };
    Asteroids.MovingObject.call(this, moveParams);
  };

  Bullet.COLOR = "#580BDE"
  Bullet.RADIUS = 5

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

  Bullet.prototype.collideWith = function (otherObject) {

    if (otherObject instanceof Asteroids.Asteroid) {
      this.game.remove(otherObject);
    }
  };

  Bullet.prototype.isWrappable = false


})();
