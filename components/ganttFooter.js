import styled from "styled-components";

const AddNewTaskButton = styled.button`
    margin-top: .4vh;
    margin-bottom: .4vh;
    padding: 0.5vw;
    border-radius: .2vw;
    background-color: transparent;
    border: .1vh solid #263238;
    color: #263238;
    cursor: pointer;
    font-weight: bold;
`

const GanttFooter = ({openModal}) => {
    //Didn't find a way to center the button so used a little trick but needs to be checked out
    return (
        <tfoot>
            <tr>
                <td style={{opacity: "0%"}}>
                    <button>Add a new task</button>
                </td>
                <td>
                    <AddNewTaskButton onClick={openModal}>Add a new task</AddNewTaskButton>
                </td>
                <td style={{opacity: "0%"}}>
                    <button>Add a new task</button>
                </td>
            </tr>
        </tfoot>
    );
}
 
export default GanttFooter;