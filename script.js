//Quiz Score Tallying
var tally = 0,
    finalScore = 0,
    questions = [
    {
        question: "Who is the first Prime Minister of India?",
        options: ["Rajendra Prasad", "Indira Gandhi", "Jawaharlal Nehru"],
        correctAnswer: 2
    },
    {
        question: "Where is Taj Mahal situated?",
        options: ["Agra", "Delhi", "Mumbai"],
        correctAnswer: 0
    },
        {
            question: "Samsung is from which country?",
            options: ["India", "Korea", "Japan"],
            correctAnswer: 1
        }
];

//make question
function makeQuestion (counter) {
    var elem = document.querySelector("#quiz"),
        node,
        txt;

    node = document.createElement("label");
    txt = document.createTextNode(questions[counter].question);
    node.appendChild(txt);
    elem.appendChild(node);
}

//DOM Question Set
function setQuestion () {
    var elem,
        counter = 0;
    makeQuestion(counter);
}

setQuestion()

