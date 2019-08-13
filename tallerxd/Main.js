
new p5(function (app) {

    let personaje;
    let enemigos;
    let balas;

    app.setup = function () {
          //al parecer es como el size en java.
        app.createCanvas(900, 900);
        personaje = new Personaje(app, 800, 800, 50, 60);
        balas = [];
        enemigos = [];
        //columnas
        for (let i = 0; i < 7; i++) {
         //filas
        for (let j = 0; j < 4; j++) {

        //Movimiento de enemigos
        //Enemigo1
        if(j<2 ){
            enemigos.push(new Enemigo1 (app, 50 + (100*i), -60 - (100*j) ))  ; 
        }
        //Enemigo2
        if(j<4 ){
            enemigos.push(new Enemigo2 (app, 50 + (100*i), -60 - (100*j) ))    ; 
        }
        }
    }
        //
        //this.imagen = this.app.loadImage('./src/img/imagen.png');
        //Esto va en el boton de disparo
        //this.balas.push(new Bala(app,x,y..etc))
    }
  

    app.draw = function () {
        app.background(0);
        personaje.pintarPersonaje();

        // Esto pinta balas y las borra
        for (let i = 0; i < balas.length; i++) {
            const bala = balas[i];
            bala.pintarBala();
            if(bala.matY<-100){
                balas.splice(1,i);
            }

        }

        // Recorremos array de enemigos para pintar y mover 
        for (let i = 0; i < enemigos.length; i++) {
            enemigos[i].pintarEne();
            enemigos[i].moverEnemigos();


            //aqui mueren los enemigos :V
     if(enemigos[i].vivo == false){
        enemigos.splice(1, i);
     }
            
        }

        for (let i = 0; i < balas.length; i++) {
            for (let j = 0; j < enemigos.length; j++) {
            enemigos[j].colision(balas[i].matX,balas[i].matY);
                
            }
    
            
        }

        
        
    }

    app.keyPressed = function () {

        //Ir a la derecha
        if (app.keyCode == app.RIGHT_ARROW && personaje.matX < 880) {
            personaje.matX += 20;
        }

        //Ir a la izquierda
        if (app.keyCode == app.LEFT_ARROW && personaje.matX > 20) {
            personaje.matX -= 20;
        }

        // if disparo
        // => new Bala
        // ==> add new Bala to balas
        if(app.key == ' ' ){
            balas.push(new Bala(app,personaje.matX,personaje.matY,20,20));
        }
    }
});
