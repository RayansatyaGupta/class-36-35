class Form{
    constructor(){
        this.title = createElement('h1');
        this.input = createInput('name');
        this.button = createButton('Play');
        this.greeting = createElement('h2');
    }
    hide(){
       this.title.hide();
       this.input.hide();
       this.button.hide();
       this.greeting.hide();
       
    }
    display(){
        this.title.html("car racing game");
        this.title.position(130,0);
        this.input.position(130,160);
        this.button.position(230,250);
        this.button.mousePressed(()=>{
            this.button.hide();
            this.input.hide();
            player.name = this.input.value();
            playerCount ++ 
            player.index = playerCount
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("welcome" + player.name );
            this.greeting.position(130,230);
            
        })
    }

}