import styled from "styled-components"
import { useSizeUnitsContext } from "../context/sizeUnits"

const HeaderContainer = styled.thead`
    background-color: #ECEFF1;
    color: #263238;
    padding: 0;
    height: ${props => props.height || 30}px;
`

function GanttHeader() {
    const heightUnit = useSizeUnitsContext().heightUnit
    return (
        <HeaderContainer height={heightUnit * 5}>
            <tr>
                <th>
                    Name
                </th>
                <th>
                    From
                </th>
                <th>
                    To
                </th>
            </tr>
        </HeaderContainer>
        
    )
}

export default GanttHeader;