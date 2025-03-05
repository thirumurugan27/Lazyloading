import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { FaEdit } from "react-icons/fa";

export const Todolist = () => {

    const [items, setItems] = useState([
        {id:1,name:"Patric",class:"12-C",a:true},
        {id:2,name:"Spongbob",class:"12-A",a:true},
        {id:3,name:"Larry",class:"12-A",a:false},
        {id:4,name:"Planktom",class:"12-D",a:true}
    ])

    let [newItem, setNewItem] = useState("")

    function handleDelete(id) {
        setItems(items.filter(item => item.id !== id));

    }

    function handleChecked(id) {
        let newListItem = items.map((item) => {
            return (
                item.id === id ? {...item, a:!item.a} : item
            )
        });
        setItems(newListItem); // Update the state with the new list
    }

    function handleAdd()
    {
        setItems([...items,{id:items.length+1,name:newItem,a:false}])
    }

    return (
        <main>
            <h1>TodoList</h1>
            
            <ul>
                <li key={123456789}>
                    <input type="text" placeholder='Enter New' value={newItem} onChange={(e) => setNewItem(e.target.value)} />
                    <button onClick={()=>handleAdd()}>Add</button>
                </li>
                
                {items.map((item) => {
                    return (
                        <li key={item.id}>
                            <input type="checkbox" checked={item.a} onChange={() => handleChecked(item.id)} className='checkbox'/>
                            <label>{item.name}</label>
                            {/* <FaEdit className='edit' /> */}
                            <FaTrashAlt className='deletebutton' onClick={() => handleDelete(item.id)} role='button' />
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default Todolist;