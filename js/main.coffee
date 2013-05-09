
	console.log '1'
	backgroundForestImg = new Image #背景
	mouseMoveImg = new Image	#鼠标指针
	Img0 = new Image	#恶魔猎手
	Img1 = new Image
	Img2 = new Image
	ctx = null
	screenWidth = 640
	screenHeight = 480
	speed = 8
	step = 1


	class GameObject
		@x = 0
		@y = 0
		@image = null
		@hp = 0
		@SquareWidth=0;
		@SquareHeight=0;
		@Direction=0;
		@MoveNum=0;
		@MoveX=0;
		@MoveY=0;
		@speed_count=0;

	class MouseMove extends GameObject

	mouseMove = new MouseMove

	gameLoop = ->
		ctx.clearRect 0,0,screenWidth,screenHeight
		ctx.save()

		ctx.drawImage backgroundForestImg,0,0

		ctx.drawImage mouseMove.image,mouseMove.x,mouseMove.y

	loadImage = ->
		backgroundForestImg.src = './images/map.png'

		mouseMoveImg.src = './images/point.png'
		mouseMove.image = mouseMoveImg


	addEventHandlers = ->
		($ '#container').mousemove (e) ->
			mouseMove.x=e.pageX - (mouseMove.image.width/2) 
			mouseMove.y=e.pageY - (mouseMove.image.height/2)
		.click (e) ->
			console.log 'click'

	($ document).ready ->
		addEventHandlers()
		loadImage()

		ctx = (document.getElementById 'canvas').getContext '2d'

		mouseMove.x = parseInt screenWidth/2-mouseMove.image.width/2
		mouseMove.y = parseInt screenHeight/2-mouseMove.image.height/2

		setInterval gameLoop,10