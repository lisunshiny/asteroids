(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function (object) {
    this.pos = object.pos;
    this.vel = object.vel;
    this.radius = object.radius;
    this.color = object.color;
    this.game = object.game;
  };


  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function() {

    var pos = [
      this.pos[0] + this.vel[0],
      this.pos[1] + this.vel[1]
    ];


      if (!this.game.isOutOfBounds(pos)) {
        this.pos = pos
      }
      else if (this.isWrappable) {
        this.pos = this.game.wrap(pos);
      }
      else {
        this.game.remove(this)
      }
  };

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    var sumOfRadii = otherObject.radius + this.radius;
    var distance = Asteroids.Util.distance(this.pos, otherObject.pos);

    return distance < sumOfRadii ? true : false;
  };


  MovingObject.prototype.collideWith =  function (otherObject) {
    // this.game.remove(otherObject);
    // this.game.remove(this);
  }

  MovingObject.prototype.isWrappable = true




})();
