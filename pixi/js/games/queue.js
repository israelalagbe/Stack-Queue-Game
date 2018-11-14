var Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;
class QueueGame extends GameType{
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
        this.people=[]
        this.allPeople=[]
        this.newPeopleCount=0
        /**
         * @type GameObject[]
         */
        this.enemies=[]
        this.initialPersonCoord={
            width:40,
            height:35,
            y:this.game.screenY,
            x:320
        };
        this.constPersonCoord=null;//this.initialPersonCoord;
        this.nextPersonCoord=null;
        this.nextPersonIndex=0;
        this.carSpecs=[
            {width:40,height:60,name:"abulance"},
            {width:30,height:40,name:"viper"},
            {width:40,height:60,name:"truck"},
            {width:30,height:40,name:"taxi"}
        ]
        /**
        *The currently moving person
        */
        this.activePerson=null
    } 
    /**
     * 
     * @param {number} delta The time since the last update
     * @returns {void}
     */
    update(delta){
        if(this.newPeopleCount==0&&!this.activePerson){
            clearInterval(this.interval)
            this.onWin()
            return;
        }
        this.enemies.forEach((car)=>{
            car.update(delta)
        })
        if(this.nextPersonCoord){
            //console.log(this.nextPersonCoord)
            let person=this.allPeople[this.nextPersonIndex];
                //console.log(this.nextPersonIndex,person,this.people)
                //console.log(person.x,)
                if (person&&person.x<=this.nextPersonCoord.x) {
                    person.x+=this.level
                }
                else{
                    
                    this.nextPersonCoord=null;
                }

            }
        if(this.activePerson){
            
            
            let person=this.activePerson;
            for(let car of this.enemies){
                if(car.collide(person)){
                    clearInterval(this.interval)
                    this.onGameOver()   
                    return;
                }
            }
            let movingBoxDirection=this.getCurrentlyMovingBoxDirection()
            //console.log(person.x,movingBoxDirection.x)
            this.updateMovingPerson(this.activePerson)
            if(person.x>=movingBoxDirection.x){
                console.log(this.activePerson)
                this.activePerson=null
                //this.onWin()
            }

        }
    }
    getCurrentlyMovingBoxDirection(){
        return {x:590,y:this.initialPersonCoord.y};
    }
    /**
     * 
     * @param {GameObject} box The moving box
     * @returns {boolean} update
     */
    updateMovingPerson(box){
        let speed=2
        let movingBoxDirection=this.getCurrentlyMovingBoxDirection()
        if(box.x<movingBoxDirection.x) box.x+=speed;
        if(box.x>movingBoxDirection.x) box.x-=speed;
        if(box.y<movingBoxDirection.y) box.y+=speed;
        
        if(box.y>movingBoxDirection.y) box.y-=speed;
    }
    setup(){
        let background=new GameObject(this.game.getTexture('queue_background'))
        background.y=0;
        background.x=0;
        background.width=this.game.width
        background.height=this.game.height
        this.game.addSprite(background)
        this.initRoad()
        this.newPeopleCount=this.level*3
        this.maxPeopleCount=this.newPeopleCount;
        for(let i=0;i<this.newPeopleCount;i++){
            let person=this.generatePerson()
            this.game.addSprite(person)
            this.people.push(person)
            this.allPeople.push(person)
        }
        this.people=this.people.reverse()
        this.allPeople=this.allPeople.reverse()
        //this.nextPersonCood=this.allPeople.pop()

        this.nextPersonIndex=this.allPeople.length-1;

        //this.constPersonCoord=Object.assign({},this.allPeople[this.nextPersonIndex]);
        this.people.pop()
        this.setupScroreBoard()
        this.generateCar()
        this.interval=setInterval(()=>{
            if(this.game.gameType!=this){
                clearInterval(this.interval)
                return;
            }
            this.generateCar()
        },6000-this.level*1000)
    }
    initRoad(){
        let road=new GameObject(this.game.getTexture('road'));
        road.width=200;
        road.x=this.game.screenX+50
        road.height=this.game.height;
        this.game.addSprite(road)
    }
    generateCar(){
        let randomIndex=Math.floor(Math.random()*10)%this.carSpecs.length;
        let facingDown=Math.random()>0.5
        let spec=this.carSpecs[randomIndex];
        let car=new GameObject(this.game.getTexture(spec.name));
        car.width=spec.width;
        car.height=spec.height;
        //car.anchor.set(0.35,0.3)
        if(facingDown){
            car.x=this.game.width-120
            car.y=-20
            car.flip()
            car.vy=this.level//+Math.random()
            console.log("Facing down",car)
        }
        else{
            car.x=this.game.width-220
            car.y=this.game.height+20
            car.vy=-this.level//*Math.random()*10
        }
        console.log("New car speed",car.vy)
        this.enemies.push(car);
        this.game.addSprite(car);
    }
    generatePerson(){
        let box=new GameObject(this.game.getTexture('person'));
        box.width=this.initialPersonCoord.width
        box.height=this.initialPersonCoord.height
        box.y=this.initialPersonCoord.y
        box.x=this.initialPersonCoord.x;
        box.interactive=true
        box.buttonMode=true
        box.on('pointerdown',(e)=>{
            let notTopBox=this.people.includes(box)
            //Prevent futher clicking of boxes and allow only topmost box to be clicked
            if(this.activePerson||notTopBox) return false
            this.activePerson=box;
            //Removes the topmost box
            this.people.pop()
            this.newPeopleCount--
            this.updateScore()
            
            if (!this.constPersonCoord) {
                //this.constPersonCoord=Object.assign({},this.allPeople[this.nextPersonIndex]);
                this.allPeople.pop()
                this.constPersonCoord=Object.assign({},this.allPeople[this.nextPersonIndex])
                
                //console.log(this.allPeople.pop())
            }
            else{
                this.allPeople.pop()
            }
            console.log(this.constPersonCoord)
            
            this.nextPersonCoord= this.constPersonCoord
            this.nextPersonIndex=this.allPeople.length-1;
            return true
		})
        this.initialPersonCoord.x-=this.initialPersonCoord.width
        return box;
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
        this.scoreText.text="Score: "+(this.maxPeopleCount-this.newPeopleCount)+"/"+this.maxPeopleCount;
    }
    play(onStart,onWin,onGameOver){
        super.play(onStart,onWin,onGameOver)
        this.setup()
        this.onStart()
    }
}