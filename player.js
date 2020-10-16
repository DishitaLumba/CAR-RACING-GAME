class Player{
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
    }
    getCount(){
        var pc = database.ref('playerCount') 
        pc.on("value",function(data){
        playerCount = data.val();    
        })   
        }
    updateCount(x){
        database.ref('/').update({playerCount:x})        
    } 

    update(){
        var index = "players/player"+ this.index;
        database.ref(index).set({
            name:this.name,
            distance:this.distance
        })
        
    }

  static getPlayerInfo(){
      var playerInfo=database.ref("players")
      playerInfo.on("value",(data)=>{
      allPlayers = data.val();
      })
  }  
}