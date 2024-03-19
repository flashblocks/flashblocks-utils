(function (global) {

	const PoliAnimate = function (options) {
		this.init(options);
	};

	PoliAnimate.prototype.init = function (options) {
		const config = {
			ctx:               {
				fillStyle: "#fff",
				lineWidth: 1

			},
			dots:              {
				distance: 100,
				d_radius: 150,
			},
			colorStops:        [
				{stop: 0, color: "#fff"},
			],
			speed:             10,
			minWidth:          720,
			containerSelector: '.is-style-poli-animate'
		};

		Object.assign(config, options);

		if (window.innerWidth <= config.minWidth) return;

		const containers = document.querySelectorAll(config.containerSelector);
		if (!containers.length) return;

		containers.forEach(function (container) {

			const canvas  = document.createElement('canvas');
			canvas.width  = container.offsetWidth;
			canvas.height = container.offsetHeight;

			container.appendChild(canvas);

			const ctx = canvas.getContext('2d');
			Object.assign(ctx, config.ctx);

			const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
			config.colorStops.forEach(function (colorStop) {
				gradient.addColorStop(colorStop.stop, colorStop.color);
			});
			ctx.strokeStyle = gradient;

			const mousePosition = {
				x: canvas.width / 2,
				y: canvas.height / 2,
			};

			const dots = {
				nb:    canvas.width * canvas.height / 10000,
				array: [],
			};
			Object.assign(dots, config.dots);

			function Dot() {
				this.x      = Math.random() * canvas.width;
				this.y      = Math.random() * canvas.height;
				this.vx     = -.5 + Math.random();
				this.vy     = -.5 + Math.random();
				this.radius = 20;
			}


			Dot.prototype = {
				create:  function () {
					ctx.beginPath();
					ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
					ctx.fill();
				},
				animate: function () {
					for (let i = 0; i < dots.nb; i++) {
						const dot = dots.array[i];
						if (dot.y < 0 || dot.y > canvas.height) {
							dot.vy = -dot.vy;
						} else if (dot.x < 0 || dot.x > canvas.width) {
							dot.vx = -dot.vx;
						}
						dot.x += dot.vx;
						dot.y += dot.vy;
					}
				},
				line:    function () {
					for (let i = 0; i < dots.nb; i++) {
						for (let j = 0; j < dots.nb; j++) {
							const i_dot = dots.array[i];
							const j_dot = dots.array[j];

							if (Math.abs(i_dot.x - j_dot.x) < dots.distance &&
								Math.abs(i_dot.y - j_dot.y) < dots.distance &&
								Math.abs(i_dot.x - mousePosition.x) < dots.d_radius &&
								Math.abs(i_dot.y - mousePosition.y) < dots.d_radius) {

								ctx.beginPath();
								ctx.moveTo(i_dot.x, i_dot.y);
								ctx.lineTo(j_dot.x, j_dot.y);
								ctx.stroke();
								// ctx.closePath();
							}
						}
					}
				}
			}

			function createDots() {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				let dot;
				for (let i = 0; i < dots.nb; i++) {
					dot = new Dot();
					Object.assign(dot, config.dot);
					dots.array.push(dot);
					dot = dots.array[i];
					dot.create();
				}

				dot.line();
				dot.animate();
			}

			document.body.addEventListener('mousemove', function (e) {
				mousePosition.x = e.offsetX;
				mousePosition.y = e.offsetY;
			});

			document.body.addEventListener('mouseleave', function () {
				mousePosition.x = canvas.width / 2;
				mousePosition.y = canvas.height / 2;
			});

			setInterval(createDots, config.speed);
		});
	};

	// Expose PoliAnimate to the global object
	global.PoliAnimate = PoliAnimate;

}(window));
