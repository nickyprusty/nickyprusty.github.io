url="";
navigateUrl = "";
resourseNumber = 0;
quizPage = false;
synth = window.speechSynthesis;
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition

var recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
word = ""
var questions = [
    {
        question: "What is React?",
        answer: "JavaScript library",
        options: ["HTML library","Framework","TypeScript library"],
        explanations: [
            "Oops! React is a JavaScript Library, not a HTML Library",
            "Oops! React is a JavaScript Library, not a framework",
            "Oops! React is a JavaScript Library, not a TypeScript library"
        ]
    },
    {
        question: "What is the command to create a new React app?",
        answer: "create-react-app <app-name>",
        options: ["new <app-name>","ng new <app-name>","react <app-name>"],
        explanations: [
            "Oops! There is no such command, you can create a new react application using the create-react-app module.",
            "Oops! That command is used to create new angular application, you can create a new react application using the create-react-app module.",
            "Oops! There is no such command, you can create a new react application using the create-react-app module."
        ]
    },
    {
        question: "Which of the following style should be used to style the element: <h1> I'm Styled </h1>",
        answer: 'style={{color: "blue", fontFamily:"Arial"}}',
        options: ['style={{color: "blue", font-family:Arial"}}','style={color: "blue" fontFamily:"Arial"}','style={{color: "blue"; FontFamily:"Arial"}}'],
        explanations: [
            "Oops! The style properties should be camel cased! The correct answer is option A",
            "Oops! The styles should be an object. The correct answer is option A",
            "Oops! The styles should be coma separated! The correct answer is option A"
        ]
    }
]

AFRAME.registerComponent('go-to-resourse-1',{
    init: function(){
        var resourse1image = this.el;
        var plane1 = document.getElementById('resourse1');
        var plane2 = document.getElementById('resourse2');
        var plane3 = document.getElementById('resourse3');
        var cickSound = document.querySelector('[sound]');
        var goText = document.getElementById('go-text-1');
        var goImage = document.getElementById('go-image-1');
        resourse1image.addEventListener('click', function () {
            cickSound.components.sound.playSound();
            plane1.setAttribute('width','2.7');
            plane1.setAttribute('height','0.8');
            plane2.setAttribute('width','2.5');
            plane2.setAttribute('height','0.75');
            plane3.setAttribute('width','2.5');
            plane3.setAttribute('height','0.75');
            goText.setAttribute('position','1.5 2.05 -3');
            goImage.setAttribute('position','2.1 2 -2.75');
            goText.setAttribute('visible',true);
            goImage.setAttribute('visible',true);
            url = "../../assets/CourseVideos/Module1/video1.mp4";
            sessionStorage.setItem('videoURL',url);
            resourseNumber =1;
        });
    }
})
AFRAME.registerComponent('go-to-resourse-2',{
    init: function(){
        var resourse2image = this.el;
        var plane2 = document.getElementById('resourse2');
        var plane1 = document.getElementById('resourse1');
        var plane3 = document.getElementById('resourse3');
        var cickSound = document.querySelector('[sound]');
        var goText = document.getElementById('go-text-1');
        var goImage = document.getElementById('go-image-1');
        resourse2image.addEventListener('click', function () {
            cickSound.components.sound.playSound();
            plane2.setAttribute('width','2.7');
            plane2.setAttribute('height','0.8');
            plane1.setAttribute('width','2.5');
            plane1.setAttribute('height','0.75');
            plane3.setAttribute('width','2.5');
            plane3.setAttribute('height','0.75');
            goText.setAttribute('position','1.5 1.1 -3');
            goImage.setAttribute('position','2.1 1.125 -2.75');
            goText.setAttribute('visible',true);
            goImage.setAttribute('visible',true);
            url = "../../assets/CourseVideos/Module1/video2.mp4";
            sessionStorage.setItem('videoURL',url);
            resourseNumber =2;
        });
    }
})
AFRAME.registerComponent('go-to-resourse-3',{
    init: function(){
        var resourse3image = this.el;
        var plane2 = document.getElementById('resourse2');
        var plane1 = document.getElementById('resourse1');
        var plane3 = document.getElementById('resourse3');
        var cickSound = document.querySelector('[sound]');
        var goText = document.getElementById('go-text-1');
        var goImage = document.getElementById('go-image-1');
        resourse3image.addEventListener('click', function () {
            cickSound.components.sound.playSound();
            plane3.setAttribute('width','2.7');
            plane3.setAttribute('height','0.8');
            plane2.setAttribute('width','2.5');
            plane2.setAttribute('height','0.75');
            plane1.setAttribute('width','2.5');
            plane1.setAttribute('height','0.75');
            goText.setAttribute('position','1.5 0.3 -3');
            goImage.setAttribute('position','2.1 0.37 -2.75');
            goText.setAttribute('visible',true);
            goImage.setAttribute('visible',true);
            sessionStorage.setItem('questionNumber',0);
            resourseNumber =3;
        });
    }
})
AFRAME.registerComponent('go-to-url',{
    init:function(){
        var navigator = this.el;
        navigator.addEventListener('click',function(){
            if(resourseNumber===3){
                document.getElementById('resourse-screen').setAttribute('visible', 'false');
                document.getElementById('resourse-screen').setAttribute('position', '-20 -20 -20');
                document.getElementById('classroom-screen').setAttribute('visible', 'false');
                document.getElementById('classroom-screen').setAttribute('position', '-20 -20 -20');
                document.getElementById('quiz-screen').setAttribute('visible', 'true');
                document.getElementById('quiz-screen').setAttribute('position', '0 0 0');
                finalSelectedOption = ""
                quizPage = true
                questionNumber = sessionStorage.getItem('questionNumber')
                question = questions[questionNumber];
                document.getElementById('question').setAttribute('value',question.question);
                document.getElementById('option1-text').setAttribute('value',question.answer);
                document.getElementById('option2-text').setAttribute('value',question.options[0]);
                document.getElementById('option3-text').setAttribute('value',question.options[1]);
                document.getElementById('option4-text').setAttribute('value',question.options[2]);
                explanationsArray = question.explanations;
                speak(question.question);
                speak("Option 1 "); speak(question.answer);
                speak("Option 2 "); speak(question.options[0]);
                speak("Option 3 "); speak(question.options[1]);
                speak("Option 4 "); speak(question.options[2]);
            }   else if(resourseNumber === 1 || resourseNumber === 2){
                quizPage = false;
                document.getElementById('resourse-screen').setAttribute('visible', 'false');
                document.getElementById('resourse-screen').setAttribute('position', '-20 -20 -20');
                document.getElementById('quiz-screen').setAttribute('visible', 'false');
                document.getElementById('quiz-screen').setAttribute('position', '-20 -20 -20');
                document.getElementById('classroom-screen').setAttribute('visible', 'true');
                document.getElementById('classroom-screen').setAttribute('position', '0 0 0');
                document.getElementById('penguin-sledding').setAttribute('src',sessionStorage.getItem('videoURL'))
            }         
        })
    }
})
AFRAME.registerComponent('mute-sound',{
    init: function(){
        var muteIcon = this.el;
        var playSoundIcon = document.getElementById('play-sound-icon')
        console.log("here",this.el);
        muteIcon.addEventListener('click', function () {
            console.log("stopping sound");
            synth.cancel();
            muteIcon.setAttribute('visible',false);
            muteIcon.setAttribute('position',"-20 -20 -20");
            playSoundIcon.setAttribute('position',"1.75 2.55 -2.5");
            playSoundIcon.setAttribute('visible',true);
        });
    }
})
AFRAME.registerComponent('play-sound',{
    init: function(){
        var playIcon = this.el;
        var muteSoundIcon = document.getElementById('mute-sound-icon')
        console.log("here",this.el);
        playIcon.addEventListener('click', function () {
            console.log("playing sound");
            speak(question.question);
            speak("Option 1 "); speak(question.answer);
            speak("Option 2 "); speak(question.options[0]);
            speak("Option 3 "); speak(question.options[1]);
            speak("Option 4 "); speak(question.options[2]);
            playIcon.setAttribute('visible',false);
            playIcon.setAttribute('position',"-20 -20 -20");
            muteSoundIcon.setAttribute('position',"1.75 2.55 -2.5");
            muteSoundIcon.setAttribute('visible',true);
        });
    }
})
AFRAME.registerComponent('select-option-1',{
    init:function(){
        var selectedOption = this.el;
        var submitText = document.getElementById('submit-text');
        var submitImage = document.getElementById('submit-image');
        selectedOption.addEventListener('click',function(){
            // synth.cancel();
            setTheAttributes('option2','option3','option4');
            submitText.setAttribute('visible',true);
            submitImage.setAttribute('visible',true);
            submitText.setAttribute('position','1.25 2.25 -3');
            submitImage.setAttribute('position','1.9 2.25 -3');
            selectedOption.setAttribute('height',0.4);
            selectedOption.setAttribute('width',2.2);
            selectedOption.setAttribute('color','green');
            finalSelectedOption = "option1";
        })
    }
})
AFRAME.registerComponent('select-option-2',{
    init:function(){
        var selectedOption = this.el;
        var submitText = document.getElementById('submit-text');
        var submitImage = document.getElementById('submit-image');
        selectedOption.addEventListener('click',function(){
            // synth.cancel();
            setTheAttributes('option1','option3','option4');
            submitText.setAttribute('visible',true);
            submitImage.setAttribute('visible',true);
            submitText.setAttribute('position','1.25 1.8 -3');
            submitImage.setAttribute('position','1.9 1.8 -3');
            selectedOption.setAttribute('height',0.4);
            selectedOption.setAttribute('width',2.2);
            selectedOption.setAttribute('color','green');
            finalSelectedOption = "option2";
        })
    }
})
AFRAME.registerComponent('select-option-3',{
    init:function(){
        var selectedOption = this.el;
        var submitText = document.getElementById('submit-text');
        var submitImage = document.getElementById('submit-image');
        selectedOption.addEventListener('click',function(){
            // synth.cancel();
            setTheAttributes('option2','option1','option4');
            submitText.setAttribute('visible',true);
            submitImage.setAttribute('visible',true);
            submitText.setAttribute('position','1.25 1.35 -3');
            submitImage.setAttribute('position','1.9 1.35 -3');
            selectedOption.setAttribute('height',0.4);
            selectedOption.setAttribute('width',2.2);
            selectedOption.setAttribute('color','green');
            finalSelectedOption = "option3";
        })
    }
})
AFRAME.registerComponent('select-option-4',{
    init:function(){
        var selectedOption = this.el;
        var submitText = document.getElementById('submit-text');
        var submitImage = document.getElementById('submit-image');
        selectedOption.addEventListener('click',function(){
            // synth.cancel();
            setTheAttributes('option2','option3','option1');
            submitText.setAttribute('visible',true);
            submitImage.setAttribute('visible',true);
            submitText.setAttribute('position','1.25 0.9 -3');
            submitImage.setAttribute('position','1.9 0.9 -3');
            selectedOption.setAttribute('height',0.4);
            selectedOption.setAttribute('width',2.2);
            selectedOption.setAttribute('color','green');
            finalSelectedOption = "option4";
        })
    }
})
function setTheAttributes(a,b,c){
    var option2=document.getElementById(a);
    var option3=document.getElementById(b);
    var option4=document.getElementById(c);
    option2.setAttribute('height',0.35);
    option2.setAttribute('width',2);
    option2.setAttribute('color','#3f51b5');
    option3.setAttribute('height',0.35);
    option3.setAttribute('width',2);
    option3.setAttribute('color','#3f51b5');
    option4.setAttribute('height',0.35);
    option4.setAttribute('width',2);
    option4.setAttribute('color','#3f51b5');
}
AFRAME.registerComponent('submit-answer',{
    init:function(){
        var submitButton = this.el;
        var responseText = document.getElementById('response-text');
        var submitText = document.getElementById('submit-text');
        var submitImage = document.getElementById('submit-image');
        var msg = ""
        var optionsArray = ["option2","option3","option4"];
        submitButton.addEventListener('click',function(){
            synth.cancel();
           if(finalSelectedOption === ""){
                msg = "Please select an option"
            } else if(finalSelectedOption === "option1"){
                msg = "Congratulations! You got it right!"
                submitText.setAttribute('visible',false);
                submitImage.setAttribute('visible',false);
            } else { 
                document.getElementById(finalSelectedOption).setAttribute('color','red');
                document.getElementById(finalSelectedOption).setAttribute('height',0.35);
                document.getElementById(finalSelectedOption).setAttribute('width',2);
                submitText.setAttribute('visible',false);
                submitImage.setAttribute('visible',false);
                document.getElementById('option1').setAttribute('color','green');
                document.getElementById('option1').setAttribute('height',0.4);
                document.getElementById('option1').setAttribute('width',2.2);
                for(let i=0;i<optionsArray.length;i++){
                    if(finalSelectedOption === optionsArray[i]){
                        msg = explanationsArray[i];
                    }
                }
            }
            responseText.setAttribute('value',msg)
            speak(msg);
        })
    }
})

function speak(message) {
    console.log(message)
    speech = new SpeechSynthesisUtterance(message);
    synth.speak(speech);
    console.log("Speaking : " + message);
}

AFRAME.registerComponent('go-back-quiz',{
    init: function(){
        var backButton = this.el;
        backButton.addEventListener('click', function () {
            setTimeout(()=>{
                synth.cancel();
                document.getElementById('resourse-screen').setAttribute('visible', 'true');
                document.getElementById('resourse-screen').setAttribute('position', '0 0 0');
                document.getElementById('classroom-screen').setAttribute('visible', 'false');
                document.getElementById('classroom-screen').setAttribute('position', '-20 -20 -20');
                document.getElementById('quiz-screen').setAttribute('visible', 'false');
                document.getElementById('quiz-screen').setAttribute('position', '-20 -20 -20');
            },500)
        });
    }
})

playingVideo = false;
AFRAME.registerComponent('play-video',{
    init: function(){
        var playButton = this.el;
        var video = document.getElementById('penguin-sledding');
        var playButtonPlane = document.getElementById('playVideoIcon');
        var pauseVideoIcon = document.getElementById('pauseVideoIcon');
        playButton.addEventListener('click', function () {
            if(playingVideo === false){
                playButtonPlane.setAttribute('width',0.55);
                playButtonPlane.setAttribute('height',0.2);
                pauseVideoIcon.setAttribute('width',0.6);
                pauseVideoIcon.setAttribute('height',0.25);
                video.play();
                playingVideo = true;
            }
            
        });
    }
})

AFRAME.registerComponent('pause-video',{
    init: function(){
        var pauseButton = this.el;
        var video = document.getElementById('penguin-sledding');
        var pauseVideoIcon = document.getElementById('pauseVideoIcon')
        var playButtonPlane = document.getElementById('playVideoIcon');
        pauseButton.addEventListener('click', function () {
            if(playingVideo === true){
                playButtonPlane.setAttribute('width',0.6);
                playButtonPlane.setAttribute('height',0.25);
                pauseVideoIcon.setAttribute('width',0.55);
                pauseVideoIcon.setAttribute('height',0.2);
                video.pause();
                playingVideo = false;
            }
        });
    }
})
AFRAME.registerComponent('ask-question',{
    init: function(){
        var questionButton = this.el;
        var video = document.getElementById('penguin-sledding');
        var pauseVideoIcon = document.getElementById('pauseVideoIcon')
        var playButtonPlane = document.getElementById('playVideoIcon');
        var playVideoText =document.getElementById('playVideoText');
        var pauseVideoText = document.getElementById('pauseVideoText');
        var chatbotPlane = document.getElementById('chatbotPlane');
        var classVideo = document.getElementById('classVideo')
        var educatorModel = document.getElementById("educatorModel");
        var questionToChatbot = document.getElementById('questionToChatbot');
        var answerFromChatbot = document.getElementById('answerFromChatbot');
        var closeChatbotText = document.getElementById('closeChatbotText');
        var backIconText = document.getElementById('backIconText');
        var closeChatbot =document.getElementById('closeChatbot');
        var askIconText = document.getElementById('askIconText');
        var askNewQuestionText = document.getElementById('askNewQuestionText');
        var backIcon = document.getElementById('backIcon');
        var playSomeVideo = document.getElementById('playSomeVideo');
        var playSomeVideoText = document.getElementById('playSomeVideoText');
        questionButton.addEventListener('click', function () {
            video.pause();
            synth.cancel();
            classVideo.setAttribute('visible','false');
            classVideo.setAttribute('position','-20 -20 -20')
            playButtonPlane.setAttribute('visible',false);
            playVideoText.setAttribute('visible',false);
            pauseVideoIcon.setAttribute('visible',false);
            pauseVideoText.setAttribute('visible',false);
            answerFromChatbot.setAttribute('visible',false);
            askIconText.setAttribute('visible',false);
            askNewQuestionText.setAttribute('visible',false);
            questionButton.setAttribute('visible',false);
            backIconText.setAttribute('value','Previous Menu');
            backIconText.setAttribute('width','2')
            backIconText.setAttribute('position','-1.25 0.9 -3')
            backIcon.setAttribute('width','0.8');
            closeChatbot.setAttribute('visible',true);
            closeChatbotText.setAttribute('visible',true);
            closeChatbot.setAttribute('position','0.75 0.9 -3');
            closeChatbotText.setAttribute('position','0.6 0.9 -3');
            playButtonPlane.setAttribute('position','-20 -20 -20');
            playVideoText.setAttribute('position','-20 -20 -20');
            askIconText.setAttribute('position','-20 -20 -20');
            askNewQuestionText.setAttribute('position','-20 -20 -20');
            questionButton.setAttribute('position','-20 -20 -20');
            pauseVideoIcon.setAttribute('position','-20 -20 -20');
            pauseVideoText.setAttribute('position','-20 -20 -20');
            playSomeVideo.setAttribute('visible',false);
            playSomeVideo.setAttribute('position','-20 -20 -20');
            playSomeVideoText.setAttribute('visible',false);
            playSomeVideoText.setAttribute('position','-20 -20 -20');
            chatbotPlane.setAttribute('visible',true);
            educatorModel.setAttribute('visible',true);
            questionToChatbot.setAttribute('visible',true);
            questionToChatbot.setAttribute('value','Listening ...');
            playingVideo = false;
            recognition.start();
            console.log('Ready to receive command.');
        });
    }
})
AFRAME.registerComponent('start-listening',{
    init: function(){
        var micicon = this.el;
        var mictext = document.getElementById('mic-text')
        micicon.addEventListener('click',function(){
            micicon.setAttribute('width',0.4);
            micicon.setAttribute('height',0.4);
            mictext.setAttribute('visible',true);
            synth.cancel();
            recognition.start();
        })
    }
})
recognition.onresult = function(event) {
    var currentWordPosition= event.results.length-1;
    word=event.results[currentWordPosition][0].transcript.trim();
    if(quizPage){
        console.log("here",word)
        selectoption();
    } else{
        answerQuestion(word);
    }
}
recognition.onspeechend = function() {
    if(quizPage){
        var micicon = document.getElementById('mic-image')
        var mictext = document.getElementById('mic-text')
        micicon.setAttribute('width',0.5);
        micicon.setAttribute('height',0.5);
        mictext.setAttribute('visible',false);
    } else{

    }
    recognition.stop();
}
function selectoption(){
    if(word.includes('option')){
        if(word.includes('A') || word.includes('one')){
            finalSelectedOption = "option1";
            submitAnswer();
        } else if(word.includes('B') || word.includes('two')){
            finalSelectedOption = "option2";
            submitAnswer();
        } else if(word.includes('C') || word.includes('three')){
            finalSelectedOption = "option3";
            submitAnswer();
        } else if(word.includes('D') || word.includes('four')){
            finalSelectedOption = "option4";
            submitAnswer();
        } else{
            speak("Please select a valid option")
        }
    } else{
        speak("Please select a valid option")
    }
}
function submitAnswer(){
    synth.cancel();
    msg="";
    var optionsArray = ["option2","option3","option4"];
    var responseText = document.getElementById('response-text');
    if(finalSelectedOption === ""){
        msg = "Please select an option"
    } else if(finalSelectedOption === "option1"){
        msg = "Congratulations! You got it right!";
        document.getElementById('option1').setAttribute('color','green');
        document.getElementById('option1').setAttribute('height',0.4);
        document.getElementById('option1').setAttribute('width',2.2);
    } else { 
        document.getElementById(finalSelectedOption).setAttribute('color','red');
        document.getElementById(finalSelectedOption).setAttribute('height',0.35);
        document.getElementById(finalSelectedOption).setAttribute('width',2);
        document.getElementById('option1').setAttribute('color','green');
        document.getElementById('option1').setAttribute('height',0.4);
        document.getElementById('option1').setAttribute('width',2.2);
        for(let i=0;i<optionsArray.length;i++){
            if(finalSelectedOption === optionsArray[i]){
                msg = explanationsArray[i];
            }
        }
    }
    responseText.setAttribute('value',msg)
    speak(msg);
}
function answerQuestion(questionText){
    console.log(questionText)
    if(questionText!=""){
        var questionToChatbot = document.getElementById('questionToChatbot');
        var answerFromChatbot = document.getElementById('answerFromChatbot');
        var askNewQuestion = document.getElementById('askNewQuestion');
        var askNewQuestionText = document.getElementById('askNewQuestionText');
        var playSomeVideo = document.getElementById('playSomeVideo');
        var playSomeVideoText = document.getElementById('playSomeVideoText');
        console.log("typing");
        questionToChatbot.setAttribute('width','3')
        questionToChatbot.setAttribute('value',questionText);
        const url="https://reactclassvr.azurewebsites.net/qnamaker/knowledgebases/138335f9-e44a-4ab2-91c8-42d28fe732f5/generateAnswer"
        const myHeaders = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'EndpointKey d4c0ceb8-5a6d-4945-aa21-30055ca52415'
        });
        const data={question:questionText}
        const result=fetch(url, {
            method: 'POST', 
            body: JSON.stringify(data), 
            headers: myHeaders
        });
        answerFromChatbot.setAttribute('value',"Fetching your answer...");
        answerFromChatbot.setAttribute('visible',true);
        result.then(res=>res.json()).then(data=>{
            console.log(data.answers[0].answer.split(".")[0]);
            speak(data.answers[0].answer.split(".")[0]);
            answerFromChatbot.setAttribute('value',data.answers[0].answer.split(".")[0]);
            answerFromChatbot.setAttribute('visible',true);
            askNewQuestion.setAttribute('visible',true);
            askNewQuestion.setAttribute('position','0 0.9 -3');
            askNewQuestionText.setAttribute('visible',true);
            askNewQuestionText.setAttribute('position','-0.35 0.9 -3');
            setTimeout(()=>{
                if(questionText.includes("props")){
                    speak("To know more about props watch the demo video!")
                    playSomeVideo.setAttribute('visible',true);
                    playSomeVideo.setAttribute('position','0 1.2 -3');
                    playSomeVideoText.setAttribute('visible',true);
                    playSomeVideoText.setAttribute('position','-0.35 1.2 -3')
                }
                
            },1500)
        }); 
    }
}
AFRAME.registerComponent('play-new-video',{
    init: function(){
        var closeButton = this.el;
        var video = document.getElementById('penguin-sledding');
        var pauseVideoIcon = document.getElementById('pauseVideoIcon')
        var playButtonPlane = document.getElementById('playVideoIcon');
        var playVideoText =document.getElementById('playVideoText');
        var pauseVideoText = document.getElementById('pauseVideoText');
        var chatbotPlane = document.getElementById('chatbotPlane');
        var classVideo = document.getElementById('classVideo')
        var educatorModel = document.getElementById("educatorModel");
        var questionToChatbot = document.getElementById('questionToChatbot');
        var answerFromChatbot = document.getElementById('answerFromChatbot');
        var closeChatbotText = document.getElementById('closeChatbotText');
        var backIconText = document.getElementById('backIconText');
        var closeChatbot =document.getElementById('closeChatbot');
        var askIconText = document.getElementById('askIconText');
        var questionButton = document.getElementById('askIcon');
        var askNewQuestion = document.getElementById('askNewQuestion');
        var askNewQuestionText = document.getElementById('askNewQuestionText');
        var backIcon = document.getElementById('backIcon');
        var playSomeVideo = document.getElementById('playSomeVideo');
        var playSomeVideoText = document.getElementById('playSomeVideoText');
        console.log("playing new video")
        closeButton.addEventListener('click', function () {
            video.pause();
            synth.cancel();
            document.getElementById('penguin-sledding').setAttribute('src',"../../assets/CourseVideos/propsDemo.mp4")
            classVideo.setAttribute('visible','true');
            classVideo.setAttribute('position','-3 10 -75')
            playButtonPlane.setAttribute('visible',true);
            playVideoText.setAttribute('visible',true);
            pauseVideoIcon.setAttribute('visible',true);
            pauseVideoText.setAttribute('visible',true);
            answerFromChatbot.setAttribute('visible',false);
            askIconText.setAttribute('visible',true);
            askNewQuestionText.setAttribute('visible',false);
            questionButton.setAttribute('visible',true);
            askNewQuestion.setAttribute('visible',false);
            askNewQuestion.setAttribute('position','-20 -20 -20');
            backIconText.setAttribute('value','Back');
            backIconText.setAttribute('width','3')
            backIconText.setAttribute('position','-1.1 0.9 -3')
            backIcon.setAttribute('width','0.6');
            closeChatbot.setAttribute('visible',false);
            closeChatbotText.setAttribute('visible',false);
            closeChatbot.setAttribute('position','-20 -20 -20');
            closeChatbotText.setAttribute('position','-20 -20 -20');
            playButtonPlane.setAttribute('position','0.2 0.9 -3');
            playVideoText.setAttribute('position','0.07 0.9 -3');
            askIconText.setAttribute('position','-0.5 0.9 -3');
            askNewQuestionText.setAttribute('position','-20 -20 -20');
            questionButton.setAttribute('position','-0.35 0.9 -3');
            pauseVideoIcon.setAttribute('position','0.85 0.9 -3');
            pauseVideoText.setAttribute('position','0.65 0.9 -3');
            chatbotPlane.setAttribute('visible',false);
            educatorModel.setAttribute('visible',false);
            questionToChatbot.setAttribute('visible',false);
            playSomeVideo.setAttribute('visible',false);
            playSomeVideo.setAttribute('position','-20 -20 -20');
            playSomeVideoText.setAttribute('visible',false);
            playSomeVideoText.setAttribute('position','-20 -20 -20');
            video.play();
        });
    }
})
AFRAME.registerComponent('close-chatbot',{
    init: function(){
        var closeButton = this.el;
        var playSomeVideo = document.getElementById('playSomeVideo');
        var playSomeVideoText = document.getElementById('playSomeVideoText');
        var video = document.getElementById('penguin-sledding');
        var pauseVideoIcon = document.getElementById('pauseVideoIcon')
        var playButtonPlane = document.getElementById('playVideoIcon');
        var playVideoText =document.getElementById('playVideoText');
        var pauseVideoText = document.getElementById('pauseVideoText');
        var chatbotPlane = document.getElementById('chatbotPlane');
        var classVideo = document.getElementById('classVideo')
        var educatorModel = document.getElementById("educatorModel");
        var questionToChatbot = document.getElementById('questionToChatbot');
        var answerFromChatbot = document.getElementById('answerFromChatbot');
        var closeChatbotText = document.getElementById('closeChatbotText');
        var backIconText = document.getElementById('backIconText');
        var closeChatbot =document.getElementById('closeChatbot');
        var askIconText = document.getElementById('askIconText');
        var questionButton = document.getElementById('askIcon');
        var askNewQuestion = document.getElementById('askNewQuestion');
        var askNewQuestionText = document.getElementById('askNewQuestionText');
        var backIcon = document.getElementById('backIcon');
        closeButton.addEventListener('click', function () {
            video.pause();
            synth.cancel();
            classVideo.setAttribute('visible','true');
            classVideo.setAttribute('position','-3 10 -75')
            playButtonPlane.setAttribute('visible',true);
            playVideoText.setAttribute('visible',true);
            pauseVideoIcon.setAttribute('visible',true);
            pauseVideoText.setAttribute('visible',true);
            answerFromChatbot.setAttribute('visible',false);
            askIconText.setAttribute('visible',true);
            askNewQuestionText.setAttribute('visible',false);
            questionButton.setAttribute('visible',true);
            askNewQuestion.setAttribute('visible',false);
            askNewQuestion.setAttribute('position','-20 -20 -20');
            backIconText.setAttribute('value','Back');
            backIconText.setAttribute('width','3')
            backIconText.setAttribute('position','-1.1 0.9 -3')
            backIcon.setAttribute('width','0.6');
            closeChatbot.setAttribute('visible',false);
            closeChatbotText.setAttribute('visible',false);
            closeChatbot.setAttribute('position','-20 -20 -20');
            closeChatbotText.setAttribute('position','-20 -20 -20');
            playButtonPlane.setAttribute('position','0.2 0.9 -3');
            playVideoText.setAttribute('position','0.07 0.9 -3');
            askIconText.setAttribute('position','-0.5 0.9 -3');
            playSomeVideo.setAttribute('visible',false);
            playSomeVideo.setAttribute('position','-20 -20 -20');
            playSomeVideoText.setAttribute('visible',false);
            playSomeVideoText.setAttribute('position','-20 -20 -20');
            askNewQuestionText.setAttribute('position','-20 -20 -20');
            questionButton.setAttribute('position','-0.35 0.9 -3');
            pauseVideoIcon.setAttribute('position','0.85 0.9 -3');
            pauseVideoText.setAttribute('position','0.65 0.9 -3');
            chatbotPlane.setAttribute('visible',false);
            educatorModel.setAttribute('visible',false);
            questionToChatbot.setAttribute('visible',false);
        });
    }
})
AFRAME.registerComponent('go-back-class',{
    init: function(){
        var backButton = this.el;
        var video = document.getElementById('penguin-sledding');
        backButton.addEventListener('click', function () {
            video.pause();
            synth.cancel();
            document.getElementById('resourse-screen').setAttribute('visible', 'true');
            document.getElementById('resourse-screen').setAttribute('position', '0 0 0');
            document.getElementById('classroom-screen').setAttribute('visible', 'false');
            document.getElementById('classroom-screen').setAttribute('position', '-20 -20 -20');
            document.getElementById('quiz-screen').setAttribute('visible', 'false');
            document.getElementById('quiz-screen').setAttribute('position', '-20 -20 -20');
        });
    }
})
