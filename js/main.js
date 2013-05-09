// Generated by CoffeeScript 1.6.2
(function() {
  var GameObject, Img0, Img1, Img2, MouseMove, addEventHandlers, backgroundForestImg, ctx, gameLoop, loadImage, mouseMove, mouseMoveImg, screenHeight, screenWidth, speed, step, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  console.log('1');

  backgroundForestImg = new Image;

  mouseMoveImg = new Image;

  Img0 = new Image;

  Img1 = new Image;

  Img2 = new Image;

  ctx = null;

  screenWidth = 640;

  screenHeight = 480;

  speed = 8;

  step = 1;

  GameObject = (function() {
    function GameObject() {}

    GameObject.x = 0;

    GameObject.y = 0;

    GameObject.image = null;

    GameObject.hp = 0;

    GameObject.SquareWidth = 0;

    GameObject.SquareHeight = 0;

    GameObject.Direction = 0;

    GameObject.MoveNum = 0;

    GameObject.MoveX = 0;

    GameObject.MoveY = 0;

    GameObject.speed_count = 0;

    return GameObject;

  })();

  MouseMove = (function(_super) {
    __extends(MouseMove, _super);

    function MouseMove() {
      _ref = MouseMove.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    return MouseMove;

  })(GameObject);

  mouseMove = new MouseMove;

  gameLoop = function() {
    ctx.clearRect(0, 0, screenWidth, screenHeight);
    ctx.save();
    ctx.drawImage(backgroundForestImg, 0, 0);
    return ctx.drawImage(mouseMove.image, mouseMove.x, mouseMove.y);
  };

  loadImage = function() {
    backgroundForestImg.src = './images/map.png';
    mouseMoveImg.src = './images/point.png';
    return mouseMove.image = mouseMoveImg;
  };

  addEventHandlers = function() {
    return ($('#container')).mousemove(function(e) {
      mouseMove.x = e.pageX - (mouseMove.image.width / 2);
      return mouseMove.y = e.pageY - (mouseMove.image.height / 2);
    }).click(function(e) {
      return console.log('click');
    });
  };

  ($(document)).ready(function() {
    addEventHandlers();
    loadImage();
    ctx = (document.getElementById('canvas')).getContext('2d');
    mouseMove.x = parseInt(screenWidth / 2 - mouseMove.image.width / 2);
    mouseMove.y = parseInt(screenHeight / 2 - mouseMove.image.height / 2);
    return setInterval(gameLoop, 10);
  });

}).call(this);