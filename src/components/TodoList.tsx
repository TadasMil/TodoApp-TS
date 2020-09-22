import React from 'react'
import {Grid, makeStyles} from '@material-ui/core'
import { TodoItem } from './TodoItem'

interface Props {
    items: {id: string, text: string, name: string, date: string}[];
    onDeleteToDo: (todoId: string) => void;
};

const useStyles = makeStyles(()=> ({
   cards: {
       margin: '10px 0'
   }
}));


export const TodoList: React.FC<Props> = (props) => {
    const classes = useStyles();
    return (
       <Grid className={classes.cards} container spacing={2} justify='space-evenly'>
           {props.items.map(item => {
               return (
                <Grid key={item.id} item xs={11} sm={5}>
                  <TodoItem item={item} onDeleteToDo={props.onDeleteToDo}/>
                </Grid>
               )
           })}
       </Grid>
    )
}
