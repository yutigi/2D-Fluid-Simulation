class Playground{
  constructor(){
    this.simulation = new Simulation();
  }

  update(dt){
    this.simulation.update(dt);
  }

  draw(){
    this.simulation.draw();

    DrawUtils.drawLine(Vector2.Zero(), new Vector2(100,100), "black", 10);
    DrawUtils.drawPoint(new Vector2(100,100), 20, "blue");
    DrawUtils.strokePoint(new Vector2(100,100), 20, "red");
    DrawUtils.drawRect(new Vector2(200,200), new Vector2(100,100), "green");
    DrawUtils.drawText(new Vector2(300,300), 20, "white", "Hello world");
  }

  onMouseMove(x,y){
    console.log("Mouse moved to: "+x+", "+y);
  }

  onMouseDown(button){
    console.log("Mouse button pressed: " +button);
  }

  onMouseUp(button){
    console.log("Mouse button release: " +button);
  }
}
