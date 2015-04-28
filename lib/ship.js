;(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  };

  var Ship = Asteroids.Ship = function (game) {
    Asteroids.MovingObject.call(this, {
      pos: game.randomPosition(),
      color: Ship.COLOR,
      radius: Ship.RADIUS,
      vel: [0, 0],
      game: game
    });
  };

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.COLOR = "#29d4bf";
  Ship.RADIUS = 10;

  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };

  Ship.prototype.power = function (impulse) {
    var newX = this.vel[0] + impulse[0];
    var newY = this.vel[1] + impulse[1];
    this.vel = [newX, newY];
  };

  Ship.prototype.fireBullet = function() {
    var obj = {
      pos: this.pos,
      vel: this.vel,
      game: this.game
    };
    var bullet = new Asteroids.Bullet(obj);
    this.game.add(bullet);
  };

})();
