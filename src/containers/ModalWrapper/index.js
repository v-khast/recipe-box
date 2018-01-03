import React, { Component } from 'react'
import Modal from 'react-bootstrap/lib/Modal'
import { connect } from "react-redux";
import { hideModal } from "./actions";
import RecipeModalFormAdd from "../RecipeModalFormAdd"
import RecipeModalFormEdit from "../RecipeModalFormEdit"
import ConfirmationModal from "../ConfirmationModal"
import { selectCurrentModal } from './selectors'
import { createStructuredSelector } from "reselect";


class ModalWrapper extends Component {

    getContent = () => {
        const { currentModal } = this.props;
        switch (currentModal) {
            case 'add':
                return <RecipeModalFormAdd />;
            case 'edit':
                return <RecipeModalFormEdit />;
            case 'confirm':
                return <ConfirmationModal />;
            default:
                return null;
        }
    };

    render() {
        const { currentModal, onHideModal } = this.props;
        return (
            <Modal show={currentModal !== undefined} onHide={onHideModal}>
                {this.getContent()}
            </Modal>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    currentModal: selectCurrentModal
});

const mapDispatchToProps = {
    onHideModal: hideModal
};

const EnhancedComponent = connect(mapStateToProps, mapDispatchToProps)(ModalWrapper);
export default EnhancedComponent;