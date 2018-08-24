var Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite,
    Texture=PIXI.Texture;
    



const AssetConstants={
    "pebble":"asset/crate.png",
    "jar":"asset/jar.jpg",
    "fire":"asset/sprite_fire.png",
    "person":"asset/old_woman.png",
    "road":"asset/road.png",
    "abulance":"asset/abulance.png",
    "viper":"asset/Black_viper.png",
    "truck":"asset/Mini_truck.png",
    "taxi":"asset/taxi.png"
};

class Game {

    constructor() {
        /**
         * The Real game type such as Stack, Queue
         * @type {GameType}
        */
        this.gameType=null
        /**
         * Is the game currently playing
         * @type {boolean}
        */
       this.isPlaying=false
        /**
         * Specifies if a all asset has been loaded and everything has been declared
         * @type {boolean}
         * 
        */
        this.gameReady=false
         /**
         * The function to be called when all asset has been loaded
         * @type {Function}
         * @returns {void}
        */
        this.onReady=()=>{};
        this.app = new Application({
            width: 600,
            height: 500,//window.innerHeight,
            antialiasing: true,
            transparent: false,
            resolution: 1,

        });
        this.loadAsset()
    }
    /**
     * 
     * @param {string} name The name of the texturne
     * @returns {Texture} The texture object
     */
    getTexture(name){
        return resources[AssetConstants[name]].texture
    }
    loadAsset() {
        Object.values(AssetConstants).forEach((item,index)=>{
            loader=loader.add(item)
        })
        loader.load(this.setup.bind(this));
    }
    get height(){
        return this.app.renderer.height
    }
    get width(){
        return this.app.renderer.width
    }
    get screenX(){
        return this.width/2;
    }
    get screenY(){
        return this.height/2;
    }
    set height(value){
        this.app.renderer.height=value
    }
    set width(value){
        this.app.renderer.width=value
    }
    setup(loadEvent,loadData){
    
        //this.app.stage.removeChildren()

        this.onReady();
        this.gameReady=true;
    }
    addSprite(sprite){
        this.app.stage.addChild(sprite);
    }
    removeSprite(sprite){
        this.app.stage.removeChild(sprite)
    }
    ready(cb){
        this.onReady=cb;
        if(this.gameReady) this.onReady();
    }
    showGame(gameClass,level){
        this.gameType=new gameClass(this,level)
        this.gameType.play(()=>{
            this.app.ticker.add(this.gameType.update)
            this.isPlaying=true
            
        },()=>{
            //On win
            this.stopGame()
            
            setTimeout(()=>{
                alert("You Won")
                this.showGame(gameClass,++level)
            },1000)
            
            //this.stopGame()
        },()=>{
            //On Lose
            this.stopGame()
            
            if(confirm("You Lose, do you want to play again?")){
                this.showGame(gameClass,1)
            }
            
         
            
            //this.stopGame()
        })
    }
    stopGame(){
        if(this.gameType){
            this.app.ticker.remove(this.gameType.update)
        }
        this.gameType=null;
        this.app.stage.removeChildren()
        this.app.stage.removeAllListeners()
        this.isPlaying=false
    }
    get view() {
        return this.app.view;
    }
}