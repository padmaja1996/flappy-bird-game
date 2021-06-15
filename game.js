// let cvs = document.getElementById("canvas");
// let ctx = cvs.getContext("2d");

// //setting the background

// cvs.style.backgroundColor="skyblue";




// //loading the images

// let sprite = new Image();
// sprite.src ="images/sprite.png";


// //cloud object

// let cloud=
// {
// sX:0,
// sY:0,
// w:275,
// h:220,
// x:0,
// y:cvs.height-220,
// draw:function(){
//     ctx.drawImage(sprite,this.sX,this.sY,this.w,this.h,this.x,this.y,this.w,this.h);
//     ctx.drawImage(sprite,this.sX,this.sY,this.w,this.h,this.x+this.w,this.y,this.w,this.h);
//     ctx.drawImage(sprite,this.sX,this.sY,this.w,this.h,this.x+(2*this.w),this.y,this.w,this.h);
//     ctx.drawImage(sprite,this.sX,this.sY,this.w,this.h,this.x+(3*this.w),this.y,this.w,this.h);
//     ctx.drawImage(sprite,this.sX,this.sY,this.w,this.h,this.x+(4*this.w),this.y,this.w,this.h);
//     ctx.drawImage(sprite,this.sX,this.sY,this.w,this.h,this.x+(5*this.w),this.y,this.w,this.h);
// }

// }

// //ground object
// let ground=
// {
// sX:276,
// sY:0,
// w:224,
// h:112,
// x:0,
// y:cvs.height-112,
// draw:function(){
//     ctx.drawImage(sprite,this.sX,this.sY,this.w,this.h,this.x,this.y,this.w,this.h);
//     ctx.drawImage(sprite,this.sX,this.sY,this.w,this.h,this.x+this.w,this.y,this.w,this.h);
//     ctx.drawImage(sprite,this.sX,this.sY,this.w,this.h,this.x+(2*this.w),this.y,this.w,this.h);
//     ctx.drawImage(sprite,this.sX,this.sY,this.w,this.h,this.x+(3*this.w),this.y,this.w,this.h);
//     ctx.drawImage(sprite,this.sX,this.sY,this.w,this.h,this.x+(4*this.w),this.y,this.w,this.h);
//     ctx.drawImage(sprite,this.sX,this.sY,this.w,this.h,this.x+(5*this.w),this.y,this.w,this.h);
//     ctx.drawImage(sprite,this.sX,this.sY,this.w,this.h,this.x+(6*this.w),this.y,this.w,this.h);
// }

// }


// //for drawing
// function draw()
// {
// cloud.draw();
// ground.draw();
// }



// //loop function
// function loop()
// {
//     draw();
//     requestAnimationFrame(loop);
// }
// loop();