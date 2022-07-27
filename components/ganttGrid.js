import { useEffect, useState } from "react";
import GridLayout from "react-grid-layout";
import styled from "styled-components";
import { useSizeUnitsContext } from "../context/sizeUnits";
import monthInfo from "./month.json"

//TODO: Clean up this file
//TODO: Find a way to block y axis
//TODO: Find a way to place elements correctly on the grid
//TODO: Find a way make the scrollbar start at the first element
//TODO: Find a way to update start and end date of tasks when resized/moved

const GridContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vw;
    background-color: blue;
    overflow: auto;
    overflow-y: hidden;
`

const TimelineHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    background-color: yellow;
`

const TimelineHeaderText = styled.div`
    display: flex;
    color: white;
    background-color: grey;
    text-align: center;
    align-items: center;
    justify-content: center;
`

const Task = styled.div`
    display: flex;
    flex-direction: row;
    background-color: yellow;
    align-items: center;
    justify-content: center;
`

function GanttGrid({tasks}) {
    const heightUnit = useSizeUnitsContext().heightUnit
    const [dates, setDates] = useState([])
    const [layout, setLayout] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [rerenderTrigger, setRerenderTrigger] = useState(0)

    function generateDates() {
        var tmpDates = [];
        var todayMonth = new Date().getMonth();
        var todayDay = new Date().getDate();
        var actualDay = todayDay - 1;
        var actualMonth = todayMonth;
        if (actualDay < 1) {
            actualMonth--;
            actualDay = monthInfo[actualMonth].length;
        }
        for (var i = 0; i < 15; i++) {
            tmpDates.push(`${actualDay} ${monthInfo[actualMonth].name}`)
            if (actualDay > 0) {
                actualDay--
            } else {
                actualMonth--;
                if (actualMonth < 0) {
                    actualMonth = 12;
                }
                actualDay = monthInfo[actualMonth].length;
            }
        }
        tmpDates = tmpDates.reverse()
        actualDay = todayDay;
        actualMonth = todayMonth;
        for (var i = 0; i < 15; i++) {
            tmpDates.push(`${actualDay} ${monthInfo[actualMonth].name}`)
            if (actualDay <= monthInfo[actualMonth].length) {
                actualDay++
            } else {
                actualMonth++;
                if (actualMonth > 11) {
                    actualMonth = 0;
                }
                actualDay = 1;
            }
        }
        setDates(tmpDates);
        return tmpDates
    }

    function generateHeaderLayout(dates) {
        var tmpLayout = []
        dates.forEach((date, idx) => {
            tmpLayout.push({i: date.replace(" ", ""), x: idx, y: 0, w: 1, h: 1, static: true})
        });
        return tmpLayout
    }

    function generateTaskLayout(tmpLayout) {
        tasks.forEach((task, idx) => {
            tmpLayout.push({i: task.name.replace(" ", ""), x: 0, y: idx + 1, w: 1, h: 1, isResizable: true, isBounded: true, resizeHandles: ["e", "w"]})
        })
        setLayout(tmpLayout)
    }
    
    useEffect(() => {
        generateTaskLayout(generateHeaderLayout(generateDates()))
        setIsLoading(false);
    }, []);

    if (isLoading || heightUnit === 0)  {
        return (
            <GridContainer>
                <h1>Loading...</h1>
            </GridContainer>
        )
    }

    function checkLayoutChangeCorrectness(newLayout) {
        console.log("🚀 ~ file: ganttGrid.js ~ line 118 ~ checkLayoutChangeCorrectness ~ layout", layout)
        if (!layout.length || !newLayout) return;
        if (newLayout !== layout) {
            newLayout.forEach((item, idx) => {
                if (item.y !== layout[idx].y) {
                    alert("You cannot change the line of a task");
                    setRerenderTrigger(Math.random)
                    return;
                }
            })
        } else {
            setLayout(newLayout);
        }
    }

    return (
        <GridContainer height={heightUnit}>
            <GridLayout
                className="layout"
                layout={layout}
                cols={30}
                rowHeight={3 * heightUnit}
                width={30 * 150}
                margin={[0, 0]}
                onLayoutChange={checkLayoutChangeCorrectness}
            >
                {dates.map(date => {
                    return(<TimelineHeaderText key={date.replace(" ", "")}>{date}</TimelineHeaderText>)
                })}
                {tasks.map(task => {
                    return (<Task key={task.name.replace(" ", "")}>{task.name}</Task>)
                })}
            </GridLayout>
        </GridContainer>
    );
}

export default GanttGrid;