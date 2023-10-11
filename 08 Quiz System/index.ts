#!/usr/bin/env node
import inquirer from 'inquirer';

type Question = {
  question: string;
  options: string[];
  correctAnswer: number;
};

type QuizResult = {
  totalQuestions: number;
  correctAnswers: number;
};

const questions: Question[] = [
  {
    question: "What is the capital of Pakistan?",
    options: ["Paris", "Islamabad","London", "Berlin", "Madrid"],
    correctAnswer: 1,
  },
  {
    question: "Which planet is biggest Planet on universe?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 2,
  },
  {
    question: "What is the largest mountain in the world?",
    options: ["Mount Everest", "Himalayas", "Mount kilimanjaro", "K2"],
    correctAnswer: 0,
  },
];

const main = async () => {
  console.log("Welcome to the Quiz!\n");

  let correctAnswers = 0;

  for (const [index, question] of questions.entries()) {
    const answer = await Question(index + 1, question);
    if (answer === question.correctAnswer) {
      correctAnswers++;
    }
  }

  const quizResult: QuizResult = {
    totalQuestions: questions.length,
    correctAnswers: correctAnswers,
  };

  Result(quizResult);
};

const Question = async (questionNumber: number, question: Question): Promise<number> => {
  const questionPrompt = `${questionNumber}. ${question.question}`;
  const options = question.options;

  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'answer',
      message: questionPrompt,
      choices: options,
    },
  ]);

  return options.indexOf(answer.answer);
};

const Result = (quizResult: QuizResult) => {
  console.log("\nQuiz Result:");
  console.log(`Total Questions: ${quizResult.totalQuestions}`);
  console.log(`Correct Answers: ${quizResult.correctAnswers}`);
  console.log(`Incorrect Answers: ${quizResult.totalQuestions - quizResult.correctAnswers}`);
  console.log(`Percentage: ${(quizResult.correctAnswers / quizResult.totalQuestions) * 100}%`);
};

main();
