import React, {Component} from 'react'
import classes from './QuizCreator.css'
import Button from '../../components/UI/Button/Button'

export default class QuizCreator extends Component {

    submitHandler = event => {
        event.preventDefault();
    }

    addAuestionHandler = () => {

    };

    createQuizHandler = () => {

    };

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Creating test</h1>

                    <form onSubmit={this.submitHandler}>

                        <input type="text"/>
                        <hr/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>


                        <select></select>

                        <Button
                            type='primary'
                            onClick={this.addAuestionHandler}
                        >
                            Add question
                        </Button>

                        <Button
                            type='success'
                            onClick={this.createQuizHandler}
                        >
                            Create test
                        </Button>
                    </form>

                </div>
            </div>
        )
    }
}