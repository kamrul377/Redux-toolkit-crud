import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTodo, deleteTodo, updateTodo, viewTodo } from '../features/todoSlice'
import { Card, CardFooter, Image, Button, Input } from "@nextui-org/react";

import img from '../../public/images/img.jpg'
import { FaEye } from 'react-icons/fa';
import { MdDelete, MdModeEditOutline } from 'react-icons/md';

const Todo = () => {
  const [name, setName] = useState('');
  // const [password, setPassword] = useState('');
  const [editingId, setEditingId] = useState(null);
  const { todo } = useSelector(state => state.todo);

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleAddOrUpdate = () => {
    if (editingId) {
      dispatch(updateTodo({
        id: editingId,
        name,
        // password,
      }));
    } else {
      dispatch(addTodo({
        id: Math.floor(Math.random(100)*99),
        name,

      }));
    }
    setName('');
    // setPassword('');
    setEditingId(null);
  };

  const handleEdit = ({ id, name }) => {
    setEditingId(id);
    setName(name);
    // setPassword(password);
  };

  const handleDelete = id => {
    dispatch(deleteTodo(id));
  };
  const handleView = (id) => {
    navigate(`/${id}`)
  }

  return (
    <div className='border m-10 w-[60%] mx-auto p-3 rounded bg-zinc-200'>
      <div>
        <p className="bg-purple-50 text-zinc-900 p-3 text-xl font-bold rounded-sm">YOUR TASKS...</p>
      </div>
      <div className="input flex gap-4 justify-center items-center my-1">
        <Input className='text-xl' size='lg' radius='sm' color='primary' value={name} onChange={(e) => setName(e.target.value)} type="text" variant="faded" label="" placeholder="your tasks..." />


        <Button className='' radius='sm' variant='solid' color='primary' onClick={handleAddOrUpdate}>
          {editingId ? 'Update Todo' : 'Add Todo'}
        </Button>
      </div>

      <section className=''>
        {todo?.map(todo => (

          <div className='w-full bg-white my-1 px-4 py-2 rounded shadow-sm flex justify-between items-center border'>
            <div className="text font-bold uppercase">
              {todo.id} -
              {todo.name}
            </div>

            <div className="actions flex cursor-pointer gap-3">
              <div onClick={(e) => handleView(todo.id)} className="view bg-green-100 text-green-700 rounded p-2">
                <FaEye color='#15803d' title='view' />
              </div>

              <div onClick={() => handleEdit({ id: todo.id, name: todo.name })} className="edit bg-orange-100  rounded p-2">
                <MdModeEditOutline color='orange' title="edit" />
              </div>

              <div onClick={(e) => handleDelete(todo.id)} className="delete bg-red-100  rounded p-2">
                <MdDelete color='red' title="delete" />
              </div>

            </div>

          </div>

        ))}

      </section>
    </div>
  );
};

export default Todo;
