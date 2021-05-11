class String {
    constructor(bodyAInput, pointBInput) {
        var options = {
            bodyA: bodyAInput,
            pointB: pointBInput,
            stiffness: 0.05,
            length: 7,
        };
        this.bodyA = bodyAInput;
        this.pointB = pointBInput;
        this.constraint = Constraint.create(options);
        World.add(userWorld, this.constraint);
    }
    attach(bodyInput) {
        this.constraint.bodyA = bodyInput;
    }

    detach() {
        this.constraint.bodyA = null;
    }

    display() {
        if (this.constraint.bodyA) {
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            stroke(0, 255, 255);
            strokeWeight(5);
            fill("cyan");
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }
    }
}