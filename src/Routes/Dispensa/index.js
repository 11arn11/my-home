import React, {useState} from 'react'

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Page from '../../components/Page'

import IngredienteDispensa from './IngredienteDispensa'

import model from '../../model'

const useStyles = makeStyles(theme => ({
    List: {
      position: 'relative',
      overflow: 'auto',
      maxHeight: 600,
    }
  }));
  
export default () => {
    const classes = useStyles()
    const [editingIngredient, setEditingIngredient] = useState()
    const handleEdit = (ingredientId) => setEditingIngredient(ingredientId)
    const handleClose = () => setEditingIngredient()
    return (
        <Page title="Dispensa">
            <h1>Dispensa</h1>
            <List className={classes.List}>
                {Object.entries(model.getDispensa()).map(item => {
                    const id = item[0]
                    const qta = item[1]
                    const name = model.getIngrediente(id).name
                    return(
                        <ListItem button 
                            key={id}
                            onClick={e => handleEdit(id)}
                        >
                            <ListItemText primary={name} secondary={`${qta} g`}/>
                        </ListItem>
                    )}
                )}
            </List>
            <IngredienteDispensa 
                open={!!editingIngredient} 
                onClose={handleClose}
                editingIngredient={editingIngredient}
            />
        </Page>
    )
}
