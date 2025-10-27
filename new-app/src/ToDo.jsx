import React, {useState} from "react";

function ToDo(){
    const [tasks, setTasks] = useState(["Eat BreakFast", "Take a Shower", "Walk a Dog"])
    const[newTask, setNewTask] = useState();

    function ChangeInput(e){
        setNewTask(e.target.value);
    }
    function addTask(){
        if(newTask.trim() !== "")
            setTasks(t => [...t, newTask]);
            setNewTask("");
    }
    function deleteTask(index){
        const updatedTask = tasks.filter((__, i) => i !== index)
        setTasks(updatedTask)
    }
    function moveTaskUp(index){
        if(index > 0){
        const updatedTask = [...tasks];
        [updatedTask[index],updatedTask[index-1]] = [updatedTask[index-1],updatedTask[index]]
        setTasks(updatedTask)
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length -1){
        const updatedTask = [...tasks];
        [updatedTask[index],updatedTask[index+1]] = [updatedTask[index+1],updatedTask[index]]
        setTasks(updatedTask)
        }
    }

    return(
        <div className="to-do-list">
            <h1>TO_DO_LIST</h1>
            <div>
                <input type="text"
                        placeholder="Enter a task..."
                        value={newTask}
                        onChange={ChangeInput} />
            </div>
            <button 
            className="add-button"
            onClick={addTask}>
                Add
            </button>
            <ol>
                {tasks.map((task,index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button
                    className="delete-btn"
                    onClick={() => deleteTask(index)}>Delete</button>
                    <button
                    className="move-btn"
                    onClick={() => moveTaskUp(index)}>☝️</button>
                    <button
                    className="move-btn"
                    onClick={() => moveTaskDown(index)}>👇</button>
                    </li>
                )}
            </ol>
        </div>

    )
}

export default ToDo