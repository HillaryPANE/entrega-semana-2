class Enemigo{
    
    constructor(app,matX, matY){
        this.app= app;
        this.matX= matX;
        this.matY= matY;
        this.vivo= true;

    }

    moverEnemigos(){
        this.matX+= this.vel;
        if(this.matX>= this.app.width -30 || this.matX <= 30){
            this.vel*= -1;
            this.matY+= 100;

        }
      
    }

    colision(x,y){
        if(this.app.dist(this.matX, this.matY, x,y)<20){
                this.vivo= false;
        }
    }
}