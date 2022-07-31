import { useEffect, useState } from "react";
import styled from "styled-components";
import monthInfo from './month.json'
import { useSizeUnitsContext } from "../context/sizeUnits"
import { daysBetween, stringifyDate } from "./dateFunctions";
import GanttGridTask from "./ganttGridTask";

const GridContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    background-color: #F5F7F8;
    overflow: auto;
    scrollbar-gutter: auto;
    overflow-y: hidden;
    ${props => props.isModalOpen ? "filter: blur(5px)" : ""};
`

const GridHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: ${props => (props.nbElements * 5) * props.widthUnit || 150* props.widthUnit}px;
    height: ${props => props.heightUnit * 5}px;
    background-color: #ECEFF1;
    color: #263238;
`

const GridHeaderDateElement = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-right: 1px solid #263238;
`

function GanttGrid({isModalOpen, tasks, updateTasks}) {
    const {widthUnit, heightUnit} = useSizeUnitsContext()
    const [dates, setDates] = useState([])

    function generateDates(tasks) { //Generates timeline dates using earliest date - 15 and latest date + 15
        var allDates = [];
        var tmpDates = [];
        tasks.forEach(task => {
            allDates.push(task.startDate)
            allDates.push(task.endDate)
        });
        // Finds earliest date and transforms it into an array of integer with idx 0 = year idx 1 = mont idx 2 = day
        var earliestDate = allDates.reduce(function (pre, cur) {
            return Date.parse(pre) > Date.parse(cur) ? cur : pre;
        }).split("-").map((x) => parseInt(x)) 
        var latestDate = allDates.reduce(function (pre, cur) {
            return Date.parse(pre) < Date.parse(cur) ? cur : pre;
        }).split("-").map((x) => parseInt(x))

        //Generates dates from earliest to earliest -15
        for (var i = 0, actualDate = [...earliestDate]; i < 15; i++) {
            var stringifiedDate = stringifyDate(actualDate)
            tmpDates.push(stringifiedDate)
            if (actualDate[2] > 1) {
                actualDate[2] -= 1;
            } else {
                if (actualDate[1] > 1) {
                    actualDate[1] -= 1;
                    actualDate[2] = monthInfo[actualDate[1] - 1].length
                } else {
                    actualDate[0] -= 1;
                    actualDate[1] = 12;
                    actualDate[2] = monthInfo[actualDate[1] - 1].length
                }
            }
        }
        //Reversing the array so dates are in chronological order
        tmpDates = tmpDates.reverse()
        var diffBetweenLatestAndEarliest = daysBetween(earliestDate.join('-'), latestDate.join('-'))
        
        //Generating dates from earliest + 15 + difference between earliest and latest
        for (var i = 0, actualDate = [...earliestDate]; i < 15 + diffBetweenLatestAndEarliest; i++) {
            var stringifiedDate = stringifyDate(actualDate)
            tmpDates.push(stringifiedDate)
            if (actualDate[2] < monthInfo[actualDate[1] - 1].length) {
                actualDate[2] += 1;
            } else {
                if (actualDate[1] < 12) {
                    actualDate[1] += 1;
                    actualDate[2] = 1;
                } else {
                    actualDate[0] += 1;
                    actualDate[1] = 1;
                    actualDate[2] = 1
                }
            }
        }
        //Removing duplicate earliest date
        tmpDates.splice(15, 1);
        setDates(tmpDates)
    }

    //Regenerating Dates when tasks are added/removed/updated
    useEffect(() => {
        generateDates(tasks)
    }, [tasks]);

    // Waiting for dates to be generated to render the grid.
    if (dates.length === 0) {
        return (<h1>Loading...</h1>)
    }

    return(
        <GridContainer isModalOpen={isModalOpen} id="grid-container">
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
                    <GanttGridTask
                    key={idx}
                    task={task}
                    startDateOffset={startDateOffset}
                    dates={dates}
                    idx={idx}
                    updateTask={(task) => {
                        var newTasks = [...tasks]
                        newTasks[idx] = task;
                        updateTasks(newTasks)
                    }}
                    />
                )
            })}
        </GridContainer>
    )
}

export default GanttGrid;
