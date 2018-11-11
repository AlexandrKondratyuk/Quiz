import React, {Component} from 'react'
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        quiz: [
            {
                question: 'Which function is used to stop a setInterval timer?',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    {text: 'clearTimer', id: 1},
                    {text: 'clearInterval', id: 2},
                    {text: 'stopInterval', id: 3},
                    {text: 'stopTimer', id: 4}
                ]
            },
            {
                question: 'Can multiple event handlers be added to a single element?',
                rightAnswerId: 1,
                id: 2,
                answers: [
                    {text: 'Yes', id: 1},
                    {text: 'No', id: 2}
                ]
            }
        ]
    }

    onAnswerClickHandler = answerId => {
        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        });
        console.log('Answer id: ' + answerId);
        console.log('activeQuestion id : ' + this.state.activeQuestion);
    }

    render() {
        return (
            <div className={classes.Quiz}>

                <div className={classes.QuizWrapper}>
                    <h1> Answer the questions </h1>
                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz