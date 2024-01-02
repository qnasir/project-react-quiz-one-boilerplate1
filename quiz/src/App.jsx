
import React, { Component } from "react";
import HomeComponent from "./components/HomeComponent";
import QuizComponent from "./components/QuizComponent";
import ScoreComponent from "./components/ScoreComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home",
    };
  }

  navigateToQuiz = () => {
    this.setState({ currentPage: "quiz" });
  };

  navigateToHome = () => {
    this.setState({ currentPage: "home" });
  };

  navigateToScore = () => {
    this.setState({ currentPage: "score" });
  };

  render() {
    const { currentPage } = this.state;

    return (
      <div>
        {currentPage === "home" && (
          <HomeComponent onPlayClick={this.navigateToQuiz} />
        )}
        {currentPage === "quiz" && (
          <QuizComponent onQuitClick={this.navigateToScore} />
        )}
        {currentPage === "score" && (
          <ScoreComponent
            onPlayAgainClick={this.navigateToQuiz}
            onBackToHomeClick={this.navigateToHome}
          />
        )}
      </div>
    );
  }
}

export default App;
