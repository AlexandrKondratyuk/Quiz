import React, {Component} from 'react'
import classes from './QuizCreator.css'
import Button from '../../components/UI/Button/Button'
import {createControl, validate, validateForm} from '../../form/formFramework'
import Input from '../../components/UI/Input/Input'
import Select from '../../components/UI/Select/Select'
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
        isFormValid: false,
        rightAnswerId: 1,
        formControls: createFormControl()
    };

    submitHandler = event => {
        event.preventDefault();
    };

    addQuestionHandler = () => {

    };

    createQuizHandler = (event) => {
        event.preventDefault()
    };

    changeHandler = (value, controlName) => {
        const formControls = {...this.state.formControls};
        const control = {...formControls[controlName]};

        control.touched = true;
        control.value = value;
        control.valid = validate(control.value, control.validation);

        formControls[controlName] = control;

        this.setState ({
            formControls,
            isFormValid: validateForm(formControls)
        });
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

    selectChangeHandler = event => {
        this.setState ({
            rightAnswerId: +event.target.value
        });
    };

    render() {
        const select = <Select
            label='Choose correct answer'
            value={this.state.rightAnswerId}
            onChange={this.selectChangeHandler}
            options={[
                {text:'1', value: 1},
                {text:'2', value: 2},
                {text:'3', value: 3},
                {text:'4', value: 4},
            ]}
        />;

        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Creating test</h1>

                    <form onSubmit={this.submitHandler}>

                        {this.renderInputs()}


                        { select }

                        <Button
                            type='primary'
                            onClick={this.addQuestionHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Add question
                        </Button>

                        <Button
                            type='success'
                            onClick={this.createQuizHandler}
                            disabled= {this.state.quiz.length === 0}
                        >
                            Create test
                        </Button>
                    </form>

                </div>
            </div>
        )
    }
}