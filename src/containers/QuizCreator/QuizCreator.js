import React, {Component} from 'react'
import classes from './QuizCreator.css'
import Button from '../../components/UI/Button/Button'
import {createControl} from '../../form/formFramework'
import Input from '../../components/UI/Input/Input'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'

function createOptionControl(number) {
    return createControl({
        label: `Variant ${number}`,
        errorMessage: 'Value can\'t be empty',
        id: number
    }, {required: true});
}

function createFormControl() {
    return {
        question: createControl({
            label: 'Enter question',
            errorMessage: 'Question can\'t be empty'
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4)
    };
}

export default class QuizCreator extends Component {

    state = {
        quiz: [],
        formControls: createFormControl()
    };

    submitHandler = event => {
        event.preventDefault();
    };

    addAuestionHandler = () => {

    };

    createQuizHandler = () => {

    };

    changeHandler = (value, controlName) => {

    };

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];

            return (
                <Auxiliary key={controlName + index}>
                    <Input
                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        shouldValidate={!!control.validation}
                        touched={control.touched}
                        errorMessage={control.errorMessage}
                        onChange={event => this.changeHandler(event.target.value, controlName)}

                    />

                    {index === 0 ? <hr/> : null}
                </Auxiliary>

            );
        });
    }

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Creating test</h1>

                    <form onSubmit={this.submitHandler}>

                        {this.renderInputs()}


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