var Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite,
    Texture=PIXI.Texture;

class GameObject extends Sprite{
    /**
     * 
     * @param {Texture} texture The texture
     */
    constructor(texture){
        super(texture);
        this.vx=0;
        this.vy=0;
    }
    /**
     * 
     * @param {GameObject} object The game object
     * @returns {boolean} Returns true if the two objects collided
     */
    collide(object){
        let dx=Math.abs(this.x-object.x)
        let dy=Math.abs(this.y-object.y);
        let averageWidth=(this.width/2)+(object.width/2)
        let averageHeight=(this.height/2)+(object.height/2)
        if(dx<=averageWidth&&dy<=averageHeight){
            return true;
        }
        return false
/* 
		let thisRadius=(this.width+this.height)/4;
		let objectRadius=(object.width+object.height)/4;
		let dx=Math.abs(this.x-object.x)
		let dy=Math.abs(this.y-object.y);
		let distance=MathUtil.hypot(dx,dy)
		let collided=false;
		if (dx<this.width/2+object.width/2&&dy<this.height/2+object.height/2) {
			collided=true;
		}
		return collided; */
	}
    moveUp(unit=1){
        this.y+=unit;
    }
    moveDown(unit=1){
        this.y-=unit;
    }
    moveRight(unit=1){
        this.x+=unit;
    }
    moveLeft(unit=1){
        this.y-=unit;
    }
    flip(){
        this.anchor.y = 1;     /* 0 = top, 0.5 = center, 1 = bottom */
        this.scale.y *= -1;    /* flip vertically */
    }
    calculateCentralX(game){
        var pos=game.screenX-this.width/2;
        return pos;
    }
    calculateCentralY(game){
        var pos=game.screenY-this.height/2;
        return pos;   
    }
    update(delta){
        this.y+=this.vy
    }
}