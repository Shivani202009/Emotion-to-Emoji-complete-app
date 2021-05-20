// code for setting up the webcam

Webcam.set({
    height:300,
    width:350,
    image_format:"png",
    png_quality: 90
})

// code for triggering the webcam

Webcam.attach("#camera")

// code for taking snapshot

function capture() {
    Webcam.snap(
        function (img) {
           document.getElementById("snapshot").innerHTML=`<img src="${img}" id="selfie_image">` 
        }
    )
}

// code for checking ml5 version

console.log(ml5.version)

// code for importing the model

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/uLGNNykHO/model.json",modelloaded)

function modelloaded() {
    console.log("your model has loaded")
}

// code for function speak

function speak() {
    var speechapi=window.speechSynthesis
    data1="the first prediction is "+ prediction1
    data2="the second prediction is "+ prediction2
    utter_this= new SpeechSynthesisUtterance(data1+data2)
    speechapi.speak(utter_this)
}

//code for identifying the captured image

function identify() {
    img= document.getElementById("selfie_image")
    classifier.classify(img,getresults) //classifier is a predefined function ofml5 js used for identifying and the captured image and get results

}
// code for getting the results
function getresults(error,results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        prediction1=results[0].label
        prediction2=results[1].label
        document.getElementById("emotion1").innerHTML=prediction1
        document.getElementById("emotion2").innerHTML=prediction2
        
        if (prediction1=="Thinking") {
            document.getElementById("emoji1").innerHTML="&#x1f914;"
        }
        if (prediction1=="Angry") {
            document.getElementById("emoji1").innerHTML="&#128545;"
        }
        if (prediction1=="Smiling") {
            document.getElementById("emoji1").innerHTML="&#128522;"
        }
        if (prediction1=="Astonished") {
            document.getElementById("emoji1").innerHTML="&#xe410;"
        }
        if (prediction1=="Sad") {
            document.getElementById("emoji1").innerHTML="&#128532;"
        }
speak()

        if (prediction2=="Thinking") {
            document.getElementById("emoji2").innerHTML="&#x1f914;"
        }
        if (prediction2=="Angry") {
            document.getElementById("emoji2").innerHTML="&#128545;"
        }
        if (prediction2=="Smiling") {
            document.getElementById("emoji2").innerHTML="&#128522;"
        }
        if (prediction2=="Astonished") {
            document.getElementById("emoji2").innerHTML="&#xe410;"
        }
        if (prediction2=="Sad") {
            document.getElementById("emoji2").innerHTML="&#128532;"
        }
    }

}