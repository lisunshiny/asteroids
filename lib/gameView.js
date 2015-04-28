(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function () {
    that = this

    this.bindKeyHandlers();
    window.setInterval( function () {
      this.game.draw(this.ctx);
      this.game.step();

    }.bind(this), 10)
  }

  GameView.prototype.bindKeyHandlers = function() {
    that = this;
    key('up', function(){
      that.game.ship.power([0, -5]);
    });
    key('down', function(){
      that.game.ship.power([0, 5]);
    });
    key('left', function(){
      that.game.ship.power([-5, 0]);
    });
    key('right', function(){
      that.game.ship.power([5, 0]);
    });
    key('space', function(){
      that.game.ship.fireBullet();
    });
  };
  // kristina zmaic



})();
