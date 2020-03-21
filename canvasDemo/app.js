const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// // fillRect()
// ctx.fillStyle = 'pink';
// ctx.fillRect(20, 20, 150, 100);
// ctx.fillStyle = 'lightblue';
// ctx.fillRect(200, 20, 150, 100);

// // strokeRect()
// ctx.lineWidth = 5;
// ctx.strokeStyle = '#4a58a7';
// ctx.strokeRect(100, 200, 150, 100);

// // clearRect()
// ctx.clearRect(25, 25, 140, 90);

// // fillText()
// ctx.font = '30px Arial';
// ctx.fillStyle = '#4a58a7';
// ctx.fillText('Hello world', 400, 50);

// // strokeText()
// ctx.lineWidth = 2;
// ctx.strokeStyle = 'orange';
// ctx.strokeText('Hello Wolrd', 400, 100);

// ======================================================================
// // paths
// // triangle
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(100, 200);
// ctx.lineTo(50, 50);
// // ctx.closePath();
// ctx.fillStyle = 'coral';
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(200, 50);
// ctx.lineTo(150, 200);
// ctx.lineTo(250, 200);
// ctx.lineTo(200, 50);
// ctx.stroke();

// // rectangle
// ctx.beginPath();
// ctx.rect(300, 50, 150, 100);
// ctx.fillStyle = 'teal';
// ctx.fill();

// ========================================================================

// // Arc (circles)
// ctx.beginPath();

// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;

// // draw Head
// ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);

// // move to mouth
// ctx.moveTo(centerX + 100, centerY);

// // draw mouth
// ctx.arc(centerX, centerY, 100, 0, Math.PI, false);

// // move to left eye
// ctx.moveTo(centerX - 60, centerY - 80);

// // draw left eye
// ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);

// // move to right
// ctx.moveTo(centerX + 100, centerY - 80);

// // draw right eye
// ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2);

// ctx.stroke();

// =================================================================================================

// // Animation 1
// const circle = {
// 	x: 200,
// 	y: 200,
// 	size: 30,
// 	dx: 5,
// 	dy: 4
// };

// function drawCircle() {
// 	ctx.beginPath();
// 	ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
// 	ctx.fillStyle = 'purple';
// 	ctx.fill();
// }

// function update() {
// 	ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);

// 	drawCircle();

// 	// change position
// 	circle.x += circle.dx;
// 	circle.y += circle.dy;

// 	// Detect side walls
// 	if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
// 		circle.dx *= -1; // circle.dx = circle.dx * -1
// 	}

// 	// detect top and bottom walls
// 	if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
// 		circle.dy *= -1; // circle.dy = circle.dy * -1
// 	}

// 	requestAnimationFrame(update);
// }

// update();

// =======================================================================================================================
// animation 2 - Character

const image = document.getElementById('source');

const player = {
	w: 50,
	h: 70,
	x: 20,
	y: 200,
	speed: 5,
	dx: 0,
	dy: 0
};

function drawPlayer() {
	ctx.drawImage(image, player.x, player.y, player.w, player.h);
}

function clear() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function newPos() {
	player.x += player.dx;
	player.y += player.dy;

	detectWalls();
}

function detectWalls() {
	// Left wall
	if (player.x < 0) {
		player.x = 0;
	}
	// right wall
	if (player.x + player.w > canvas.width) {
		player.x = canvas.width - player.w;
	}
	// top wall
	if (player.y < 0) {
		player.y = 0;
	}
	// bottom wall
	if (player.y + player.h > canvas.height) {
		player.y = canvas.height - player.h;
	}
}

function update() {
	clear();

	drawPlayer();

	newPos();

	requestAnimationFrame(update);
}

function moveUp() {
	player.dy = -player.speed;
}

function moveDown() {
	player.dy = player.speed;
}
function moveRight() {
	player.dx = player.speed;
}
function moveLeft() {
	player.dx = -player.speed;
}

function keyDown(e) {
	if (e.key === 'ArrowRight' || e.key === 'Right') {
		moveRight();
	} else if (e.key === 'ArrowLeft' || e.key === 'Left') {
		moveLeft();
	} else if (e.key === 'ArrowUp' || e.key === 'Up') {
		moveUp();
	} else if (e.key === 'ArrowDown' || e.key === 'Down') {
		moveDown();
	}
}
function keyUp(e) {
	if (
		e.key === 'ArrowRight' ||
		e.key === 'Right' ||
		e.key === 'ArrowLeft' ||
		e.key === 'Left' ||
		e.key === 'ArrowUp' ||
		e.key === 'Up' ||
		e.key === 'ArrowDown' ||
		e.key === 'Down'
	) {
		player.dx = 0;
		player.dy = 0;
	}
}

update();

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
