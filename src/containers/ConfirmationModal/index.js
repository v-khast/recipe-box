import React, { Component } from 'react'
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import classnames from "classnames";
import {connect} from "react-redux";
import {deleteRecipe, hideModal} from "../RecipeBox/actions";


class ConfirmationModal extends Component {

    static defaultProps = {
        title: 'Are you sure?',
        message: 'This action cannot be undone.',
        confirmText: 'Confirm',
        cancelText: 'Cancel'
    };

    confirm = () => {
        const { onHideModal, onDeleteRecipe, editing } = this.props;
        onDeleteRecipe(editing);
        onHideModal();
    };

    render() {

        const { title, message, confirmText, cancelText, onHideModal } = this.props;

        const buttonStyles = classnames({
            "btn-raised": true,
        });

        return (
            <div>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        {message}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <ButtonToolbar>
                        <Button bsStyle="danger" className={buttonStyles} onClick={this.confirm}>{confirmText}</Button>
                        <Button bsStyle="default" className={buttonStyles} onClick={onHideModal}>{cancelText}</Button>
                    </ButtonToolbar>
                </Modal.Footer>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    editing: state.recipeBox.editing,
    currentModal: state.recipeBox.currentModal
});

const mapDispatchToProps = {
    onDeleteRecipe: deleteRecipe,
    onHideModal: hideModal
};

const EnhancedComponent = connect(mapStateToProps, mapDispatchToProps)(ConfirmationModal);
export default EnhancedComponent;