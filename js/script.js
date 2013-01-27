var f = function(x) {
	// Put cool math to plot here!

	return (4500+12*x)/x;

},

main = function() {
	var winSize = window.getSize(),

	canvas = new Element("canvas", {
		width: winSize.x,
		height: winSize.y
	}),

	context = canvas.getContext("2d"),

	point = function(x, y) {
		context.fillRect(x, winSize.y-y, 1, 1);
	},

	plotMath = function(f) {
			var i = 0;

			context.fillStyle = "rgb(255, 0, 0)";

			for (; i < winSize.x; i++) {
				point(i, f(i));
			}
	};

	return function() {
		document.body.appendChild(canvas);
		context.fillStyle = "rgb(0, 0, 0)";
		context.fillRect(0, 0, canvas.width, canvas.height);
		
		plotMath(f);
	};
}();

window.addEvent("domready", main);
