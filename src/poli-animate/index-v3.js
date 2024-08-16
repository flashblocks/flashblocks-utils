(function (global) {
	const PoliAnimate = function (options) {
		this.init(options);
	};

	PoliAnimate.prototype.init = function (options) {
		// Define default configurations
		const defaultConfig = {
			ctx:               {
				fillStyle: "#fff",
				lineWidth: 1
			},
			dots:              {
				distance: 100,
				d_radius: 150,
				nb:       100, // Default number of dots
				radius:   2, // Default radius of dots
			},
			colorStops:        [{
				stop:  0,
				color: "#fff"
			}],
			speed:             16, // Roughly 60 frames per second
			minWidth:          720,
			containerSelector: '.is-style-poli-animate'
		};

		// Apply user options over the default configurations
		// For top-level properties
		const config = {...defaultConfig, ...options};

		// For nested properties, manually ensure they're correctly merged
		config.ctx  = {...defaultConfig.ctx, ...options.ctx};
		config.dots = {...defaultConfig.dots, ...options.dots};
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

			Dot.prototype.draw = function () {
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
				ctx.fill();
			};

			const animate = () => {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				dots.forEach(dot => {
					dot.x += dot.vx;
					dot.y += dot.vy;

					if (dot.y < 0 || dot.y > canvas.height) dot.vy = -dot.vy;
					if (dot.x < 0 || dot.x > canvas.width) dot.vx = -dot.vx;

					dot.draw();
				});

				drawLines(dots, ctx, mousePosition, config);
				requestAnimationFrame(animate);
			};

			const updateMousePosition = (e) => {
				const rect      = canvas.getBoundingClientRect();
				mousePosition.x = e.clientX - rect.left;
				mousePosition.y = e.clientY - rect.top;
			};

			document.body.addEventListener('mousemove', updateMousePosition);
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

	global.PoliAnimate = PoliAnimate;
}(window));
