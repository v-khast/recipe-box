import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form';
import classnames from "classnames";
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import RecipeModalBody from '../../components/RecipeModalBody'
import { validateRecipeForm as validate } from "../../includes/validation";


class RecipeModalFormEdit extends Component {

    render() {

        const { currentModal, onHideModal, handleSubmit, onEditRecipe, recipeId, reset } = this.props;

        const editRecipe = (values) => {
            onEditRecipe(values, recipeId);
            onHideModal();
            reset();
        };

        const buttonStyles = classnames({
            "btn-raised": true,
        });

        return (
            <Modal show={currentModal === 'edit'} onHide={onHideModal}>
                <form onSubmit={handleSubmit(editRecipe)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Recipe</Modal.Title>
                    </Modal.Header>
                    <RecipeModalBody/>
                    <Modal.Footer>
                        <ButtonToolbar>
                            <Button type="submit" bsStyle="primary" className={buttonStyles}>Edit Recipe</Button>
                            <Button bsStyle="default" onClick={onHideModal} className={buttonStyles}>Cancel</Button>
                        </ButtonToolbar>
                    </Modal.Footer>
                </form>
            </Modal>
        )
    }
}

RecipeModalFormEdit = reduxForm({
    form: 'editRecipeForm',
    enableReinitialize: true,
    shouldError: ({ props }) => {
        return props.invalid;
    },
    validate
})(RecipeModalFormEdit);

RecipeModalFormEdit = connect(
    state => ({
        initialValues: state.recipeBox.recipes[state.recipeBox.editing],
        recipeId: state.recipeBox.editing
    }),
)(RecipeModalFormEdit);

export default RecipeModalFormEdit;