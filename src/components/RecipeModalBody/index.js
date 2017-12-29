import React, { Component } from 'react'
import Modal from 'react-bootstrap/lib/Modal'
import { Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui'


export default class RecipeModalBody extends Component {
    render() {

        const styles = {
            errorStyle: {
                color: '#f44336',
            },
            underlineStyle: {
                borderColor: '#009688',
            },
            floatingLabelFocusStyle: {
                color: '#009688',
            },
        };

        return (
            <Modal.Body>
                <div className="form-group mx-3">
                    <Field
                        name="name"
                        component={TextField}
                        hintText="Enter recipe name here"
                        floatingLabelText="Recipe Name"
                        fullWidth={true}
                        underlineFocusStyle={styles.underlineStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    />
                </div>
                <div className="form-group mx-3">
                    <Field
                        name="ingredients"
                        component={TextField}
                        hintText="Enter comma separated ingredients here"
                        floatingLabelText="Recipe Ingredients"
                        fullWidth={true}
                        multiLine={true}
                        underlineFocusStyle={styles.underlineStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    />
                </div>
            </Modal.Body>
        )
    }
}
