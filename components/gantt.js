import styled from "styled-components"
import GanttGrid from "./ganttGrid";
import GanttHeader from "./ganttHeader";
import GanttLeftColumnTask from "./ganttLeftColumnTask";


const Table = styled.table`
    width: 30%;
    table-layout: auto;
    border-spacing: 0;
`

const GanttContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`

function Gantt() {

    const dataExample = [
        {
            name: "Task 1",
            startDate: "04-08-2022",
            endDate: "06-08-2022",
            completionRate: 50,
        },
        {
            name: "Task 2",
            startDate: "05-08-2022",
            endDate: "08-08-2022",
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