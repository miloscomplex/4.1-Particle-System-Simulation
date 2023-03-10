class Emitter extends p5.Vector {
    constructor(x,y) {
        super(x,y);
        this.particles = [];
    }

    emit(num) {
        for (let i=0; i < num; i++) {
            if (random(1) < 0.5) {
                this.particles.push(new Confetti(this.x,this.y));
            } else {
                this.particles.push(new Particle(this.x,this.y));
            }
            
        }
    }

    update() {
        for (let particle of this.particles) {
        
            let gravity = createVector(0, -0.2);
            let wind = createVector(random(-0.5,0.5), 0);
            particle.applyForce(gravity);
            particle.applyForce(wind);
            particle.update();
        }
        
        for (let j = this.particles.length-1; j >= 0; j--) {
            if (this.particles[j].finished()) {
              this.particles.splice(j, 1);
            }
        }   
    }

    show() {
        for (let particle of this.particles) {
            particle.show();
        }
    }
}