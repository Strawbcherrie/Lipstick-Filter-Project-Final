nosex = 0;
nosey = 0;

function preload(){
    // This is a pre-defined function of p5.js
    lipstick_filter = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup(){
    canvas = createCanvas(400,500);
    canvas.center();
    // these are predifined functions of p5
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, ModelLoaded);
    // poseNet is a variable which stores the poseNet function so that it can be loaded to ml5 to identify or compare the point of the body which is nose here and then the modeLoaded function is called for our reference which will show the text in console.
    poseNet.on('pose', gotPoses);
}

function ModelLoaded(){
    console.log("ModelLoaded");
}

function draw(){
    image(video, 0, 0, 400, 300);
    image(lipstick_filter, nosex, nosey, 40, 30);
}

function download(){
    save('miwacl.png');
}

function gotPoses(results){
    if(results.length > 0){
        //document.getelementbyid = ()
        console.log(results);
        nosex= results[0].pose.nose.x - 15;
        nosey= results[0].pose.nose.y - 70;
        console.log("nose x : " + results[0].pose.nose.x);
        console.log("nose y : " + results[0].pose.nose.y);

        // why not nosex variable and results.....
    }
}