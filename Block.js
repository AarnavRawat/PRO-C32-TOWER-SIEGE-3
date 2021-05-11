class Block {
    constructor(xInput, yInput, colorInput) {
        var options = {
            'restitution': 0.6,
            'density': 2.0,
            'friction': 2.0,

        }
        this.body = Bodies.rectangle(xInput, yInput, 30, 40, options);
        this.image = loadImage("Block.png");
        this.image2 = loadImage("Block2.png");
        this.image3 = loadImage("Block3.png");
        this.image4 = loadImage("Block4.png");
        this.x = xInput;
        this.y = yInput;
        this.width = 30;
        this.height = 40;
        this.color = colorInput;
        World.add(userWorld, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        // fill(this.colorInput);
        //rectMode(CENTER);
        //rect(0,0,this.width,this.height);
        if (this.colorInput == 1) {
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
        }

        if (this.colorInput == 2) {
            imageMode(CENTER);
            image(this.image2, 0, 0, this.width, this.height);
        }

        if (this.colorInput == 3) {
            imageMode(CENTER);
            image(this.image3, 0, 0, this.width, this.height);
        }

        if (this.colorInput == 4) {
            imageMode(CENTER);
            image(this.image4, 0, 0, this.width, this.height);
        }
        if (this.body.speed < 10) {
            World.remove(userWorld, this.body);
            push();
            this.visibility = this.visibility - 15;
            tint(255, this.visibility);
            image(this.image, this.body.position.x, this.body.position.y, 50, 50);
            pop();
        }
        pop();
    }
    score() {
        if (this.visibility < 0 && this.visibility > -1005) {
          score++;
        }
      }
}