import styled from "styled-components";
import {AiOutlinePlus} from "react-icons/ai"
import { toast } from "react-toastify";

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`
const FormInputLabel = styled.label`
    color: #F5F7F8;
`

const FormInput = styled.input`
    padding: 1vw 1vh;
    color: #263238;
    font-size: 1vw;
`

const ExitButton = styled.div `
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    padding: .5vw;
    transform: rotate(45deg);
    color: #F5F7F8;
`

const SubmitButton = styled.button `
    margin-top: .4vh;
    padding: 0.5vw;
    border-radius: .2vw;
    background-color: transparent;
    border: .1vh solid #F5F7F8;
    color: #F5F7F8;
    cursor: pointer;
`
const GanttAddTaskForm = ({addTask, closeModal, notClosable}) => {

    //Generate a new task on form submit then closes modal
    function generateNewTask(e) {
        e.preventDefault();
    
        if (!e.target.taskName.value || !e.target.startDate.value || !e.target.endDate.value) {
            toast.error("Missing informations to create task");
            return;
        }
        if (Date.parse(e.target.endDate.value) <= Date.parse(e.target.startDate.value)) {
            toast.error("End Date needs to be later than start date (at least one day)");
            return;
        }
        var task = {
            name: e.target.taskName.value,
            startDate: e.target.startDate.value,
            endDate: e.target.endDate.value,
            completionRate: 0,
        }
        addTask(task)
        closeModal()
    } 

    return ( 
        <FormContainer onSubmit={generateNewTask}>
            <FormInputLabel htmlFor="taskName">Taskname</FormInputLabel>
            <FormInput name="taskName" id="taskName" type="text" placeholder="Task Name" />
            <FormInputLabel htmlFor="startDate">Start Date</FormInputLabel>
            <FormInput name="startDate" id="startDate" type="date" />
            <FormInputLabel htmlFor="endDate">End Date</FormInputLabel>
            <FormInput name="endDate" id="endDate" type="date" />
            <SubmitButton type="submit">Add new task</SubmitButton>
            {notClosable ? null : <ExitButton onClick={closeModal}><AiOutlinePlus/></ExitButton>}
        </FormContainer>
    );
}

export default GanttAddTaskForm;