import MovingDirection from "./MovingDirection.js";

export default class Pacman {
    constructor(x, y, tileSize, velocity, tileMap) {
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.velocity = velocity;
        this.tileMap = tileMap;

        this.currentMovingDirection = null;
        this.requestedMovingDirection = null;

        document.addEventListener("keydown", this.#keydown)

        this.#loadPacmanImages();
    }

    draw(ctx) {
        this.#move();
        ctx.drawImage(
            this.PacmanImage[this.pacmanImageIndex],
            this.x,
            this.y,
            this.tileSize,
            this.tileSize
        );
    }

    #loadPacmanImages() {
        const pacmanImage1 = new Image();
        pacmanImage1.scr = "../images/pac0.png";

        const pacmanImage2 = new Image();
        pacmanImage2.scr = "../images/pac1.png";

        const pacmanImage3 = new Image();
        pacmanImage3.scr = "../images/pac2.png";

        const pacmanImage4 = new Image();
        pacmanImage4.scr = "../images/pac3.png";

        this.PacmanImage = [
            pacmanImage1,
            pacmanImage2,
            pacmanImage3,
            pacmanImage4
        ];
        this.pacmanImageIndex = 1;
    }


    #keydown = (event) => {
        //up
        if (event.keyCode == 38) {
            if (this.currentMovingDirection == movingDirection.down)
                this.currentMovingDirection = movingDirection.up;
            this.requestedMovingDirection = movingDirection.up;
        }
        //down
        if (event.keyCode == 40) {
            if (this.currentMovingDirection == movingDirection.up)
                this.currentMovingDirection = movingDirection.down;
            this.requestedMovingDirection = movingDirection.down;
        }
        //left
        if (event.keyCode == 37) {
            if (this.currentMovingDirection == movingDirection.right)
                this.currentMovingDirection = movingDirection.left;
            this.requestedMovingDirection = movingDirection.left;
        }
        //right
        if (event.keyCode == 39) {
            if (this.currentMovingDirection == movingDirection.left)
                this.currentMovingDirection = movingDirection.right;
            this.requestedMovingDirection = movingDirection.right;
        }
    };
    #move(){

    }
}




