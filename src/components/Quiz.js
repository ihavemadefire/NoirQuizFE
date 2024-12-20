import React, { useState, useEffect } from "react";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(true);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/questions/")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching questions:", err);
        setFeedback("Failed to load quiz questions.");
        setLoading(false);
      });
  }, []);

  const handleSubmit = () => {
    const correctAnswer = questions[currentQuestionIndex]?.answer;
    if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setFeedback("Correct!");
      handleNextQuestion(); // Move to the next question after a correct answer
    } else {
      setFeedback("Incorrect. Try again!");
    }
  };

  const handleNextQuestion = () => {
    setUserAnswer(""); // Clear the input
    setFeedback(""); // Clear feedback
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to the next question
    } else {
      setQuizCompleted(true); // Mark the quiz as completed
    }
  };

  if (loading) {
    return <p>Loading questions...</p>;
  }

  if (quizCompleted) {
    return <p>Congratulations! You’ve completed the quiz!</p>;
  }

  if (questions.length === 0) {
    return <p>No quiz questions available.</p>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h1>Film Noir Quiz</h1>
      <div>
        <h2>{currentQuestion?.question}</h2>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Your answer"
        />
        <button onClick={handleSubmit}>Submit</button>
        {feedback && <p>{feedback}</p>}
      </div>
    </div>
  );
}

export default Quiz;
