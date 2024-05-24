(function (global) {
	const PoliAnimate = function (options) {
		this.init(options);
	};

	PoliAnimate.prototype.init = function (options = {}) {
		// Define default configurations
		const defaultConfig = {
			// Context (ctx) properties for the canvas rendering context.
			ctx: {
				fillStyle: "#fff", // Default color used to fill the dots.
				lineWidth: 1 // Default line width for drawing connections between dots.
			},
			// Configuration related to the dots in the animation.
			dots: {
				r: 0, // Default color used to fill the dots.
				g: 255, // Default color used to fill the dots.
				b: 0, // Default color used to fill the dots.
				distance:   100, // Max distance between dots for drawing a line between them.
				d_radius:   200, // Distance from the mouse cursor within which dots will react (increase size or change opacity).
				nb:         100, // Default number of dots to be drawn on the canvas.
				radius:     4, // Default radius of dots.
				maxRadius:  8, // Maximum radius of dots when close to the mouse cursor.
				minRadius:  1, // Minimum radius of dots when far from the mouse cursor.
				maxOpacity: 1, // Maximum opacity of dots when close to the mouse cursor.
				minOpacity: 1, // Minimum opacity of dots when far from the mouse cursor. Note: With both max and min opacity set to 1, dots will not fade based on distance.
			},
			// Gradient color stops for drawing lines between dots.
			colorStops:        [
				{
					stop:  0, // Gradient stop position, at the start of the gradient.
					color: "#fff" // Color of the gradient stop.
				}
			],
			minWidth:          720, // Minimum canvas width to enable the animation, useful for disabling on smaller devices.
			containerSelector: '.is-style-poli-animate' // CSS selector for the container element(s) where the animation will be applied.
		};

		// Apply user options over the default configurations
		// For top-level properties
		const config = {...defaultConfig, ...options};

		// For nested properties, manually ensure they're correctly merged
		// config.ctx  = {...defaultConfig.ctx, ...options.ctx};
		// config.dots = {...defaultConfig.dots, ...options.dots};
		// Assuming colorStops should be replaced entirely by user options if provided
		if (options.colorStops) {
			config.colorStops = options.colorStops;
		}

		if (window.innerWidth <= config.minWidth) return;




		const containers = document.querySelectorAll(config.containerSelector);
		if (!containers.length) return;

		containers.forEach(container => {
			const canvas  = document.createElement('canvas');
			canvas.width  = container.offsetWidth;
			canvas.height = container.offsetHeight;
			container.appendChild(canvas);

			const ctx = canvas.getContext('2d');
			Object.assign(ctx, config.ctx);

			const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
			config.colorStops.forEach(colorStop => {
				gradient.addColorStop(colorStop.stop, colorStop.color);
			});
			ctx.strokeStyle = gradient;

			let mousePosition = {
				x: canvas.width / 2,
				y: canvas.height / 2
			};

			const dots = Array.from({length: config.dots.nb}, () => new Dot(canvas, config.dots.radius));

			function Dot(canvas, radius) {
				this.x      = Math.random() * canvas.width;
				this.y      = Math.random() * canvas.height;
				this.vx     = -.5 + Math.random();
				this.vy     = -.5 + Math.random();
				this.radius = radius;
			}

			Dot.prototype.draw = function (mousePosition, config) {
				const distanceToMouse = Math.sqrt((this.x - mousePosition.x) ** 2 + (this.y - mousePosition.y) ** 2);

				// Dynamically adjust the dot's opacity based on its distance to the mouse
				const opacityRange = config.dots.maxOpacity - config.dots.minOpacity;
				let dynamicOpacity = config.dots.minOpacity + (opacityRange * (1 - (distanceToMouse / config.dots.d_radius)));
				dynamicOpacity     = Math.max(config.dots.minOpacity, Math.min(config.dots.maxOpacity, dynamicOpacity)); // Ensure opacity is within the specified range

				// Dynamically adjust the dot's radius like before
				const radiusRange = config.dots.maxRadius - config.dots.minRadius;
				let dynamicRadius = config.dots.minRadius + (radiusRange * (1 - (distanceToMouse / config.dots.d_radius)));
				dynamicRadius     = Math.max(config.dots.minRadius, Math.min(config.dots.maxRadius, dynamicRadius)); // Ensure radius is within the specified range

				ctx.fillStyle = `rgba(${config.dots.r}, ${config.dots.g}, ${config.dots.b}, ${dynamicOpacity})`; // Adjust the color as needed
				ctx.beginPath();
				ctx.arc(this.x, this.y, dynamicRadius, 0, Math.PI * 2, false);
				ctx.fill();
			};

			const animate = () => {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				dots.forEach(dot => {
					dot.x += dot.vx;
					dot.y += dot.vy;

					if (dot.y < 0 || dot.y > canvas.height) dot.vy = -dot.vy;
					if (dot.x < 0 || dot.x > canvas.width) dot.vx = -dot.vx;

					dot.draw(mousePosition, config);
				});

				drawLines(dots, ctx, mousePosition, config);
				requestAnimationFrame(animate);
			};

			const updateMousePosition = (e) => {
				const rect      = canvas.getBoundingClientRect();
				mousePosition.x = e.clientX - rect.left;
				mousePosition.y = e.clientY - rect.top;
			};

			// Adjusted mousemove event with throttle
			const throttledUpdateMousePosition = throttle(updateMousePosition, 50); // Adjust delay as needed
			document.body.addEventListener('mousemove', throttledUpdateMousePosition);
			// document.body.addEventListener('mousemove', updateMousePosition);

			document.body.addEventListener('mouseleave', () => {
				mousePosition.x = canvas.width / 2;
				mousePosition.y = canvas.height / 2;
			});

			requestAnimationFrame(animate);
		});
	};

	function drawLines(dots, ctx, mousePosition, config) {
		dots.forEach((dot, i) => {
			for (let j = i + 1; j < dots.length; j++) {
				const other            = dots[j];
				const distance         = Math.sqrt((dot.x - other.x) ** 2 + (dot.y - other.y) ** 2);
				const proximityToMouse = Math.sqrt((dot.x - mousePosition.x) ** 2 + (dot.y - mousePosition.y) ** 2);

				if (distance < config.dots.distance && proximityToMouse < config.dots.d_radius) {
					ctx.beginPath();
					ctx.moveTo(dot.x, dot.y);
					ctx.lineTo(other.x, other.y);
					ctx.stroke();
				}
			}
		});
	}

	// Utility function to throttle an action
	function throttle(action, delay) {
		let lastRun = 0;
		return function () {
			const now = Date.now();
			if (now - lastRun > delay) {
				action.apply(this, arguments);
				lastRun = now;
			}
		};
	}

	global.PoliAnimate = PoliAnimate;
}(window));
