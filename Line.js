class Line
{
  constructor(body1,body2,offsetX,offsetY)
  {
      this.offsetX = offsetX;
      this.offsetY = offsetY;
      var options =
      {
        bodyA : body1,
        bodyB : body2,
        pointB : {x : this.offsetX, y : this.offsetY}
      }
      this.line = Constraint.create(options);
      this.line.body1 = body1;
      this.line.body2 = body2;
      World.add(world,this.line);
  }
  display()
  {
  var A = this.line.bodyA.position;
  var B = this.line.bodyB.position;
  strokeWeight(4);
  stroke(42,28,9);
  // line(A.x+60, A.y, B.x, B.y);
  // line(A.x, A.y, B.x, B.y);
  // line(A.x, A.y, B.x, B.y);
  var a1 = A.x;
  var a2 = A.y;
  var b1 = B.x+this.offsetX;
  var b2 = B.y+this.offsetY;
  line(a1, a2, b1, b2);

  }
};