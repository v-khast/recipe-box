import React, { Component } from 'react'
import { reduxForm } from 'redux-form';
import classnames from "classnames";
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import RecipeModalBody from '../../components/RecipeModalBody'
import { validateRecipeForm as validate } from "../../includes/validation";


class RecipeModalFormAdd extends Component {

    render() {

        const { currentModal, onHideModal, handleSubmit, onAddRecipe, reset } = this.props;

        const addRecipe = (values) => {
            onAddRecipe(values);
            onHideModal();
            reset();
        };

        const buttonStyles = classnames({
            "btn-raised": true,
        });

        return (
            <Modal show={currentModal === 'add'} onHide={onHideModal}>
                <form onSubmit={handleSubmit(addRecipe)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a Recipe</Modal.Title>
                    </Modal.Header>
                    <RecipeModalBody/>
                    <Modal.Footer>
                        <ButtonToolbar>
                            <Button type="submit" bsStyle="primary" className={buttonStyles}>Add Recipe</Button>
                            <Button bsStyle="default" onClick={onHideModal} className={buttonStyles}>Cancel</Button>
                        </ButtonToolbar>
                    </Modal.Footer>
                </form>
            </Modal>
        )
    }
}

export default reduxForm({
    form: 'addRecipeForm',
    shouldError: ({ props }) => {
        return props.invalid;
    },
    validate
})(RecipeModalFormAdd);