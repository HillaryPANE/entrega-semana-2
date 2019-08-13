class Bala{
    
    constructor(app,matX, matY, vel, tam){
        
        this.app = app;
        this.matX= matX;
        this.matY= matY;
        this.vel= vel;
        this.tam= tam;
    }

    pintarBala(){
        this.app.fill(200, 0, 0);
        this.app.rectMode(this.app.CENTER);
        this.app.rect(this.matX, this.matY, this.tam, this.tam);
        this.matY -= 4;

    }
}