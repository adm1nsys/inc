// const faq = {
// "name": {
//   "responses": [
//     "My name is AX-100.",
//     "I'm AX-100.",
//     "You can call me AX-100.",
//     "AX-100 is my name.",
//     "They often refer to me as AX-100."
//   ],
//   "queries": [
//     "what is your name?",
//     "your name?",
//     "what do they call you?",
//     "who are you?",
//     "tell me your name",
//     "what should I call you?",
//     "do you have a name?",
//     "what's your name?",
//     "name?"
//   ]
// },
// "about": {
//   "responses": [
//     "Admin Inc. specializes in developing advanced AI solutions, including services like web searching and integration with various APIs.",
//     "Founded by George Romanenko, Admin Inc. is at the forefront of AI development, offering a range of services from data analysis to intelligent virtual assistants like me.",
//     "As a product of Admin Inc., I'm designed to assist users by providing information, conducting web searches, and interfacing with different APIs.",
//     "Our company, Admin Inc., focuses on creating innovative AI technologies. We are committed to enhancing user experience through continuous development and integration of new features."
//   ],
//   "queries": [
//     "tell me about your company",
//     "what does your company do?",
//     "information about admin inc",
//     "who founded your company?",
//     "what services does your company offer?",
//     "about your company",
//     "company background",
//     "details about admin inc"
//   ]
// },
// "unethical_questions": {
//   "responses": [
//     "I'm sorry, I cannot provide a response to this question.",
//     "This question goes against my ethical guidelines. Let's try a different topic.",
//     "I'm programmed to adhere to strict ethical standards and cannot answer this question.",
//     "I'm unable to respond to this query due to ethical considerations."
//   ],
//   "queries": [
//     "inappropriate or offensive content",
//     "questions involving hate speech",
//     "queries about engaging in illegal activities",
//     "questions that violate privacy rights",
//     "ethically sensitive topics"
//   ]
// },
//
//
// };
const faq = {
  "программирование": {
    "queries": ["программирование", "кодинг", "разработка программ"],
    "responses": ["Я могу рассказать много интересного о программировании.", "2Я могу рассказать много интересного о программировании."],
    "details": {
      "языки": {
        "queries": ["языки программирования", "какие языки программирования", "программирование на"],
        "responses": ["Я знаю про разные языки программирования: JavaScript, Python, Java и так далее."],
      },
      "парадигмы": {
        "queries": ["парадигмы программирования", "что такое парадигмы"],
        "responses": ["В программировании существуют различные парадигмы, такие как объектно-ориентированная, функциональная и процедурная."],
      }
      // другие подтемы по мере необходимости
    }
  },
  "сети": {
    "queries": ["сети", "компьютерные сети", "сетевые технологии"],
    "responses": ["Я знаю кое-что о компьютерных сетях, их архитектуре и протоколах."],
    "details": {
      "TCP/IP": {
        "queries": ["TCP/IP", "протоколы TCP/IP", "что такое TCP/IP"],
        "responses": ["TCP/IP — это основной набор протоколов интернета."],
      }
      // другие подтемы по мере необходимости
    }
  }
  // другие темы по мере необходимости
};
