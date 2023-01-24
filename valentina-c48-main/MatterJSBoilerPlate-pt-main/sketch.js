var fogo, agua;
var fogoImg, aguaImg;
var aguaD, fogoD;
var aguaE, fogoE;
var diamanteBlue, diamanteRed;
var diamanteBlue2, diamanteRed2;
var diamanteBlueImg, diamanteRedImg;
var bg;
var parede1, parede2, parede3, parede4, parede5, parede6, parede7;
var parede8, parede9, parede10;
var lava, lama, poça
var lava2, lama2, poça2
var lava3, lama3, poça3
var lava4, lama4, poça4
var paredes, porta, portaImg
var lavaGp, lamaGp, poçaGp
var restart,restartImg,gameover,gameoverImg


function preload() {
	fogoImg = loadImage("./va/fogo_frente.png");
	aguaImg = loadImage("./va/agua_frente.png");
	aguaD = loadImage("./va/agua_direita.png");
	fogoD = loadImage("./va/fogo_d2.png");
	aguaE = loadImage("./va/agua_esquerda.png");
	fogoE = loadImage("./va/fogo_esq.png");
	diamanteBlueImg = loadImage("./va/diamante_azul.png");
	diamanteRedImg = loadImage("./va/diamante_red.png");
	bg = loadImage("./va/images.jpg");
	lamaImg = loadImage("./va/lama.png")
	lavaImg = loadImage("./va/lava.png")
	poçaImg = loadImage("./va/poça.png")
	portaImg = loadImage("./va/porta.png")
    
	gameoverImg=loadImage("./va/gameOver.png")
    restartImg=loadImage("./va/restart.png")

}

function setup() {
	createCanvas(windowWidth, windowHeight);


	fogo = createSprite(80, 1125, 20, 20);
	fogo.addImage("frente", fogoImg);
	fogo.addImage("direita", fogoD);
	fogo.addAnimation("esquerda", fogoE);
	fogo.changeImage("frente2")


	agua = createSprite(170, 1144, 20, 20);
	agua.addImage("frente2", aguaImg);
	agua.addImage("direita2", aguaD);
	agua.addImage("esquerda2", aguaE);
	agua.changeImage("frente2")


	//parede horizontal
	parede1 = createSprite(width / 2, 1300, width, 20);
	parede2 = createSprite(1200, 968, 2500, 20);
	parede3 = createSprite(1700, 606, width, 20);
	parede4 = createSprite(1200, 260, 2500, 20);

	//parede vertical
	parede5 = createSprite(570, 1200, 20, 180);
	parede6 = createSprite(2770, 722, 20, 250);
	parede7 = createSprite(210, 346, 20, 180);
	parede8 = createSprite(761, 890, 20, 180);
	parede9 = createSprite(1219, 340, 20, 180);
	parede10 = createSprite(2720, 100, 20, 200);

	//criamdo poça de lama
	lama = createSprite(1100, 1250, 20, 20);
	lama.addImage(lamaImg);
	lama.scale = 0.8;
	lama.setCollider("rectangle",0,0,200,100)

	lama2 = createSprite(315, 915, 20, 20);
	lama2.addImage(lamaImg);
	lama2.scale = 0.8
	lama2.setCollider("rectangle",0,0,200,100)

	lama3 = createSprite(1469, 550, 20, 20);
	lama3.addImage(lamaImg);
	lama3.scale = 0.8
	lama3.setCollider("rectangle",0,0,200,100)

	lama4 = createSprite(2035, 210, 20, 20);
	lama4.addImage(lamaImg);
	lama4.scale = 0.8
	lama4.setCollider("rectangle",0,0,200,100)
	
	//criamdo poça de agua
	poça = createSprite(2815, 1250, 20, 20);
	poça.addImage(poçaImg);
	poça.scale = 0.8
	poça.setCollider("rectangle",0,0,200,100)

	poça2 = createSprite(2115, 915, 20, 20);
	poça2.addImage(poçaImg);
	poça2.scale = 0.8
	poça2.setCollider("rectangle",0,0,200,100)

	poça3 = createSprite(628, 550, 20, 20);
	poça3.addImage(poçaImg);
	poça3.scale = 0.8
	poça3.setCollider("rectangle",0,0,200,100)

	poça4 = createSprite(1225, 210, 20, 20);
	poça4.addImage(poçaImg);
	poça4.scale = 0.8
	poça4.setCollider("rectangle",0,0,200,100)

	//criamdo poça de fogo
	lava = createSprite(1900, 1250, 20, 20);
	lava.addImage(lavaImg);
	lava.scale = 0.6
	lava.setCollider("rectangle",0,0,200,100)

	lava2 = createSprite(1200, 915, 20, 20);
	lava2.addImage(lavaImg);
	lava2.scale = 0.6
	lava2.setCollider("rectangle",0,0,200,100)

	lava3 = createSprite(2268, 550, 20, 20);
	lava3.addImage(lavaImg);
	lava3.scale = 0.6
	lava3.setCollider("rectangle",0,0,200,100)

	lava4 = createSprite(536, 210, 20, 20);
	lava4.addImage(lavaImg);
	lava4.scale = 0.6
	lava4.setCollider("rectangle",0,0,200,100)

	//grupos
	lavaGp = new Group();
	lamaGp = new Group();
	poçaGp = new Group();

	//adicionando os sprites ao grupo
	lavaGp.add(lava)
	lavaGp.add(lava2)
	lavaGp.add(lava3)
	lavaGp.add(lava4)

	lamaGp.add(lama)
	lamaGp.add(lama2)
	lamaGp.add(lama3)
	lamaGp.add(lama4)

	poçaGp.add(poça)
	poçaGp.add(poça2)
	poçaGp.add(poça3)
	poçaGp.add(poça4)

	//criando grupo de paredes
	paredes = new Group();
	//adicionando os sprites das paredes ao grupo
	paredes.add(parede1);
	paredes.add(parede2);
	paredes.add(parede3);
	paredes.add(parede4);
	paredes.add(parede5);
	paredes.add(parede6);
	paredes.add(parede7);
	paredes.add(parede8);
	paredes.add(parede9);
	paredes.add(parede10);

	// criando a porta

	porta = createSprite(130, 135, 20, 20);
	porta.addImage(portaImg);
	porta.scale = 1.2

	diamanteBlue=createSprite(2356,858)
	diamanteBlue.addImage(diamanteBlueImg)
	diamanteBlue.scale=2
    
	diamanteBlue2=createSprite(758,100)
	diamanteBlue2.addImage(diamanteBlueImg)
	diamanteBlue2.scale=2

	diamanteRed=createSprite(1490,1100)
	diamanteRed.addImage(diamanteRedImg)
    diamanteRed.scale=2

	diamanteRed2=createSprite(1900,400)
	diamanteRed2.addImage(diamanteRedImg)
	diamanteRed2.scale=2

	gameover=createSprite(width/2,height/2)
	gameover.addImage(gameoverImg)
	gameover.scale=2.5

	restart=createSprite(width/2,height/2+300)
	restart.addImage(restartImg)
	restart.scale=0.3
	

}


function draw() {
	rectMode(CENTER);
	background(0);
	image(bg, 0, 0, width, height);

	//colidindo com as paredes
	fogo.collide(paredes);
	agua.collide(paredes);

	//dando movimento para os sprites
	movimentoFogo();
	movimentoAgua();

	//dando velocidade Y para obter gravidade
	fogo.velocityY += 0.5;
	agua.velocityY += 0.5

	//colisão
	if (fogo.isTouching(poçaGp)) {
		fogo.destroy()
	}

	if (fogo.isTouching(lamaGp)) {
		fogo.destroy()
	}


	if (agua.isTouching(lavaGp)) {
		agua.destroy()
	}

	if (agua.isTouching(lamaGp)) {
		agua.destroy()
	}



	//coordenadas do mouse na tela
	fill("red")
	textSize(50)
	text("X: " + mouseX + "/ Y: " + mouseY, mouseX, mouseY);
	drawSprites();

}

function movimentoFogo() {

	if (keyIsDown(LEFT_ARROW)) {
		fogo.x -= 5
		fogo.changeImage("esquerda")
	}

	if (keyIsDown(RIGHT_ARROW)) {
		fogo.x += 5
		fogo.changeImage("direita");
	}

	if (keyDown("space")) {
		fogo.velocityY = -10
		fogo.changeImage("frente");
	}


}


function movimentoAgua() {

	if (keyDown("a")) {
		agua.x -= 5;
		agua.changeImage("esquerda2")

	}

	if (keyDown("d")) {
		agua.x += 5;
		agua.changeImage("direita2");
	}

	if (keyDown("s")) {
		agua.velocityY = -10;
		agua.changeImage("frente2");
	}

}
