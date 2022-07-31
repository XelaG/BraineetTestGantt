import styled from "styled-components";
import { useSizeUnitsContext } from "../context/sizeUnits"
import { BsTrashFill } from "react-icons/bs";

const TableRow = styled.tr`
    background-color: #ECEFF1;
    text-align: center;
    height: ${props => props.height || 30}px;
    padding: 0;
    &:nth-child(odd) {
        background-color: #90A4AE;
    }
`

const DeleteButton = styled.div`
    display: flex;
    background-color: #e33d3d;
    border-radius: 100%;
    width: 2vw;
    height: 2vw;
    align-items: center;
    justify-content: center;
    color: #F5F7F8;
    cursor: pointer;    
`

function GanttLeftColumnTask({name, startDate, endDate, removeTask}) {
    const heightUnit = useSizeUnitsContext().heightUnit

    return (
        <TableRow height={heightUnit * 5}>
            <td>
                {name}
            </td>
            <td>
                {startDate}
            </td>
            <td>
                {endDate}
            </td>
            <td>
                <DeleteButton onClick={removeTask}>
                    <BsTrashFill/>
                </DeleteButton>
            </td>
        </TableRow>
        
    )
}

export default GanttLeftColumnTask;