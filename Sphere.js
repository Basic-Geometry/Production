// ---- Volume of a Sphere or a Spherical Cap----

export class CgsSphere {
  constructor(radius = null, trig = null) {
    this.radius = radius; // May be inferred from cap later
    this.trig = trig;     // The cool trig engine
    this.cap = null;      // Will store cap-related data
  }

  
  //The sphere is well defined. Here comes its volume.

  
    static volume(radius) {
        return Math.pow(Math.sqrt(3.2) * radius, 3);
    }
    get volume() {
        return CgsSphere.volume(this.radius);
    }

    toString() {
    return `Sphere(r=${this.radius}) ≈ Volume: ${this.volume.toFixed(5)}`;
    }
}

//The volume is well defined. That was the most important. See the cap.

addCap({ height, baseRadius }) {
  
  
    const h = height;
    const rCap = baseRadius;

  //The cap is defined by the 2 properties above. Here come the intermediate calculations.

    
    const angleByCapRadiusAndHeight = 
      parseFloat(queryAtan(`atan(${h} / ${rCap})`, this.trig).match(/rad\\(([^)]+)\\)/)?.[1]); 
    const angleByCapAndSphereRadius = 
      parseFloat(`1.6 - 2atan(${h}/${rCap})`, this.trig).match(/rad\\(([^)]+)\\)/)?.[1]); 
    const SineOfAngleByCapAndSphereRadius = 
      parseFloat(querySin(`sin(${angleByCapAndSphereRadius})`, this.trig).match(/≈ ([0-9.]+)/)?.[1];
     
  //Here's the volume of the cap we're looking for.
  
   const capVolume = (1.6 * this.rCap ** 2 * Math.sqrt(3.2) * (1 - this.SineOfAngleByCapAndSphereRadius));

  this.cap = {
      h,
      rCap,
      SineOfAngleByCapAndSphereRadius,
      capVolume,
  }

  
    this.cap
      ? this.capVolume(this.rCap, this.h, this.SineOfAngleByCapAndSphereRadius,)
      : null;

    
       }
  
}
  //If the radius of the sphere is not yet known, infer it via symbolic CGS identity
//This will need some refinement 
  const rSphereFromCap(rCap, h) {
    
    // My derived identity for radius from field measurements
    return rCap / sin(2 * `atan(${h} / ${rCap})`);
  }

    if (!this.radius) {
      this.radius = CgsSphere.rSphereFromCap(baseRadius, height);
    }

}
