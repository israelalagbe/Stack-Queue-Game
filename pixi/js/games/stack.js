var Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;
class StackGame extends GameType{
    /**
     * 
     * @param {Game} game The top level game
     * @param {number} level The current level of the game
     */
    constructor(game,level){
        super()
        this.game=game;
        this.level=level;
        /**
         * @type GameObject[]
         */
        this.boxes=[]
        this.freshBoxes=0
        /**
         * @type GameObject[]
         */
        this.allGameObjects=[]
        this.activeBox=null
        this.showGameOverAnimation=false

    
    } 
    resetMovingBoxDirection(){
        this.movingBoxDirectionIndex=0;
        this.movingBoxDirections=[
            {x:this.constinitialBoxCoord.x,y:80},
            {x:this.finalCoord.x,y:80},
            this.finalCoord
        ]
        this.finalCoord.y-=this.initialBoxCoord.height
    } 
    getCurrentlyMovingBoxDirection(){
        return this.movingBoxDirections[this.movingBoxDirectionIndex];
    }
    /**
     * 
     * @param {GameObject} box The moving box
     * @returns {boolean} Returns if this box is currently at destination
     */
    movingBoxAtDestination(box){
        let movingBoxDirection=this.getCurrentlyMovingBoxDirection()
        if(box.x===movingBoxDirection.x&&box.y===movingBoxDirection.y) return true
        return false
    }
    updateGameOverAnimations(){
        let numDoneAnimation=0
        for (let box of this.allGameObjects) {
            box.y+=Math.random()
            if (box.y>this.game.height+30) {
                numDoneAnimation+=1
            }
        }
        if (numDoneAnimation>=this.allGameObjects.length) {
            this.onWin()
        }
    }
     /**
     * 
     * @param {number} delta The time since the last update
     * @returns {void}
     */
    update(delta){
       //console.log(delta)
       /* this.cat.anchor.set(0.5,0.5)
       this.cat.rotation+=0.1 */
       //this.cat.update(delta)
       if (this.showGameOverAnimation) {
        this.updateGameOverAnimations()
        //this.onWin()
        return;
       }
       let b=this.boxes.length
       if(this.freshBoxes===0&&!this.activeBox){
           this.showGameOverAnimation=true
       }
       if(this.activeBox){
           let box=this.activeBox;
           let movingBoxDirection=this.getCurrentlyMovingBoxDirection()
           if(!movingBoxDirection) {
               this.resetMovingBoxDirection()
               this.activeBox.removeAllListeners()
               this.activeBox.x+=Math.random()*10-Math.random()*10
               this.activeBox=null
           }
           else if(this.movingBoxAtDestination(box)){
                //alert("moving box at destination")
                this.movingBoxDirectionIndex++;
           }
           else{
               this.updateMovingBox(box)
           }
       }
       this.updateFire()
    }
    /**
     * 
     * @param {GameObject} box The moving box
     * @returns {boolean} update
     */
    updateMovingBox(box){
        let speed=5
        let movingBoxDirection=this.getCurrentlyMovingBoxDirection()
        if(box.x<movingBoxDirection.x) box.x+=speed;
        if(box.x>movingBoxDirection.x) box.x-=speed;
        if(box.y<movingBoxDirection.y) box.y+=speed;
        
        if(box.y>movingBoxDirection.y) box.y-=speed;
    }
    updateFire(){
        this.fire.y+=this.level*2;
        if(this.fire.y>this.game.height+30) this.fire.y = -this.fire.height;
        if(this.activeBox&&this.fire.collide(this.activeBox))
            {
                //console.log("Colliding")
                this.onGameOver()
            }

    }
    createBox(){
        let box=new GameObject(this.game.getTexture('pebble'));
        box.interactive=true
        box.buttonMode=true
        box.height=this.initialBoxCoord.height
        box.width=this.initialBoxCoord.width
        box.y= this.initialBoxCoord.y
        box.x= this.initialBoxCoord.x
        
        this.initialBoxCoord.y=this.initialBoxCoord.y-box.height;
        box.on('pointerdown',(e)=>{
            let notTopBox=this.boxes.includes(box)
            //Prevent futher clicking of boxes and allow only topmost box to be clicked
            if(this.activeBox||notTopBox) return false
            this.activeBox=box;
            //Removes the topmost box
            this.boxes.pop()
            this.freshBoxes--
            this.updateScore()
            return true
		})
        return box
    }
    setup(){
        let background=new GameObject(this.game.getTexture('stack_background'))
        background.y=0;
        background.x=0;
        background.width=this.game.width
        background.height=this.game.height
        this.game.addSprite(background)
        
        this.jar=new GameObject(this.game.getTexture('jar'))
        this.jar.visible=false
        
        //this.initialBoxPosition={x:0,y:0}
        this.jar.width=80
        this.jar.x=50;
        this.jar.visible=true
        this.jar.y=this.jar.calculateCentralY(this.game);
        this.jar.height=300
        this.jar.visible=false
        this.game.addSprite(this.jar);

        this.fire=new GameObject(this.game.getTexture('fire'));
        this.fire.anchor.set(0.35,0.3)
        this.fire.x=this.game.screenX;
        this.fire.y=-10;
        //this.fire.y=50
        this.fire.width=100
        this.fire.height=150
       
        this.game.addSprite(this.fire)
        
        //The box coordinate
        this.initialBoxCoord={
            x:0,
            y:0,
            width:this.jar.width-40,
            height:30
        }
        this.initialBoxCoord.y=this.jar.height+this.jar.y+this.initialBoxCoord.height;
        this.initialBoxCoord.x=this.jar.x+this.initialBoxCoord.width/2
        this.constinitialBoxCoord=Object.create(this.initialBoxCoord)
        this.finalCoord={x:this.game.width-80,y:this.jar.height+this.jar.y+this.initialBoxCoord.height+this.initialBoxCoord.height};
        
        this.freshBoxes=this.level*4
        this.maxBoxes=this.freshBoxes
        for (let index = 0; index < this.freshBoxes; index++) {
            let box=this.createBox();
            this.boxes.push(box)
            this.game.addSprite(box);
        }
        this.allGameObjects=[...this.boxes]
        //Removes the topmost box
        this.boxes.pop()
        this.resetMovingBoxDirection()
        this.setupScroreBoard()
       
    }
    setupScroreBoard(){
        var badStyle = new PIXI.TextStyle({
            fontFamily: "Arial",
            fontSize: 25,
            fill: "white",
            stroke: '#aa0000',
            //strokeThickness: 1,
            dropShadow: true,
            dropShadowColor: "#000000",
            dropShadowBlur: 4,
            dropShadowDistance: 2,
        });
        var levelText = new PIXI.Text("Level: "+this.level, badStyle);
        levelText.x=10
        levelText.y=10
        this.game.addSprite(levelText)

        this.scoreText = new PIXI.Text("", badStyle);
        this.updateScore()
        this.scoreText.x=this.game.width-120
        this.scoreText.y=10
        this.game.addSprite(this.scoreText)
    }
    updateScore(){
        //console.log(this.maxBoxes,this.freshBoxes)
        this.scoreText.text="Score: "+(this.maxBoxes-this.freshBoxes)+"/"+this.maxBoxes;
    }
    play(onStart,onWin,onGameOver){
        super.play(onStart,onWin,onGameOver)
        this.setup()
        this.onStart()
        //alert("Move the stack to the other side by clicking on the boxes, and avoid the fire")
    }
}