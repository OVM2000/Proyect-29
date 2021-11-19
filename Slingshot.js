class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 30
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null
    }

    display(){
        if(this.sling.bodyA){
            var bodyA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(bodyA.x, bodyA.y, pointB.x, pointB.y);
        }
        
    }
    
}