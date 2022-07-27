import styled from "styled-components";
import { useSizeUnitsContext } from "../context/sizeUnits";

const TableRow = styled.tr`
    background-color: lightgrey;
    text-align: center;
    height: ${props => props.height || 30}px;
    &:nth-child(odd) {
        background-color: lightgray;
    }
`

function GanttLeftColumnTask({name, startDate, endDate}) {
    const heightUnit = useSizeUnitsContext().heightUnit

    return (
        <TableRow height={3* heightUnit}>
            <td>
                {name}
            </td>
            <td>
                {startDate}
            </td>
            <td>
                {endDate}
            </td>
        </TableRow>
        
    )
}

export default GanttLeftColumnTask;