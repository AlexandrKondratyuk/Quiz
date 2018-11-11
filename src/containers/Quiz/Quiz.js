import React, {Component} from 'react'
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        answerState: null,    // { [id] : 'success'  or   'error' }
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
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState === 'success') {}
            return
        }

        const question = this.state.quiz[this.state.activeQuestion]

        if (question.rightAnswerId === answerId) {
            this.setState ({
                answerState: {[answerId] : 'success'}
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log('Finished!')
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
            window.clearTimeout(timeout);
            }, 1000)
        } else {
            this.setState({
                answerState: {[answerId] : 'error'}

            })
        }
    }

    isQuizFinished () {
        return this.state.activeQuestion + 1 === this.state.quiz.length
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
                        state={this.state.answerState}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz