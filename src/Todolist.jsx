import React from 'react'

function Todolist(props) {
    return (
        <div className='to-do-list'>

        <button onClick={()=>{

            props.onSelect(props.id)



        }}>x</button>

        <li> {props.text}</li>        
            
        </div>
    )
}

export default Todolist
