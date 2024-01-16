//universal scripts
var corporateQuestionsData = [
    {
        question: "Who is behind the operations of Admin Inc.?",
        answer: "Admin Inc. is powered by a solo developer who brings a wealth of expertise and passion to every project. As a one-person team, I ensure a personalized and dedicated approach to each task."
    },
    {
        question: "Does Admin Inc. create its own products?",
        answer: "No, Admin Inc. itself does not engage in product creation. Our focus is solely on administration and management of sub-companies and their projects."
    },
    {
        question: "Can sub-companies operate independently of Admin Inc.?",
        answer: "While sub-companies have a degree of operational freedom, they are ultimately under the administrative control of Admin Inc. They must adhere to our policies and guidelines in all their activities."
    },
];

function displayQuestionsData() {
    var questionsList = document.getElementById('questions');

    corporateQuestionsData.forEach(function(data) {
            var brendContainer = document.createElement('div');
            brendContainer.className = 'questions';
            brendContainer.innerHTML = `
            <div class="q_t ac02">
  <div class="q_t0 pad">${data.question}</div>
</div>
<div class="q_t1">
  <div class="h2 ac05 pad" style="margin:0;">${data.answer}</div>
</div>
                `;


            questionsList.appendChild(brendContainer);
    });
}

// Call the function to display data
displayQuestionsData();