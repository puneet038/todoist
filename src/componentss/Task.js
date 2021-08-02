import React,{useState} from 'react'
import '../App.css';
const Addtask=({onCancel, onAddChange})=>
{
    const[input, setInput]=useState("");
    const[date,setDate]=useState(null);
    return(
        <>
          <div className="add_content">
                <input value={input} onChange={(e)=>setInput(e.target.value)}/>
                <div className="add_container">
                <div className="btns">
                 <button className="add_btn" onClick={()=>{onAddChange(input,date);
                                                             onCancel()}}>add</button>
                 <button className="cancel_btn" onClick={onCancel}>cancel</button>
                </div>
                <div className="icon_cont">
                    <input type="Date" value={date} onChange={(day)=>setDate(day.target.value)}/>
                </div>

                </div>
            </div>
        </>
    )
}

const Task = () => {
    const[task,setTask]=useState(false);
    const[tasks, setTasks]=useState([{
        Text:'',
        date:''
    }]);
    const addnewtask=(text,date)=>
    {
        const newtaskitem={Text:text,date:date};
        setTasks(prev=>[...prev,newtaskitem]);
    }
    return (
        <>
        <div className="task" onClick={()=>setTask(true)}>
            <div>
                <h1>inbox</h1>
                <span className="plus">+</span>
                <span className="add_task">Add</span>
            </div>
            {task===true?<Addtask onAddChange={addnewtask} onCancel={()=>setTask('false')}/>:" "}
            {
          tasks.length>0 ? tasks.map(val=><p>{val.Text} <span>{val.date}</span></p> ) :" "
}

        </div>
       
       </>
    );
}

export default Task
