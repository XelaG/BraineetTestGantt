import styled from "styled-components";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import { useSizeUnitsContext } from "../context/sizeUnits";
import { useEffect, useRef, useState } from "react";
import { daysBetween } from "./dateFunctions";
import { toast } from "react-toastify";

const TaskElement = styled.div`
    display: flex;
    background-color: ${props => props.isOdd ? '#90A4AE' : '#ECEFF1'};
    height: ${props => props.heightUnit * 5}px;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px rgb(0 0 0 / 20%);
`
const TaskElementText = styled.p`
    z-index: 2;
    position: relative;
`

const TaskContainer = styled.div`
    display: flex;
    background-color: #F5F7F8;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding: 5px;
`

const GanttGridTask = ({task, startDateOffset, updateTask, dates, idx}) => {
    const {widthUnit, heightUnit} = useSizeUnitsContext()
    const [isDragDisabled, setIsDragDisabled] = useState(false);
    const [dragPosition, setDragPosition] = useState({x: startDateOffset * widthUnit * 5, y: 0})
    const [taskWidth, setTaskWidth] = useState((widthUnit * daysBetween(task.startDate.split('-').join('-'), task.endDate.split('-').join('-')) * 5))
    const [taskProgressWidth, setTaskProgressWidth] = useState((widthUnit * daysBetween(task.startDate.split('-').join('-'), task.endDate.split('-').join('-')) * 5) * (task.completionRate / 100))
    const firstTaskRef = useRef(null)
    
    
    //Scrolls to earliest task in the timeline
    useEffect(() => {
        if (firstTaskRef && firstTaskRef.current) {
            firstTaskRef.current.scrollIntoView({inline: "start"})
        }
    }, [firstTaskRef.current]);

    //Manages the drag and drop drop to store position in state
    function manageDrop(e) {
        if (isDragDisabled) return false;
        // Calculating true drop position because react-draggable returns position on screen.
        var scrollOffset = document.getElementById("grid-container").scrollLeft // Where are we on the scrollbar
        var positionOfTimeline = document.getElementById("grid-container").getBoundingClientRect().left + (e.srcElement.clientWidth / 2) // Start position of the timeline
        var droppedPosition = Math.ceil((scrollOffset + e.x - positionOfTimeline)/(widthUnit * 5))*(widthUnit * 5); // Rounding to the nearest vw
        var idxOfDate = droppedPosition / (widthUnit * 5) // Calculating which idx of date the element was dropped at
        if (dates[idxOfDate] != task.startDate) {
            task.endDate = dates[idxOfDate - daysBetween(task.endDate, task.startDate)];
            task.startDate = dates[idxOfDate];
            var newPosition = {...dragPosition};
            newPosition.x = droppedPosition;
            setDragPosition(newPosition)
            updateTask(task)
        }
    }

    //Manages the resize of the task
    function manageTaskResize(e) {
        var roundedWidth = Math.ceil((e.path[1].offsetWidth)/(widthUnit * 5))*(widthUnit * 5); // Rounding to the nearest vw
        var taskLength = roundedWidth / (widthUnit * 5);
        task.endDate = dates[dates.findIndex((item) => item === task.startDate) + taskLength];
        updateTask(task);
        setTaskWidth(roundedWidth)
        setIsDragDisabled(false)
    }

    //Manages the resize of the task progress bar
    function manageProgressResize(e) {
        var size = e.path[1].offsetWidth;
        var percentage = (size / taskWidth) * 100
        //Sometimes the path object is not formed the same way and gives the wrong object with wrong value so we cancel that resize.
        if (percentage > 100) {
            toast.error("Error while resizing")
        } else {
            setTaskProgressWidth(size);
            task.completionRate = percentage;
            updateTask(task)
        }
        setIsDragDisabled(false)
    }

    return (
        <TaskContainer
            isOdd={idx % 2}
            heightUnit={heightUnit}
            >
            <Draggable
            axis="x"
            grid={[widthUnit * 5, widthUnit * 5]}
            onDrag={() => {
                if (isDragDisabled) return false;
            }}
            position={dragPosition}
            onStop={manageDrop}
            >
                <ResizableBox
                width={taskWidth}
                height={heightUnit * 5}
                axis="x"
                onResizeStart={() => setIsDragDisabled(true)}
                onResizeStop={manageTaskResize}
                resizeHandles={["e"]}
                minConstraints={[widthUnit * 5, 0]}
                >
                    <div>
                        <ResizableBox
                        width={taskProgressWidth}
                        height={heightUnit * 5}
                        style={{position: "absolute", backgroundColor: "#6969e7", borderRadius: "10px"}}
                        onResizeStart={() => setIsDragDisabled(true)}
                        onResizeStop={manageProgressResize}
                        resizeHandles={["se"]}
                        axis="x"
                        maxConstraints={[taskWidth, heightUnit * 5]}
                        />
                        
                        <TaskElement
                        ref={idx === 0 ? firstTaskRef : null}
                        isOdd={idx % 2}
                        heightUnit={heightUnit}>
                            <TaskElementText>
                                {task.name}
                            </TaskElementText>
                        </TaskElement>
                    </div>
                </ResizableBox>
            </Draggable>
        </TaskContainer>
    );
}
 
export default GanttGridTask;