document.addEventListener('DOMContentLoaded', function() {

let questionIndex = 0;
let questions = [];
let question = document.getElementById('question');
let option = document.getElementById('option');
let labelOption = document.querySelectorAll('label');
let btnNext = document.getElementById('btnNext')

// ngambil question dari json
let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if(this.readyState === 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);
        questions = data.question;
        showQuestion(questionIndex);
    };
}

xhttp.open('GET', 'quiz.json', true);
xhttp.send()

// menampilkan pertanyaan dan pilihan
function showQuestion(index) {
    let questionData = questions[index];

    // menampilkan pertanyaan
    question.textContent = questionData.question;

    // menghapus pilihan sebelumnya jika ada
    option.innerHTML = '';

    // menampilkan pilihan
    questionData.option.forEach(function(option, optionIndex) {
        let radioInput = document.querySelectorAll('input[type="radio"]');
        radioInput.forEach(function(radioInput) {
            radioInput.checked = false;
        });
    })
    
    questionData.option.forEach(function(option, optionIndex) {
        if(labelOption[optionIndex]) {
            labelOption[optionIndex].textContent = option;
        }
    });
}

// memeriksa jawaban

function checkAnswer(optionIndex) {
    let questionData = questions[questionIndex];
    if (optionIndex === questionData.answer) {
        alert('jawaban benar');
    } else {
        alert('jawaban salah');
    }
}

// pindah pertanyaan 

questionIndex++;
if(questionIndex < questions.length) {
        showQuestion(questionIndex);
} else {
    alert('quiz selesai');
}

// menampilkan pertanyaan selanjutnya
btnNext.addEventListener('click', function() {
    let selectOption = document.querySelector('input[type="radio":]checked');
    if(selectOption) {
        checkAnswer(parseInt(selectOption.value));
    }else {
        alert('pilih salah satu jawaban');
    }
})

})

// function startQuiz(data) {
//     let questionList = data.questionList;
//     let questionIndex = 0;
// }

// function displayQuestion() {
//     question = questionList[questionIndex];
// };

// function nextQuestion() {
//     questionIndex++;
//     if(questionIndex < questionList.length) {
//         displayQuestion();
//     } else {
//         questionContainer.innerHTML = '<p>Quiz completed!</p>';
//     }
// };

// btnNext.addEventListener('click', nextQuestion);

// displayQuestion();
