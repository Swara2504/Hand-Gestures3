prediction1= ""
prediction2= ""

Webcam.set({
width: 350,
height: 300,
image_format:'png',
png_quality: 90 
});
camera= document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src= "'+data_uri+'"/>';
    });
}
console.log('ml5version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5hTKbgUc_/model.json',modelLoaded);
function modelLoaded()
{
    console.log('modelLoaded');
}
function check(){
    img= document.getElementById('capture_image');
    classifier.classify(img,gotResult);

}
function speak()
{
    var synth=window.speechSythesis;
    speak_data_1= "The 1st Prediction is"+ prediction1;
    speak_data_2= "and the 2nd Prediction is"+ prediction2;
    var utterThis= new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}
function gotResult(error,results)
{
 if(error)
 {
     console.error(error);
 }
 else{
     console.log(results);
     document.getElementById("result_gesture_name").innerHTML=results[0].label;
     document.getElementById("result_gesture_name2").innerHTML=results[1].label;
     prediction1=results[0].label;
     prediction2=results[1].label;
     if(results[0].label=="Peace")
     {
         document.getElementById("update_emoji").innerHTML="&#9996;";
     }
     if(results[0].label=="Yo")
     {
         document.getElementById("update_emoji").innerHTML="&#129304;";
     }
     if(results[0].label=="Vulcan Salute")
     {
         document.getElementById("update_emoji").innerHTML="&#128406;";
     }
     if(results[0].label=="Thumb's Up")
     {
         document.getElementById("update_emoji").innerHTML="&#128077;";
     }
     if(results[0].label=="Thumb's Down")
     {
         document.getElementById("update_emoji").innerHTML="&#128078;";
     }
 
     if(results[1].label=="Peace")
     {
         document.getElementById("update_emoji").innerHTML="&#9996;";
     }
     if(results[1].label=="Yo")
     {
         document.getElementById("update_emoji").innerHTML="&#129304;";
     }
     if(results[1].label=="Vulcan Salute")
     {
         document.getElementById("update_emoji").innerHTML="&#128406;";
     }
     if(results[1].label=="Thumb's Up")
     {
         document.getElementById("update_emoji").innerHTML="&#128077;";
     }
     if(results[1].label=="Thumb's Down")
     {
         document.getElementById("update_emoji").innerHTML="&#128078;";
     }
     speak();
 }
}
