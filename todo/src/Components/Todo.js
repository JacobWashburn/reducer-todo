import React from 'react';
import styled from 'styled-components';

const TodoTaskWrapper = styled.div`
  .completed {
  text-decoration: line-through;
  }
`;

const TodoTask = styled.h2`

`;

const Todo = props => {
    return (
        <TodoTaskWrapper onClick={() => {
            props.handleComplete(props.task);
        }}>
            <TodoTask className={`task${props.task.completed ? ' completed' : ''}`}>
                {props.task.item}
            </TodoTask>
        </TodoTaskWrapper>
    );
};

export default Todo;