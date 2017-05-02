var stickerz = []; // making an array of the objects
var stickercount = 70; // makes 70 random stickers appear


function preload() { // loads the stickers into the system, to be used later
    
    img0 = loadImage ("banner.png"); // logo 
    
    img1 = loadImage("duckie.png"); // duck frump
    img2 = loadImage ("carrot.png"); // alt trump 
    img3 = loadImage ("doggie.png"); // bitch pls
    img4 = loadImage ("dump.png"); // dump trump 
    img5 = loadImage ("she.png"); // nevertheless 
    }

function setup() { 
	var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("sketch");
	
    frameRate(60);
    
    for (i=0; i < stickercount; i++) { // this makes the instances of the stickers
        stickerz.push(new Burst()); 
    }
        imageMode(CENTER);
}
    
function draw() {
    
	background(255,255,255); // transparent, so that it can be overlaid on website
    //image("banner.png", 500,500, 200,200);
    
    console.log(frameCount); // logs the frame count just to keep track
    
    for(var i=0; i<stickerz.length;i++){ // actually drawing/generating the stickers on the screen
        stickerz[i].draw();  
    }
}

function Burst() {
    
    this.x = random(0, windowWidth);  // random coordinates where it starts
    this.y = random(0, windowHeight); 
    
    this.graphic = eval("img" + floor(random(1,6))); // picks the random images
    
    this.draw = function(){ // draws the stickers onto the screen
        
    image(this.graphic, this.x, this.y, 200, 200); 
        
        this.yspeed =  random(1,7);
        
        this.y += this.yspeed;
        }     
}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
 