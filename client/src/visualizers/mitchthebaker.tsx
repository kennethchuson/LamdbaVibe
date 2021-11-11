// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

interface Item {
  id: string;
  name: string;
}

interface MyInterface {
  data: Record<string, Item>;
}

class Particle {

  public position;
  public velocity;
  public acc;
  public w; 
  

  constructor(p5: P5) {
    this.position = P5.Vector.random2D().mult(250);
    this.velocity = P5.Vector.random2D().mult(0);
    //p5.createVector(0, 0);
    this.acc = this.position.copy().mult(p5.random(0.001, 0.0001));
    this.w = p5.random(3, 5);
  }

  update(): void {
    this.velocity.add(this.acc);
    this.position.add(this.velocity);
  }

  edges(width: number, height: number): boolean {
    if(this.position.x < -width / 2 || this.position.x > width / 2
        || this.position.y < -height / 2 || this.position.y > height / 2) {
          return true;
        }
    else {
      return false;
    }
  }

  show(p5: P5): void {
    p5.noStroke()
    p5.fill(255);
    p5.ellipse(this.position.x, this.position.y, this.w);
  }
}

export const mitchthebakerVisualizer = new Visualizer(
  'Circumference',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);
    const frameCount = p5.frameCount;

    p5.angleMode(p5.DEGREES);
    p5.background(0);
    p5.stroke(255);
    p5.noFill();
    p5.translate(width / 2, height / 2);

    const wave = analyzer.getValue();

    for(let t = -1; t <= 1; t += 2) {
      p5.beginShape();

      // Use 180 since this is equal to the radius of a circle
      for(let i = 0; i <= 180; i += 0.5) {
        let index = Math.floor(p5.map(i, 0, 180, 0, wave.length - 1));
        //console.log(values[index]);

        let r = p5.map(Number(wave[index]), -1, 1, 150, 350);

        let x = r * p5.sin(i) * t;
        let y = r * p5.cos(i);
        //let y = Number(wave[index]) * 300 + height / 2;
        p5.vertex(x, y);
      }

      p5.endShape();
    }

    const particles: Particle[] = [];

    let p: Particle = new Particle(p5);
    particles.push(p);
    //console.log(particles);

    for(let i = particles.length - 1; i >= 0; i--) {
      if(!particles[i].edges(width, height)) {
        //particles[i].update();
        //particles[i].show(p5);

        p5.noStroke()
        p5.fill(255);
        p5.ellipse(particles[i].position.x, particles[i].position.y, particles[i].w);
      }
      else {
        particles.splice(i, i);
      }
      
    }

    /*
    p5.beginShape();
    
    //p5.background(250);
    

    //p5.strokeWeight(dim * 0.01);
    //p5.stroke(255, 255, 255, 255);
    //p5.noFill();

    p5.push();

    

    for(let i = 0; i < 5; i++) {

      p5.push();

      for(let j = 0; j < values.length; j++) {

        const freq = values[j] as number;

        p5.translate(
          p5.sin(frameCount * 0.001 + i) * 100,
          p5.tan(frameCount * 0.001 + i) * 100,
          j * freq
        );
        
        p5.rotateZ(frameCount * 0.1);
        p5.push();
        p5.sphere(8, 6, 4);
        p5.pop();
      }
      p5.pop();
    }

    p5.pop();

    p5.endShape();
    */
  },
);
