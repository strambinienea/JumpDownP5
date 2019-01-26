class Player {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vx = 5;
        this.vy = 10;
        this.vgravity = 0.4;
        this.force = createVector(this.vx, 0);
        this.gravity = createVector(0, this.vgravity);
        this.sliding = false;
        this.direction = -1;
    }

    show() {
        fill(128);
        ellipse(this.pos.x, this.pos.y, d);
    }

    update() {
        if (this.pos.y > height - d / 2) {
            this.pos.y = height - d / 2;
            // this.force.y = 0;
            this.sliding = false;
            this.force.sub(this.gravity);
        }

        if (this.touchingWalls() && this.force.y != 0) {
            this.sliding = true;
            this.force = createVector(0, 0);
            this.gravity.y = 2;
        }

        // if (this.touchingWalls() && this.force.y == 0) {
        //     this.sliding = false;
        //     this.pos.x += this.direction * 5;
        //     this.force.x *= this.direction;
        //     this.direction *= -1;
        // }

        this.force.add(this.gravity);    
        this.pos.add(this.force);
    }

    jump() {
        if (this.sliding) {
            // this.pos.x = width / 2;
            this.force = createVector(this.vx * this.direction, 0);
            this.pos.x += this.direction * 5;
            this.direction = this.direction * -1;
            this.gravity = createVector(0, this.vgravity);
        }

        this.force.y = -this.vy;
        this.sliding = false;
        
    }

    touchingWalls() {
        if (this.pos.x >= width - d / 2 - 15 || this.pos.x <= d / 2) {
            return true;
        }
    }
} 