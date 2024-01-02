
import React, { Component } from "react";
import '../styles/Quiz.css'

class QuizComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 1,
      questions: [
        {
          text: "Which is the only mammal that can jump?",
          options: ["Dog", "Elephant", "Goat", "Lion"],
          correctAnswerIndex: 0,
        },
      ],
    };
  }

  handleQuit = () => {
    this.props.onQuitClick();
  };

  handleOptionClick = (index) => {
    this.setState({ selectedOption: index });
  };

  render() {
    const { currentQuestion, questions} = this.state;

    const currentQuestionData = questions[currentQuestion - 1];

    return (
      <div className="flex">
        <div className="quiz-container">
          <h2>Question</h2>
          <h4>{`${currentQuestion} of 15`}</h4>
          <p className="question">{currentQuestionData.text}</p>
          <div className="options-container">
            {currentQuestionData.options.map((option, index) => (
              <div
                key={index}
                className="option-div flex"
              >
                {option}
              </div>
            ))}
          </div>

          <div className="button-container">
            <button className="previous-btn">Previous</button>
            <button className="next-btn">Next</button>
            <button className="quit-btn" onClick={this.handleQuit}>
              Quit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizComponent;
