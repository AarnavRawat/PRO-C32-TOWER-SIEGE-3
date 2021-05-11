class Polygon {
    constructor(x, y, radius) {
        var options = {
            'restitution': 1.5,
            'density': 2.0,
            'friction': 1.0,
        }

        this.body = Bodies.circle(x, y, radius * 2, options);
        this.x = x;
        this.y = y;
        this.image = loadImage("polygon.png");
        this.radius = radius;
        World.add(userWorld, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius*2, this.radius * 2);
        pop();
    }
}