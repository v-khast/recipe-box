import React, { Component } from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getRecipeBox } from './selectors'
import { deleteRecipe, addRecipe, editRecipe, showModal, hideModal } from './actions'

import Accordion from 'react-bootstrap/lib/Accordion'
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Alert from 'react-bootstrap/lib/Alert'

import RecipeModalFormAdd from "../RecipeModalFormAdd"
import RecipeModalFormEdit from "../RecipeModalFormEdit"
import ConfirmationModal from "../../components/ConfirmationModal";

import {List, ListItem} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export class RecipeBox extends Component {

    render() {

        const { recipeBox: { recipes, currentModal, editing },
            onDeleteRecipe,
            onShowModal,
            onHideModal,
            onAddRecipe,
            onEditRecipe
        } = this.props;

        const buttonStyles = classnames({
          "btn-raised": true,
        });

        const renderAccordion = () => {
            return (
                <Accordion>
                    {recipes.map((recipe, index)=> {
                        return (
                            <Panel header={recipe.name} eventKey={index} key={index}>
                                <List>
                                    {typeof recipe.ingredients === 'string' ?
                                        recipe.ingredients
                                            .split(",")
                                            .map((ingredient, index) => {
                                                return (
                                                    <ListItem key={index} primaryText={ingredient.trim()} />
                                                )}) : null
                                    }
                                </List>
                                <ButtonToolbar>
                                    <Button bsStyle="danger" className={buttonStyles}
                                            onClick={() => onShowModal('confirm', index)}>
                                        Delete
                                    </Button>
                                    <Button bsStyle="default" className={buttonStyles}
                                            onClick={() => onShowModal('edit', index)}>
                                        Edit
                                    </Button>
                                </ButtonToolbar>
                            </Panel>
                        )
                    })}
                </Accordion>
            )
        };

        return (
            <MuiThemeProvider>
                <div className="container">
                    {recipes.length > 0 ?
                        renderAccordion() :
                        <Alert bsStyle="info">
                            <strong>There is no recipes yet.</strong> Add a recipe by pressing "Add New" button below.
                        </Alert>}
                    <RecipeModalFormAdd
                        currentModal={currentModal}
                        onHideModal={onHideModal}
                        onAddRecipe={onAddRecipe}
                    />
                    <RecipeModalFormEdit
                        currentModal={currentModal}
                        onHideModal={onHideModal}
                        onEditRecipe={onEditRecipe}
                    />
                    <ConfirmationModal
                        currentModal={currentModal}
                        onHideModal={onHideModal}
                        confirmHandle={() => onDeleteRecipe(editing)}
                    />
                    <Button bsStyle="primary" className={buttonStyles} onClick={() => onShowModal('add')} >Add New</Button>
                </div>
            </MuiThemeProvider>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    recipeBox: getRecipeBox(),
});

const mapDispatchToProps = {
    onAddRecipe: addRecipe,
    onEditRecipe: editRecipe,
    onDeleteRecipe: deleteRecipe,
    onShowModal: showModal,
    onHideModal: hideModal
};

const EnhancedComponent = connect(mapStateToProps, mapDispatchToProps)(RecipeBox);
export default EnhancedComponent;