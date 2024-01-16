const quizQuestions = [
    {
        question: "Ce tara a castigat campionatul mondial de fotbal din 2022?",
        opt1: "Brazilia",
        opt2: "Romania",
        opt3: "Franta",
        opt4: "Argentina",
        correct: "opt4",
    },
    {
        question: "Care este capitala Belgiei?",
        opt1: "Bucuresti",
        opt2: "Bruxelles",
        opt3: "Berlin",
        opt4: "Paris",
        correct: "opt2",
    },
    {
        question: "In ce an a aderat Romania la UE?",
        opt1: "2007",
        opt2: "2004",
        opt3: "1999",
        opt4: "2014",
        correct: "opt1",
    },
    {
        question: "Care este tara cu cei mai multi locuitori?",
        opt1: "India",
        opt2: "China",
        opt3: "SUA",
        opt4: "Pakistan",
        correct: "opt2",
    },
];
let question_number_element = document.getElementById("question-number");
let question_txt_element = document.getElementById("question-txt");
let option_1_element = document.getElementById("option1");
let option_2_element = document.getElementById("option2");
let option_3_element = document.getElementById("option3");
let option_4_element = document.getElementById("option4");
let next_button = document.getElementById("next-button");
let current_question_number=0;
let score=0;
/**
 * A function to show question and options on html page.
 */
function showQuestion(){
    //uncheck all the option seleceted
    document.querySelectorAll("input[name = opt]").forEach(option=> option.checked=false)
    
    //set questions and options from array
    question_number_element.innerHTML = (current_question_number+1) + ". ";
    question_txt_element.innerHTML = quizQuestions[current_question_number].question;
    option_1_element.innerHTML = quizQuestions[current_question_number].opt1;
    option_2_element.innerHTML = quizQuestions[current_question_number].opt2;
    option_3_element.innerHTML= quizQuestions[current_question_number].opt3;
    option_4_element.innerHTML= quizQuestions[current_question_number].opt4;
}

/**
 * Handling Event listner on button click
 */
next_button.addEventListener('click',()=>{
    let optionIdSelected = document.querySelector('input[name = opt]:checked');
    if(optionIdSelected==null)
    {
        alert("Please select one option");
    }else{

        let option_correct = quizQuestions[current_question_number].correct;
        if(optionIdSelected.id==option_correct){
            score++;        
        }
        current_question_number ++;
        if(current_question_number>=quizQuestions.length){
            // show final answer
            current_question_number = 0;
            localStorage.setItem("score", score);
            location.href = "./resultPage.html";
    
        }else{
            //show next question
            showQuestion();
        }
    }
});

showQuestion();