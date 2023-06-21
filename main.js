 song1="";
 song2="";
leftWristx=0;
leftWristy=0;
rightWristx=0;
rightWristx=0;
song1status="";
song2status="";
scoreRightWrist=0;
scoreLeftWrist=0;

function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log('posenet is initialised');
}
function draw()
{
image(video,0,0,600,500);
song1status=song1.isPlaying();
song2status=song2.isPlaying();

fill("#ff0000");
stroke("#ff0000")
if(scoreRightWrist>0.0)
circle(rightWristx,rightWristy,20)
song2.stop();
if(song1status==false){
    song1.play();
    document.getElementById("song").innerHTML="playing Harry potter Song";
}



if(scoreLeftWrist > 0.0)
 { circle(leftWristX,leftWristY,20);
     song1.stop();
     if(song2status==false){
        song2.play();
        document.getElementById("song").innerHTML="playing petter pan Song";
    }
    
     }
}

function preload()
{
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score; 
        scoreLeftWrist = results[0].pose.keypoints[9].score;
         console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);
        leftWristx=results[0].pose.leftWrist.x;
        leftWristy=results[0].pose.leftWrist.y;
        console.log("leftWristx=" +leftWristx+"leftWristy=" +leftWristy);
        rightWristx=results[0].pose.rightWrist.x;
        rightWristy=results[0].pose.rightWrist.y;
        console.log("rightWristx=" +rightWristx+"rightWristy=" +rightWristy);
    }

}
