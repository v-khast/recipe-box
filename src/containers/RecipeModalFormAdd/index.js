import React, { Component } from 'react'
import { reduxForm } from 'redux-form';
import classnames from "classnames";
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import RecipeModalBody from '../../components/RecipeModalBody'
import { validateRecipeForm as validate } from "../../utils/validation";
import { connect } from "react-redux";
import { addRecipe } from "../RecipeBox/actions";
import { hideModal } from "../ModalWrapper/actions";
import { selectCurrentModal } from "../ModalWrapper/selectors";
import { createStructuredSelector } from "reselect";


class RecipeModalFormAdd extends Component {

    addRecipe = (values) => {
        const { onHideModal, onAddRecipe, reset } = this.props;
        onAddRecipe(values);
        onHideModal();
        reset();
    };

    render() {

        const { onHideModal, handleSubmit } = this.props;

        const buttonStyles = classnames({
            "btn-raised": true,
        });

        return (
            <form onSubmit={handleSubmit(this.addRecipe)}>
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
        )
    }
}

RecipeModalFormAdd = reduxForm({
    form: 'addRecipeForm',
    shouldError: ({ props }) => {
        return props.invalid;
    },
    validate
})(RecipeModalFormAdd);

const mapStateToProps = createStructuredSelector({
    currentModal: selectCurrentModal
});

const mapDispatchToProps = {
    onAddRecipe: addRecipe,
    onHideModal: hideModal
};

RecipeModalFormAdd = connect(mapStateToProps, mapDispatchToProps)(RecipeModalFormAdd);
export default RecipeModalFormAdd;