function askQuestion(){
    var questionText = document.getElementById("question").value; 
    if(questionText!=""){
        console.log("typing")
        document.getElementById('chat-window').innerHTML+= '<br/><div class="row"><div class="col-10 offset-2"><div class="card bg-user"><div class="card-body"><i class="fas fa-user text-success"></i> &nbsp; '+questionText+'</div></div></div></div>'
        document.getElementById("question").value = "";
        var objDiv = document.getElementById("chat-window");
        objDiv.scrollTop = objDiv.scrollHeight;
        const url="https://reactclassvr.azurewebsites.net/qnamaker/knowledgebases/138335f9-e44a-4ab2-91c8-42d28fe732f5/generateAnswer"
        const myHeaders = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'EndpointKey d4c0ceb8-5a6d-4945-aa21-30055ca52415'
        });
        const data={question:questionText}
        document.getElementById('chat-window').innerHTML+= '<br/><p>typing ... </p>'
        const result=fetch(url, {
            method: 'POST', 
            body: JSON.stringify(data), 
            headers: myHeaders
        });

        result.then(res=>res.json()).then(data=>{
            document.getElementById('chat-window').lastChild.remove()
            console.log(data.answers[0].answer.split(".")[0]);
            speak(data.answers[0].answer.split(".")[0])
            document.getElementById('chat-window').innerHTML+= '<div class="row"><div class="col-10"><div class="card bg-bot"><div class="card-body"><i class="fas fa-robot text-primary"></i> &nbsp; '+data.answers[0].answer.split(".")[0]+'</div></div></div></div>';
            
            document.getElementById("question").setAttribute('placeholder',"Ask a question");
            var objDiv = document.getElementById("chat-window");
            objDiv.scrollTop = objDiv.scrollHeight;
        }); 
    }
}

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition

var recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
word = ""
function startSpeech(){
    document.getElementById("question").setAttribute('placeholder',"Listening ...")
    recognition.start();
    console.log('Ready to receive command.');
}
recognition.onresult = function(event) {
    var currentWordPosition= event.results.length-1;
    word=event.results[currentWordPosition][0].transcript.trim();
    document.getElementById("question").value = word;
    askQuestion()
}
recognition.onspeechend = function() {
    recognition.stop();
}

function speak(message) {
    var synth = window.speechSynthesis;
    var speech = new SpeechSynthesisUtterance(message);
    synth.speak(speech);
    console.log("Speaking : " + message);
}

