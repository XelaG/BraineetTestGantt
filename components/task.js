import { useState } from "react";
import styled from "styled-components";

const ProgressBar = styled.input`
        width: ${props => props.width * 5 || 0}vw;
        height: 3vh;    
        -webkit-appearance: none;
        background: rgb(174, 184, 194);
        outline: none;
        overflow: hidden;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, .6);
        border-radius: 5%;
        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 1vw;
            height: 3vh;
            background: rgba(255, 255, 255, .8);
            border-radius: 5%;
            cursor: ew-resize;
            box-shadow: -407px 0 0 400px rgb(130, 130, 245);
        };
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
`

const HoverInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: rgb(174, 184, 194);
    padding: .5vw;
`

function Task({ name, completionPercentage}) {

    const [isHovered, setIsHovered] = useState(false)
    const [rangeValue, setRangeValue] = useState(completionPercentage)

    return (
        <Container onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <ProgressBar width={endDate - startDate}
                onChange={(e) => setRangeValue(e.target.value)}
                type="range"
                max={100}
                min={0}
                value={rangeValue}
                placeholder={name}
                />
            
            {isHovered ? <HoverInfo>
                    <p><b>{name}: {startDate} - {endDate}</b></p>
                    <p>Duration: {endDate - startDate} day(s)</p>
                    <p>Progress: {rangeValue}%</p>
                </HoverInfo>
            : null}
        </Container>
        
    );
}

export default Task;