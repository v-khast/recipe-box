import React, { Component } from 'react'
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import classnames from "classnames";


export default class ConfirmationModal extends Component {

    static defaultProps = {
        title: 'Are you sure?',
        message: 'This action cannot be undone.',
        confirmText: 'Confirm',
        cancelText: 'Cancel'
    };

    render() {

        const { title, message, confirmText, cancelText, confirmHandle, onHideModal, currentModal } = this.props;

        const confirm = () => {
            confirmHandle();
            onHideModal();
        };

        const buttonStyles = classnames({
            "btn-raised": true,
        });

        return (
            <Modal show={currentModal === 'confirm'} onHide={onHideModal}>
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
                            <Button bsStyle="danger" className={buttonStyles} onClick={confirm}>{confirmText}</Button>
                            <Button bsStyle="default" className={buttonStyles} onClick={onHideModal}>{cancelText}</Button>
                        </ButtonToolbar>
                    </Modal.Footer>
            </Modal>
        )
    }
}
