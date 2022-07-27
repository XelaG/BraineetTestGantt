import styled from "styled-components"
import GanttGrid from "./ganttGrid";
import GanttHeader from "./ganttHeader";
import GanttLeftColumnTask from "./ganttLeftColumnTask";


const Table = styled.table`
    width: 30vw;
    table-layout: auto;
    border-spacing: 0;
`

const GanttContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
`

function Gantt() {

    const dataExample = [
        {
            name: "Task 1",
            startDate: "2022-08-04",
            endDate: "2022-08-08",
            completionRate: 50,
        },
        {
            name: "Task 2",
            startDate: "2022-08-05",
            endDate: "2022-08-08",
            completionRate: 10,
        }
    ]

    return(
        <GanttContainer>
            <Table>
                <GanttHeader />
                <tbody>
                    {dataExample.map((task, idx) => <GanttLeftColumnTask key={idx} name={task.name} startDate={task.startDate} endDate={task.endDate} />)}
                </tbody>
            </Table>
            <GanttGrid tasks={dataExample}/>
        </GanttContainer>
        
    );
}

export default Gantt;