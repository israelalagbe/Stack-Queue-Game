class GameType{
    constructor(){
        this.update=this.update.bind(this);
        
    }
    /**
     * 
     * @param {number} delta The time since the last update
     * @returns {void}
     */
    update(delta){}
    /**
     * 
     * @param {Function} onStart Called when the game play starts
     * @param {Function} onWin Called when the game has been won
     * @param {Function} onGameOver Called when the game is lost
     * @returns {void}
     */
    play(onStart,onWin,onGameOver){
        this.onStart=onStart;
        this.onWin=onWin;
        this.onGameOver=onGameOver;
    }
}