const input = require('readline-sync');

const questionsAndAnswers = (function () {
  let qAndAMap = new Map();
  qAndAMap.set( 'Who was the first American woman in space? ', 'Sally Ride' );
  qAndAMap.set( 'True or false: 5 kilometer == 5000 meters? ', 'true' );
  qAndAMap.set( '(5 + 3)/2 * 10 = ? ', '40' );
  qAndAMap.set( 'Given the array[8, \'Orbit\', \'Trajectory\', 45], what entry is at index 2? ', 'Trajectory' );
  qAndAMap.set( 'What is the minimum crew size for the ISS? ', '3' );

  return qAndAMap;
})();

let candidateName = "Participant";
let questions = ['Who was the first American woman in space? ', 'True or false: 5 kilometer == 5000 meters? ',
  '(5 + 3)/2 * 10 = ? ', 'Given the array[8, \'Orbit\', \'Trajectory\', 45], what entry is at index 2? ',
  'What is the minimum crew size for the ISS? '];
let correctAnswers = [ 'Sally Ride', 'true', '40', 'Trajectory', '3'];
let candidateAnswer = "sally ride";
let question = "Who was the first American woman in space?";
let correctAnswer = "Sally Ride";
let candidateAnswers = [ 'Sally Ride', 'true', '40', 'Trajectory', '3'];

// TODO 1.1a: Define candidateName // 
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
// TODO 2: modify your quiz app to ask 5 questions //

function askForName() 
{
  // TODO 1.1b: Ask for candidate's name //
  let userName = "";
  while ( candidateName.trim().length === 0 || candidateName.trim() === "Participant" )
  {
    userName = input.question( "\nWhat is your name? " );
    if ( userName.trim().length > 0 )
    {
      candidateName = userName.trim();
    }
  }
  console.log( "Welcome, " + candidateName + "!\n\n" );
}

function askQuestion() 
{
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  if ( questionsAndAnswers.size == 0 )
  {
    console.log( "There are no questions.\n" );
  }
  else
  {
    questions = Array.from( questionsAndAnswers.keys() );
    correctAnswers = questionsAndAnswers.values();

    for ( question of questions )
    {
      let ans = input.question( question );

      candidateAnswers.push( ans.toLowerCase().trim() );
      if ( candidateAnswers.length > 5 )
      {
        candidateAnswers.shift();
      }
    }
  }
}

function gradeQuiz(candidateAnswers) 
{
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade = 0;
  let counter = 0;
  
  console.log( `\nCandidate Name: ${candidateName}` );
  for ( question of questionsAndAnswers.keys() )
  {
    correctAnswer = questionsAndAnswers.get( question );
    candidateAnswer = candidateAnswers[counter];

    counter++;
    console.log( `${counter}) ${question}` );
    if ( typeof candidateAnswer === 'undefined' || candidateAnswer.trim().length == 0 )
    {
      console.log( "Your Answer:  Unanswered" );
    }
    else
    {
      console.log( `Your Answer: ${candidateAnswer}`  );
    }

    console.log( `Correct answer:  ${correctAnswer}\n` );
    if ( typeof candidateAnswer !== 'undefined' && candidateAnswer.trim().toLowerCase() === correctAnswer.toLowerCase() )
    {
      grade++;
    }
  }

  return grade;
}

function runProgram() 
{
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  let grade = gradeQuiz(this.candidateAnswers);

  console.log( `>>> Overall Grade: ${grade * 20}% (${grade} of 5 responses correct) <<<` );
  if ( grade >= 60 )
  {
    console.log( ">>> Status: PASSED <<<" );
  }
  else
  {
    console.log( ">>> Status: FAILED <<<" );
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
