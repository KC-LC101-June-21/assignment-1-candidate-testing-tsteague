// I'm going to rewrite this to conform to the individual assignment
// just want to challenge myself for now

const input = require('readline-sync');

let candidateName;
const questionsAndCorrectAnswers = initializeQuestions();
let question;
let correctAnswer;
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers;

// TODO 1.1a: Define candidateName // 
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
// TODO 2: modify your quiz app to ask 5 questions //
function initializeQuestions() 
{
  let qAndAMap = new Map();
  qAndAMap.set( 'Who was the first American woman in space?  ', 'Sally Ride' );
  qAndAMap.set( 'True or false: 5 kilometer == 5000 meters?  ', 'true' );
  qAndAMap.set( '(5 + 3)/2 * 10 = ?  ', '40' );
  qAndAMap.set( 'Given the array[8, \'Orbit\', \'Trajectory\', 45], what entry is at index 2?  ', 'Trajectory' );
  qAndAMap.set( 'What is the minimum crew size for the ISS?  ', '3' );

  return qAndAMap;
}

function askForName() 
{
  // TODO 1.1b: Ask for candidate's name //
  let name = input.question( "What is your name? " );
  if ( name.trim().length == 0 )
  {
    console.log( "Name required.  Exiting." );
    exit();
  }
  console.log( "Welcome, " + name + "!\n" );

  return name;
}

function askQuestion() 
{
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  if ( questionsAndCorrectAnswers.size == 0 )
  {
    console.log( "There are no questions.  Exiting." );
    exit();
  }
  console.log( "questionsAndCorrectAnswers size: " + questionsAndCorrectAnswers.size );

  let candidateAnswers = [];
  for ( let question of questionsAndCorrectAnswers.keys() )
  {
    let ans = input.question( question );

    candidateAnswers.push( ans );
  }

  //return candidateAnswers;
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade;
  

  return grade;
}

function runProgram() 
{
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);

  for ( let ans of this.candidateAnswers )
  {
    console.log( "Provided answer: " + ans );
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
