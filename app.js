var a= document.getElementById("quiz");
var b= document.getElementById("st");


function display(){
    a.className +=" dis";
    b.className +=" ss";
   
    
}
var questions=[
    {
        ques:"who was the first President of the Constitution Assembly of Pakistan?",
        corect:"QUAID-E-AZAM",
        opt:["QUADI-E-AZAM" ,"ALLAMA_IQBAL","LIAQUAT_ALI_KHAN","SARDAR_ABDUR_RAB"]
    },
    {
        ques:"What official name was given to Pakistan in 1956 constitution?",
        corect:"Islamic Republic of Pakistan",
        opt:["Republic of Pakistan" ,"Islamic Republic of Pakistan","United States of Pakistan","Islamic Pakistan"]
    },
    {
        ques:"who was the first President of the Constitution Assembly of Pakistan?",
        corect:"9",
        opt:["9" ,"7","5","4"]
    },
    {
        ques:"Who was the Prime Minister of Pakistan during enforcement of first constitution?",
        corect:"Choudhry Mohammad Ali",
        opt:["Choudhry Mohammad Ali" ,"Ibrahim Ismail Chundrigar","Khwaja Nazim Uddin","Mohammad Ali Bogra"]
    },
    {
        ques:"What is the other name of Mohammad Ali Bogra Formula?",
        corect:"QUAID-E-AZAM",
        opt:["Pakistan Report" ,"New Law of Pakistan","Third Report","Third Report"]
    },
    {
        ques:"Hazrat Usman khilafat period was _______?",
        corect:"12 Years",
        opt:["2 Years" ,"11 Years","12 Years","10 Years"]
    },
    {
        ques:"Most of Hafiz Quran were martyred in which battle?",
        corect:"Yamama",
        opt:["Uhud" ,"Yamama","	Khyber","Badr"]
    },
    {
        ques:"Who was the eldest daughter of Hazrat Muhammad (SAW)?",
        corect:"Hazrat bibi Zainab (R.A)",
        opt:["	Hazrat bibi Zainab (R.A)" ,"Hazrat bibi Ruqayyah (R.A)","Hazrat bibi Umm Kulthum (R.A)","Hazrat bibi Fatima (R.A)"]
    },
    {
        ques:"Serial no of Surah Yasin w.r.t Surahs in Quran is __________?",
        corect:"36th",
        opt:["32th" ,"36th","38th","34th"]
    },
    {
        ques:"Namaz-e-Khasoof is offered at the time of __________ ?",
        corect:"Lunar eclipse",
        opt:["Solar eclipse" ,"heavy rain"," earthquake","Lunar eclipse"]
    }
]

var quesNo=document.getElementById('questionNo');
var ansParent=document.getElementById('Answers');
var questionShow=document.getElementById('dummyquestion');
var score= document.getElementById('marks');
var percentage=document.getElementById('percentage');
var indexNum=0;
var marks=0;
function renderQuestion(){
    var currentQue=questions[indexNum];
    quesNo.innerHTML="QUESTION:" + (indexNum+1)+ "/" + questions.length;
    questionShow.innerHTML=currentQue.ques;
    ansParent.innerHTML=" ";
    for(var i=0;i<currentQue.opt.length;i++){
        ansParent.innerHTML+= `<div class="col-md-6 py-2 ">
        <button onclick="checkQuestion('${currentQue.opt[i]}','${currentQue.corect}')">${currentQue.opt[i]}</button>
    </div>`;
    }
}
renderQuestion();
function checkQuestion(a,b){
    nextQuestion();
    if(a==b){
        marks++;
        score.innerHTML=marks;
        percentage.innerHTML=(marks/10)*100 + '%';
    }
}


function nextQuestion(){

    indexNum++;
    if(indexNum==questions.length){
        var display1=document.getElementById('main');
            display1.style.display +=" none";
        }
    renderQuestion();
}

// var question1=
// var question2=
// var question3=
// var question4=
// var question5=
// var question6=
// var question7=
// var question8=
// var question9=
// var question10=