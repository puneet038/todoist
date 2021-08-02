import React,{useState} from 'react';
import Sidebar from './Sidebar';
import Task from './Task';
import '../App.css';

const Content = () => {
    const [select,setSelect] = useState("inbox");
    
    return (
        <section>
            <Sidebar select={select} setSelect={setSelect}/>
            <Task/>

        </section>
            
        
    )
}

export default Content
