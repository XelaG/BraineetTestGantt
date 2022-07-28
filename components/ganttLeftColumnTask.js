import styled from "styled-components";
import { useSizeUnitsContext } from "../context/sizeUnits"

const TableRow = styled.tr`
    background-color: #ECEFF1;
    text-align: center;
    height: ${props => props.height || 30}px;
    padding: 0;
    &:nth-child(odd) {
        background-color: #90A4AE;
    }
`

function GanttLeftColumnTask({name, startDate, endDate}) {
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
        </TableRow>
        
    )
}

export default GanttLeftColumnTask;