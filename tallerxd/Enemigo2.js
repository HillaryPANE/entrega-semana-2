class Enemigo2 extends Enemigo{
    
    constructor(app,matX, matY){
        super(app,matX, matY);
        this. vel= 2;

    }

    pintarEne(){
        this.app.fill(0,0,255);//azul
        this.app.ellipse(this.matX, this.matY, 30,40);

    }
}