class Particle extends p5.Vector {
    constructor(x, y) {
        super(x,y);
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(0, 2));
        this.acc = createVector();
        this.r = 10;
        this.mass = 0.5;
        this.lifetime = 255;
    }

    update() {

        this.vel.add(this.acc);
        this.add(this.vel);
        this.acc.set(0, 0);
        this.lifetime -= 5;
    }

    show() {
        stroke(255, this.lifetime);
        strokeWeight(2);
        fill(255, this.lifetime);
        ellipse(this.x, this.y, this.r * 2);
    }

    finished() {
        return (this.lifetime < 0);
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass)
        this.acc.add(f);
    }
}