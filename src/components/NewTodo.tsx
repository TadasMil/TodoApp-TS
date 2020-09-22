import React, { useRef } from 'react'
import Button from '@material-ui/core/Button';
import {Grid, Box, Input, makeStyles} from '@material-ui/core';

interface Props {
    onAddToDo: (text: string, name: string, date: string) => void;
}

const useStyles = makeStyles(()=> ({
    input: {
       margin: '20px 0',
    },
    button: {
        margin: '10px 0'
    }
}));

export const NewTodo: React.FC<Props> = (props) => {
    const classes = useStyles();
    let textInputRef = useRef<HTMLInputElement>(null);
    const nameInputRef = useRef<HTMLInputElement>(null);
    const dateInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        let text = textInputRef.current!.value;
        const name = nameInputRef.current!.value;
        const date = dateInputRef.current!.value;
        
        props.onAddToDo(text, name, date);
    }

    return (
       <form onSubmit={todoSubmitHandler}>
               <Grid container direction='column'>
                    <Box display='flex' flexDirection='column' className={classes.input}>
                        <label>New to do item:</label>
                        <Input type='text' inputRef={textInputRef}></Input>
                    </Box>
                    <Box display='flex' flexDirection='column' className={classes.input}>
                        <label>Author:</label>
                        <Input type='text' inputRef={nameInputRef}></Input>
                    </Box>
                    <Box display='flex' flexDirection='column' className={classes.input}>
                        <label htmlFor="date">Date to complete:</label>
                        <Input type='date' inputRef={dateInputRef}></Input>
                    </Box>
               </Grid>
               <Button className={classes.button} type='submit' variant="contained" color="primary">Submit</Button>
       </form>
    )
}
