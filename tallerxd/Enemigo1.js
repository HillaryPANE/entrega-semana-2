class Enemigo1 extends Enemigo{
    
    constructor(app,matX, matY){
        super(app,matX, matY);
        this. vel= 4;

    }

    pintarEne(){
        this.app.fill(0,255,0);//verde
        this.app.ellipse(this.matX, this.matY, 50,60);

    }
}