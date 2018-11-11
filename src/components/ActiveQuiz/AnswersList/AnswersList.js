import React from 'react'
import classes from './AnswersList.css'
import AnswerItem from '../AnswerItem/AnswerItem'

const AnswersList = props => (
    <ul className={classes.AnswersList}>
        <ul> {props.answers.map((answer, index) => {
            return (
                <AnswerItem
                    key={index}
                    answer={answer}
                />
            )
        })} </ul>
    </ul>
)

export default AnswersList