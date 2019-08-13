class Personaje {
    constructor(app, matX, matY, tam) {

        this.app = app;
        this.matX = matX;
        this.matY = matY;
        //this.vel= vel;
        this.tam = tam;



    }

    pintarPersonaje() {
        this.app.fill(200, 0, 0);
        this.app.ellipse(this.matX, this.matY, this.tam, this.tam);

    }
    
}