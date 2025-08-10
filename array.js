

var words = ["graphic design", "masters degree", "creative coding"];

var index = 0;

let extraCanvas;

let Text2 = ['Click to change word and drag the mouse'] 


function setup(){
  extraCanvas = createGraphics(windowWidth, windowHeight);
  extraCanvas.clear;
  createCanvas(windowWidth, windowHeight);
 colorMode(HSB)
}

function draw(){
//  background('white');
 image(extraCanvas, 0, 0);

  graphicDesign()


  text2()
  
  ExtraCanvas()

  }

  function graphicDesign(){
    noStroke();
  fill(random(310), random(100), random(0, 150), 30);
 textSize(52);
  text(words[index], mouseX, mouseY);
  
  }


  function text2(){
      fill('black')
      stroke('pink')
      strokeWeight(5)
        textSize(30);
  text(Text2, 600, 700);

  }


  function ExtraCanvas(){
     extraCanvas.ellipse(random(0, windowWidth), random(0, 600), random(0, 25), 20);
  extraCanvas.colorMode(RGB);
  extraCanvas.fill( random(315), random(255), random(255), 1);
  


}

 function mousePressed (){
  index = index + 1;
  background(255);
  extraCanvas.clear();

  if (index == words.length){
    index = 0;
  }
}

