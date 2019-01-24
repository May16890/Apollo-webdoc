const startCanvas = () => {
    
    const random = () => (Math.sin((Math.random() - 0.5) * Math.PI));

    const lerp = (from, to, progress) => ((1 - progress) * from + progress * to);

    class Particle {
        constructor(x = random(), y = random(), z = random()) {
            [this.x, this.y, this.z] = [x, y, z];
            this.velocity = {
                x: lerp(-0.3, 0.3, Math.random()),
                y: lerp(-0.3, 0.3, Math.random()),
                z: lerp(-0.3, 0.3, Math.random()),
            };
            this.impulse = {
                x: 0, y: 0,
            };
        }

        update() {
            if (this.x < -1 || this.x > 1) this.velocity.x = lerp(-1, 1, Math.random());
            if (this.y < -1 || this.y > 1) this.velocity.y = lerp(-1, 1, Math.random());

            const k = 6000;

            this.x += (this.velocity.x + this.impulse.x) / k;
            this.y += (this.velocity.y + this.impulse.y) / k;
            this.z += this.velocity.z / k;

            this.impulse.x /= 2.1;
            this.impulse.y /= 2.1;
        }
    }

    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');

    const particles = [];
    const mouse = {
        x: 0, y: 0,
    };
    const oldPosition = {
        x: 0, y: 0,
    };

    function update(time) {
        // context.fillStyle = '#24292e';
        context.fillStyle = '#000000';
        context.fillRect(0, 0, canvas.width, canvas.height);

        const distance = {
            x: mouse.x - oldPosition.x,
            y: mouse.y - oldPosition.y,
        };

        context.save();
        context.translate(canvas.width / 2, canvas.height / 2);
        for (let particle of particles) {
            const deceleration = lerp(-40, 40, (particle.z + 1) / 2);
            const x = particle.x + mouse.x / canvas.width / deceleration * -1;
            const y = particle.y + mouse.y / canvas.height / deceleration * -1;
            const radius = lerp(1, 1.8, (particle.z + 1) / 2);

            context.beginPath();
            context.arc(x * canvas.width, y * canvas.height, radius, 0, Math.PI * 2);
            context.closePath();
            context.fillStyle = `rgba(255, 255, 255, ${(particle.z + 1) / 2})`;
            context.fill();

            particle.impulse.x += distance.x / 10 * lerp(4, 10, (particle.z + 1) / 2);
            particle.impulse.y += distance.y / 10 * lerp(4, 10, (particle.z + 1) / 2);

            particle.update();
        }
        context.restore();

        [oldPosition.x, oldPosition.y] = [mouse.x, mouse.y];

        requestAnimationFrame(update);
    }

    function resize() {
        [canvas.width, canvas.height] = [innerWidth, innerHeight];
    }

    function init() {
        const canvas = document.querySelector('canvas');
        while (particles.length < 2800) {
            const particle = new Particle();
            particles.push(particle);
        }

        canvas.addEventListener('mousemove', event => [mouse.x, mouse.y] = [event.layerX - canvas.width / 2, event.layerY - canvas.height / 2]);

        resize();

        requestAnimationFrame(update);
    }

    window.addEventListener('load', init);
    window.addEventListener('resize', resize);
};

startCanvas();