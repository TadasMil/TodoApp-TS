import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core';

interface Props {
    item: {id: string, text: string, name: string, date: string};
    onDeleteToDo: (todoId: string) => void;
};

export const TodoItem: React.FC<Props> = (props) => {
    return (
        <>
            <Card>
                    <CardContent>
                        <Typography  color="textSecondary">
                        Author: {props.item.name}
                        </Typography>
                        <Typography variant="h5" component="h2">
                        To do: {props.item.text}
                        </Typography>
                        <Typography  color="textSecondary">
                        Complete until: {props.item.date}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary"size="small" onClick={() => props.onDeleteToDo(props.item.id)}>Delete</Button>
                    </CardActions>
            </Card>
        </>
    )
}