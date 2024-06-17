class Simulation{
  constructor(){
    this.particles = [];
    this.AMOUT_PARTICLES = 1000;
    this.VELOCITY_DAMPING = 1;

    this.instantiateParticles();
  }

  instantiateParticles(){
    let offsetBetweenParticles = 10;
    let offsetAllParticles = new Vector2(450,100);
    let xParticles = Math.sqrt(this.AMOUT_PARTICLES);
    let yParticles = xParticles;

    for(let x=0; x < xParticles; x++){
      for(let y=0; y < yParticles; y++){
        let position = new Vector2(
          x * offsetBetweenParticles + offsetAllParticles.x,
          y * offsetBetweenParticles + offsetAllParticles.y);
        let particle = new Particle(position);
        const randx = -0.5 + Math.random();
        const randy = -0.5 + Math.random();
        particle.velocity = Scale(new Vector2(randx,randy), 800);


        this.particles.push(particle);
      }
    }
  }

  update(dt){
    this.predictPosition(dt);
    this.computeNextVelocity(dt);

    this.worldBoundary();

  }

  predictPosition(dt){
    for(let i=0; i < this.particles.length; i++){
      this.particles[i].prevPosition = this.particles[i].position.Cpy();
      let positionDelta = Scale(this.particles[i].velocity, dt * this.VELOCITY_DAMPING);
      this.particles[i].position = Add(this.particles[i].position, positionDelta);

    }
  }

  computeNextVelocity(dt){
    for(let i=0; i < this.particles.length; i++){
      let velocity = Scale(Sub(this.particles[i].position,this.particles[i].prevPosition), 1.0 / dt);
      this.particles[i].velocity = velocity;
    }
  }

  worldBoundary(){
    for(let i=0; i < this.particles.length; i++){
      let pos = this.particles[i].position;

      if(pos.x < 0){
        this.particles[i].velocity.x *= -1;
      }
      if(pos.y < 0){
        this.particles[i].velocity.y *= -1;
      }
      if(pos.x > canvas.width){
        this.particles[i].velocity.x *= -1;
      }
      if(pos.y > canvas.height){
        this.particles[i].velocity.y *= -1;
      //pos.Log()
      }
    }
  }

  draw(){
    for(let i=0; i < this.particles.length; i++){
      let position = this.particles[i].position;
      let color = this.particles[i].color;
      DrawUtils.drawPoint(position,5,color);
    }
  }
}
