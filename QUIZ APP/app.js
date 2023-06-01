const questions = [
    {
        'que': "Which of this is a markup Language?",
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a',
    },
    {
        'que': "Which year was JavaScript Launched?",
        'a': '1996',
        'b': '1995',
        'c': '1999',
        'd': 'none of the above',
        'correct': 'b',
    },
    {
        'que': "In which year python was introduced?",
        'a': '1992',
        'b': '1994',
        'c': '1991',
        'd': '2002',
        'correct': 'c',
    },
]
let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesbox = document.getElementById("quesbox");
const optionsinput = document.querySelectorAll(".options");
const loadquestion = () => {
    if (index === total) {
        return endquiz()
    }
    reset();
    const data = questions[index]
    console.log(data);
    quesbox.innerHTML = `${index + 1}) ${data.que}`;
    optionsinput[0].nextElementSibling.innerHTML = data.a;
    optionsinput[1].nextElementSibling.innerHTML = data.b;
    optionsinput[2].nextElementSibling.innerHTML = data.c;
    optionsinput[3].nextElementSibling.innerHTML = data.d;
}
const submitquiz = () => {
    const data = questions[index]
    const ans = getanswer()
    console.log(ans, data.correct)
    if (ans == data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadquestion();
    return;
}
const getanswer = () => {
    let answer;
    optionsinput.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionsinput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endquiz = () => {
    document.getElementById("box").innerHTML = `
    <h3> Thank you for playing game</h3>
    <h2> you scored ${right}  / ${total} </h2>
    `
}
loadquestion()