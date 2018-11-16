import React, {Component} from 'react'
import classes from './QuizList.css'
import {NavLink} from "react-router-dom"
import axios from 'axios'


export default class QuizList extends Component {

    renderQuizes() {
        return [1, 2, 3].map((quiz, index) => {
            return (
                <li
                    key={index}
                >
                    <NavLink to={'/quiz/' + quiz}>
                        Test {quiz}
                    </NavLink>
                </li>
            )
        });
    }

    componentDidMount() {
        axios.get('https://react-quiz-8cba8.firebaseio.com/quiz.json').then(response => {
            console.log(response);
        })
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>List of tests</h1>

                    <ul>
                        {this.renderQuizes()}
                    </ul>
                </div>
                <h1>Quiz List</h1>
            </div>
        )
    }
}