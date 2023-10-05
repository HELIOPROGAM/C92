// Crie o elemento canvas:
var canvas = new frabic.Canvas("myCanvas")

// defina a width e height do bloco imagem
blockImageWidth = 30;
blockImageHeight = 30;
// defina as coordenadas x e y da imagem do personagem
playerX = 10
playerY = 10
var playerObject="";
// Função para adicionar playerUpdate():
function player_update()
    {
        fabric.Image.fromURL("player.png", function(Img) {
            playerObject = Img;
            playerObject.scaleToWidth(150);
            playerObject.scaleToHeght(140);
            playerObject.set({top:playerY, left:playerX});
            canvas.add(playerObject);
        });
    }


// Função para adicionar a imagem do bloco
function new_image(getImage)
{
    fabric.Image.fromURL(getImage, function(IMG) {
        blockImageObject = Img;
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight); 
        blockImageObject.set({top:playerY,left:playerX});
        canvas.add(blockImageObject);
    });
}

