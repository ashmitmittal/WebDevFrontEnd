// change color
var color = 'black';
var size = 1;
function changeColor() {
	color = document.getElementById('color').value;
}
function changeSize() {
	size = document.getElementById('size').value;
}
window.addEventListener('load', () => {
	const canvas = document.querySelector('#canvas');
	const ctx = canvas.getContext('2d');

	// Resizing

	canvas.height = window.innerHeight - 300;
	canvas.width = window.innerWidth - 10;

	// variables
	let painting = false;

	function startPosition(e) {
		painting = true;
		draw(e);
	}
	function finishedPosition() {
		painting = false;
		ctx.beginPath();
	}

	function draw(e) {
		if (!painting) {
			return;
		}
		ctx.lineWidth = size;
		ctx.lineCap = 'round';

		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();
		ctx.strokeStyle = color;
	}
	canvas.addEventListener('mousedown', startPosition);
	canvas.addEventListener('mouseup', finishedPosition);
	canvas.addEventListener('mousemove', draw);
});

var link = document.getElementById('save');
link.addEventListener(
	'click',
	function(ev) {
		link.href = canvas.toDataURL();
		link.download = 'mypainting.png';
	},
	false
);
