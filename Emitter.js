class Emitter {
    constructor(x,y) {
        this.position = createVector(x,y);
        this.particles = [];
    }

    emit(num) {
        for (let i=0; i < num; i++) {
            this.particles.push(new Particle(this.position.x,this.position.y));
        }
    }

    update() {
        for (let particle of this.particles) {
        
            let gravity = createVector(0, 0.2);
            particle.applyForce(gravity);
            particle.update();
        }
        
        for (let j = this.particles.length-1; j>= 0; j--) {
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