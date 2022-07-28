import { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { Resizable, ResizableBox } from "react-resizable";
import styled from "styled-components";
import monthInfo from './month.json'
import { useSizeUnitsContext } from "../context/sizeUnits"

const GridContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vw;
    background-color: #F5F7F8;
    overflow: auto;
    scrollbar-gutter: auto;
    overflow-y: hidden;
`

const GridHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: ${props => (props.nbElements * 5) * props.widthUnit || 150* props.widthUnit}px;
    height: ${props => props.heightUnit * 5}px;
    background-color: #ECEFF1;
    color: black;
`

const GridHeaderDateElement = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-right: 1px solid black;
`

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

const TaskContainer = styled.div`
    display: flex;
    background-color: #F5F7F8;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding: 5px;
`

function GanttGrid({tasks}) {
    const {widthUnit, heightUnit} = useSizeUnitsContext()
    const [dates, setDates] = useState([])
    const [isDragDisabled, setIsDragDisabled] = useState(false);

    function treatAsUTC(date) {
        var result = new Date(date);
        result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
        return result;
    }
    
    function daysBetween(startDate, endDate) {
        var millisecondsPerDay = 24 * 60 * 60 * 1000;
        return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
    }

    function stringifyDate(date) {
        var string = [...date]
        string = string.map(item => item.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        }))
        string = string.join("-")
        return string;
    }

    function generateDates(tasks) {
        var allDates = [];
        var tmpDates = [];
        tasks.forEach(task => {
            allDates.push(task.startDate)
            allDates.push(task.endDate)
        });
        var earliestDate = allDates.reduce(function (pre, cur) {
            return Date.parse(pre) > Date.parse(cur) ? cur : pre;
        }).split("-").map((x) => parseInt(x))
        var latestDate = allDates.reduce(function (pre, cur) {
            return Date.parse(pre) < Date.parse(cur) ? cur : pre;
        }).split("-").map((x) => parseInt(x))
        for (var i = 0, actualDate = [...earliestDate]; i < 15; i++) {
            var stringifiedDate = stringifyDate(actualDate)
            tmpDates.push(stringifiedDate)
            if (actualDate[0] > 1) {
                actualDate[0] -= 1;
            } else {
                if (actualDate[1] > 1) {
                    actualDate[1] -= 1;
                    actualDate[0] = monthInfo[actualDate[1] - 1].length
                } else {
                    actualDate[2] -= 1;
                    actualDate[1] = 12;
                    actualDate[0] = monthInfo[actualDate[1] - 1].length
                }
            }
        }
        tmpDates = tmpDates.reverse()
        var diffBetweenLatestAndEarliest = daysBetween(earliestDate.reverse().join('-'), latestDate.reverse().join('-'))
        for (var i = 0, actualDate = [...earliestDate.reverse()]; i < 15 + diffBetweenLatestAndEarliest; i++) {
            var stringifiedDate = stringifyDate(actualDate)
            tmpDates.push(stringifiedDate)
            if (actualDate[0] < monthInfo[actualDate[1] - 1].length) {
                actualDate[0] += 1;
            } else {
                if (actualDate[1] < 12) {
                    actualDate[1] += 1;
                    actualDate[0] = 1;
                } else {
                    actualDate[2] += 1;
                    actualDate[1] = 1;
                    actualDate[0] = 1
                }
            }
        }
        tmpDates.splice(15, 1);
        setDates(tmpDates)
    }

    useEffect(() => {
        generateDates(tasks)
    }, []);

    useEffect(() => {
        console.log("Change of is drag disabled");
    }, [isDragDisabled]);

    return(
        <GridContainer>
            <GridHeaderContainer heightUnit={heightUnit} widthUnit={widthUnit} nbElements={dates.length}>
                {dates.map(date => {
                    return (
                    <GridHeaderDateElement
                    key={date}>
                        {date}
                    </GridHeaderDateElement>)
                })}
            </GridHeaderContainer>
            {tasks.map((task, idx) => {
                var startDateOffset = dates.findIndex(element => element === task.startDate)
                return (
                    <TaskContainer
                    key={idx}
                    isOdd={idx % 2}
                    heightUnit={heightUnit}
                    >
                        <Draggable
                        axis="x"
                        grid={[widthUnit * 5, widthUnit * 5]}
                        positionOffset={{x: startDateOffset * widthUnit * 5, y: "0"}}
                        onDrag={() => {
                            if (isDragDisabled) return false;
                        }}
                        >
                            <ResizableBox
                            width={(widthUnit * daysBetween(task.startDate.split('-').reverse().join('-'), task.endDate.split('-').reverse().join('-')) * 5)}
                            height={heightUnit * 5}
                            axis="x"
                            handleSize={[10, 10]}
                            onResizeStart={() => setIsDragDisabled(true)}
                            onResizeStop={() => setIsDragDisabled(false)}
                            resizeHandles={["e"]}
                            
                            >
                                <TaskElement
                                isOdd={idx % 2}
                                width={(widthUnit * daysBetween(task.startDate.split('-').reverse().join('-'), task.endDate.split('-').reverse().join('-')) * 5)}
                                heightUnit={heightUnit}>
                                    {task.name}
                                </TaskElement>
                            </ResizableBox>
                            
                        </Draggable>
                    </TaskContainer>
                    
                )
            })}
        </GridContainer>
    )
}

export default GanttGrid;