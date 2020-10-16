class Game {
    constructor() { }

    getState() {
        var gs = database.ref('gameState')
        gs.on("value", function (data) {
            gameState = data.val();
        })
    }
    start() {
        if (gameState === 0) {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();

        }
    }
    play() {
        form.hide();
        textSize(30);
        text("GAME START", 120, 100);
        Player.getPlayerInfo();
        var dp = 130;
        if (allPlayers !== undefined) {
            for (var i in allPlayers) {
                if (i === "player" + player.index) {
                    fill("red")
                }
                else { fill("black") }
                textSize(15);
                dp = dp + 20;
                text(allPlayers[i].name + ":" + allPlayers[i].distance, 120, dp)

            }

            if (keyIsDown(UP_ARROW) && player.index !== null) {
                player.distance = player.distance + 50;
                player.update();
            }
        }

    }
    update(state) {
        database.ref('/').update({ gameState: state })
    }

}