import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form';
import classnames from "classnames";
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import RecipeModalBody from '../../components/RecipeModalBody'
import { validateRecipeForm as validate } from "../../utils/validation";
import {editRecipe, hideModal} from "../RecipeBox/actions";


class RecipeModalFormEdit extends Component {

    editRecipe = (values) => {
        const { onHideModal, onEditRecipe, recipeId, reset } = this.props;
        onEditRecipe(values, recipeId);
        onHideModal();
        reset();
    };

    render() {

        const { onHideModal, handleSubmit } = this.props;

        const buttonStyles = classnames({
            "btn-raised": true,
        });

        return (
            <form onSubmit={handleSubmit(this.editRecipe)}>
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

const mapStateToProps = state => ({
    initialValues: state.recipeBox.recipes[state.recipeBox.editing],
    recipeId: state.recipeBox.editing,
    currentModal: state.recipeBox.currentModal
});

const mapDispatchToProps = {
    onEditRecipe: editRecipe,
    onHideModal: hideModal
};

RecipeModalFormEdit = connect(mapStateToProps, mapDispatchToProps)(RecipeModalFormEdit);

export default RecipeModalFormEdit;