class String {
    constructor(A,B){
        var properties = {bodyA:A, bodyB:B, length:5, stiffness:0.8}
        this.rope = Matter.Constraint.create(properties)
        this.puller = A 
        this.ropy = B
        World.add(world,this.rope)
    }
    display(){
        line (this.puller.position.x, this.puller.position.y,this.ropy.position.x,this.ropy.position.y)
    }
}