class Bob {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius);
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("purple");
        ellipseMode(CENTER);
        ellipse(0,0,this.radius);
        pop();
    }
};