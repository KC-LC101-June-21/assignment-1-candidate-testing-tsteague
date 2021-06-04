// I'm going to rewrite this to conform to the individual assignment
// just want to challenge myself for now

const input = require('readline-sync');

let candidateName;
const questionsAndCorrectAnswers = initializeQuestions();
let question;
let correctAnswer;
let candidateAnswer;
let questions = questionsAndCorrectAnswers.keys();
let correctAnswers = questionsAndCorrectAnswers.values();
let candidateAnswers = [];

// TODO 1.1a: Define candidateName // 
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
// TODO 2: modify your quiz app to ask 5 questions //
function initializeQuestions() 
{
  let qAndAMap = new Map();
  qAndAMap.set( 'Who was the first American woman in space?', 'Sally Ride' );
  qAndAMap.set( 'True or false: 5 kilometer == 5000 meters?', 'true' );
  qAndAMap.set( '(5 + 3)/2 * 10 = ?', '40' );
  qAndAMap.set( 'Given the array[8, \'Orbit\', \'Trajectory\', 45], what entry is at index 2?', 'Trajectory' );
  qAndAMap.set( 'What is the minimum crew size for the ISS?', '3' );

  return qAndAMap;
}

function askForName() 
{
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question( "\n\nWhat is your name? " );
  if ( candidateName.trim().length == 0 )
  {
    console.log( "Name required.  Exiting." );
    exit();
  }
  console.log( "Welcome, " + candidateName + "!\n\n" );
}

function askQuestion() 
{
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  if ( questionsAndCorrectAnswers.size == 0 )
  {
    console.log( "There are no questions.  Exiting.\n" );
    exit();
  }

  for ( let question of questionsAndCorrectAnswers.keys() )
  {
    let ans = input.question( question );

    candidateAnswers.push( ans );
  }
}

function gradeQuiz(candidateAnswers) 
{
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade = 0;
  let counter = 0;
  console.log( "\n\n" );
  for ( question of questionsAndCorrectAnswers.keys() )
  {
    correctAnswer = questionsAndCorrectAnswers.get( question );
    candidateAnswer = candidateAnswers[counter];

    counter++;
    console.log( "Question #" + counter + ": " + question );
    if ( typeof candidateAnswer === 'undefined' || candidateAnswer.trim().length == 0 )
    {
      console.log( "Your answer:  Unanswered\n\n" );
    }
    else if ( candidateAnswer.trim().toLowerCase() === correctAnswer.toLowerCase() )
    {
      grade++;
      console.log( "Correct answer!  " + correctAnswer + "\n\n" );
    }
    else
    {
      console.log( "Incorrect answer.\nYour answer: " + candidateAnswer + 
        "\nCorrect answer: " + correctAnswer + "\n\n" );
    }
  }
  grade = grade * 20;

  return grade;
}

function runProgram() 
{
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  let grade = gradeQuiz(this.candidateAnswers);

  if ( grade >= 60 )
  {
    console.log( "\nYou scored " + grade + "%.  You passed!" );
  }
  else
  {
    console.log( "\nYou scored " + grade + "%.  You failed!" );
  }
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
