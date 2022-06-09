nosex = 0;
nosey = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup(){
    canvas = createCanvas(550 , 550);
    canvas.position(600 , 110);
    video = createCapture(VIDEO);
    video.size(550 , 500);
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
    background("#FFA500");
    fill("#808080");
    stroke("#808080");
    square(nosex , nosey , difference);
    document.getElementById("square_side").innerHTML = "The width and height of the square will be " + difference + " px";
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("noseX = " + nosex + "noseY = " + nosey);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX  = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}