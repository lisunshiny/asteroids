(function () {
  if (Asteroids === undefined) {
    window.Asteroids = {};
  }

  var Util = Asteroids.Util = {};

  Util.inherits = function (ChildClass, ParentClass) {
    var Surrogate = function () {};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

  Util.randomVec = function(length) {
    var dx = Math.random() * 2 - 1;
    var xRandom = dx * length;
    if (Math.random() > 0.5) {
      var y = 1;
    }else {
      var y = -1;
    }
    var yRandom = y  * Math.sqrt(Math.abs((length * length) - (xRandom * xRandom)));
    return [xRandom, yRandom];
  };

  Util.distance = function(pos1, pos2) {
    var xDistance = Math.pow((pos1[0] - pos2[0]), 2);
    var yDistance = Math.pow((pos1[1] - pos2[1]), 2);
    return Math.sqrt(xDistance + yDistance)
  };


})();
