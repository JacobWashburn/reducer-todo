import React, {useState, useReducer} from 'react';
import styled from 'styled-components';

import {reducer, initialState} from '../Reducers/Reducer';
import TodoList from './TodoList';

const Form = styled.form`

`;

const Input = styled.input`

`;

const Button = styled.button`

`;

const TodoForm = () => {
    const [newItem, setNewItem] = useState('');
    const [todoList, dispatch] = useReducer(reducer, initialState);

    const handleChanges = e => {
        setNewItem(e.target.value);
    };

    const handleComplete = task => {
        dispatch({type: 'UPDATE_COMPLETE', payload: task});
    };

    const handleRemove = () => {
        const filterList = todoList.filter(task => task.completed !== true);
        dispatch({type: 'REMOVE_COMPLETED', payload: filterList});
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'ADD_ITEM', payload: newItem});
        setNewItem('');
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Input required type='text' name='item' onChange={handleChanges} value={newItem}/>
                <Button>Add Task</Button>
            </Form>
            < Button
                onClick={handleRemove}
            > Clear Completed Tasks </Button>
            <TodoList todoList={todoList} handleComplete={handleComplete}/>
        </div>
    );
};

export default TodoForm;