class Game{
    constructor(){}
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", (data)=>{
            gameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({
           gameState: state,
           
        })
    
    }
    async start(){
        if(gameState === 0){
            player = new Player();
          var playerCountRef = await database.ref("playerCount").once("value");
          if(playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getCount();
              
          }
            form = new Form;
            form.display();

        }
          player1 = createSprite(100,200);
          player1.addImage(policeImg)
          player2 = createSprite(500,200);
          player2.addImage(thiefImg);
           players = [player1,player2];
           player2.scale = 0.8;
           player1.scale = 0.4;


    }
    play(){
        
        form.hide();
        Player.getPlayerInfo();
        if(allPlayers !== undefined){

            background("#4B4B4B");   
            image(trackImg, 0, -displayHeight * 4, displayWidth , displayHeight * 5);
            var index = 0;
            var x = 0;
           var x2 = 0;
           var a;
            var y = 0;
            for(var plr in allPlayers){
               index = index + 1;
             
            x = displayWidth/6 + allPlayers[plr].xPosition  ;
            x2 = displayWidth/2 + allPlayers[plr].xPosition;
        
                y  = displayHeight - allPlayers[plr].distance;
               
                players[0].x = x ;
               players[1].x = x2;
              // players[index - 1].x = x;
               
                players[index - 1].y = y;
                if(index === 0){
              fill("red")
              ellipse(x,y,100,100)
               camera.position.x = displayWidth/2;
               camera.position.y = players[0].y;
            }
           else if(index === 1){
                fill("red")
                ellipse(x2,y,100,100)
                 camera.position.x = displayWidth/2;
                 camera.position.y = players[1].y;
              }

             //  console.log(player.distance);
                
             //  textSize(15);
               //  text( "name  : " + allPlayers[plr].name, displayWidth / 2, displayHeight / 2 );
           //text("distance  : " + allPlayers[plr].distance, displayWidth / 2 , displayHeight / 4);
                
                
                
            }
        } 
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.yDistance += 50;
            player.update();
        }
        if(keyIsDown(DOWN_ARROW) && player.index !== null){
            player.yDistance -= 50;
            player.update();
        }
     //   console.log( "hello   " + player.xDistance);
       // if(player.xDistance < 630 || player.xDistance > 140){
                if(keyIsDown(LEFT_ARROW) && player.index !== null  ){
                    player.xDistance -= 5;
                    player.update();
                    //console.log(player.xDistance)
                    
                    }
                    if(keyIsDown(LEFT_ARROW) && player.index !== null  ){
                        player.xDistance += 5;
                        player.update();
                        //console.log(player.xDistance)
                        
                        }
                   if(keyIsDown(RIGHT_ARROW) && player.index !== null){
                        player.xDistance += 5;
                        player.update();
                      //  console.log(player.xDistance);
                        
                    }
      //  }
      /*  if(player.distance > 3800 ){
            gameState = 2;
           
           
        }*/ 
        var y;
    
    
      if(frameCount % 60 === 0){
        var a = player.yDistance + 60;
          y = player.yDistance + 150;
      var z  = Math.round(random(a,y));
         obstacle = createSprite(random(100,500),  - displayHeight * 4, 100,100);
        
         obstacle.velocityY = 30;
      }
      
        drawSprites(); 
    }
    end(){
        text("hello", 100, 100);
    }
}