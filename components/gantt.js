import styled from "styled-components"
import GanttGrid from "./ganttGrid";
import GanttHeader from "./ganttHeader";
import GanttLeftColumnTask from "./ganttLeftColumnTask";
import { useState, useEffect } from 'react';
import dataExample from './dataExample.json'
import GanttAddTaskForm from "./ganttAddTaskForm";
import GanttFooter from "./ganttFooter";


const Table = styled.table`
    width: 30%;
    table-layout: auto;
    border-spacing: 0;
    ${props => props.isModalOpen ? "filter: blur(5px)" : ""};
    background-color: #ECEFF1;
`

const GanttContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`

const AddTaskModal = styled.div`
    display: flex;
    width: 40vw;
    height: 40vh;
    background-color: #546E7A;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    box-shadow: 2px 2px 2px 1px rgba(0,0,0,0.2);
    border-radius: 1vw;
`

function Gantt() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [tasks, setTasks] = useState([]);

    //Loads tasks from local storage or use dafault data
    useEffect(() => {
        if (!localStorage.getItem("tasks")) {
            setTasks(dataExample)
        } else {
            setTasks(JSON.parse(localStorage.getItem("tasks")))
        }
    }, []);

    //Saves or clear the tasks in local storage on task change
    useEffect(() => {
        if (tasks.length !== 0) {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        } else {
            localStorage.removeItem("tasks")
        }
    }, [tasks]);

    // If there is no tasks we display the form to create one so the gantt is not empty
    if (tasks.length === 0) {
        return (
            <AddTaskModal>
                <GanttAddTaskForm notClosable addTask={(task) => setTasks([...tasks, task])} />
            </AddTaskModal>
        )
    }

    return(
        <GanttContainer>
            {isModalOpen ? 
            <AddTaskModal>
                <GanttAddTaskForm closeModal={() => setIsModalOpen(false)} addTask={(task) => setTasks([...tasks, task])} />
            </AddTaskModal> : null}
            <Table isModalOpen={isModalOpen}>
                <GanttHeader />
                <tbody>
                    {tasks.map((task, idx) => 
                    <GanttLeftColumnTask
                    key={idx}
                    name={task.name}
                    startDate={task.startDate}
                    endDate={task.endDate}
                    removeTask={() => {
                        if (confirm("Are your sure you want to delete this task ?")) {
                            var newTasks = [...tasks];
                            newTasks.splice(idx, 1);
                            setTasks(newTasks);
                        }
                    }} />)}
                </tbody>
                <GanttFooter openModal={() => setIsModalOpen(true)} />
            </Table>
            <GanttGrid isModalOpen={isModalOpen} tasks={tasks} updateTasks={setTasks}/>
        </GanttContainer>
        
    );
}

export default Gantt;