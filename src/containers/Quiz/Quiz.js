import React, {Component} from 'react'
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
    state = {
        quiz: [
            {
                question : 'What color is sky?',
                rightAnswerId: 2,
                answers: [
                    {text: 'Black', id: 1},
                    {text: 'Blue', id: 2},
                    {text: 'Brown', id: 3},
                    {text: 'Grey', id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = answerId => {
        console.log('Answer id: ' + answerId);
    }

    render() {
        return (
            <div className={classes.Quiz}>

                <div className={classes.QuizWrapper}>
                    <h1> Answer the questions </h1>
                    <ActiveQuiz
                       answers={this.state.quiz[0].answers}
                       question={this.state.quiz[0].question}
                        onAnswerClick = {this.onAnswerClickHandler}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz