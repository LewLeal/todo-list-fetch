import React, {useContext, useState, useEffect} from 'react'
import {ContextTask} from '../context/ContextTask'

const TaskInput = () => {
    const { taskAdd, editItem, taskEdit} = useContext(ContextTask);

    const [title, setTitle] = useState('')

    const handleChange = e => {
        setTitle(e.target.value)
    };

    const handleSumbit = e => {
        e.preventDefault();
        if (!editItem) {
            taskAdd(title);
            setTitle('');

            const jsonql = JSON.stringify([
                { label: "make the bed", done: false },
                { label: "Walk the dog", done: false },
                { label: "Do the replits", done: false }
            ])

            fetch('https://assets.breatheco.de/apis/fake/todos/user/Lewleal', {
                method: 'PUT',
                body: jsonql,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }
                    return response.json();
                })
                .then(responseAsJson => {
                    let result = 'Tarea Agregada Satisfactoriamente'
                    console.log(result);
                })
                .catch(error => {
                    console.log('Oops error:', error);
                })
        } else {
            taskEdit(title, editItem.id);
        }
        
    };

    useEffect(() => {
        if (editItem) {
            setTitle(editItem.title);
            console.log(editItem);
        } else {
            setTitle('');
        }
    }, [editItem]);

    return (
        <form onSubmit={handleSumbit} className='form'>
            <input 
            onChange={handleChange}
            value={title}
            type='text'
            className='task-input'
            placeholder='Agrega una tarea'
            required />
        </form>
    )
}

export default TaskInput;
