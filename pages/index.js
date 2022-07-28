import styled from "styled-components";
import Gantt from "../components/gantt";
import Task from "../components/task";

const CenteredDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
padding: 3vw;
`

export default function Home() {
  return (
    <CenteredDiv>
      <Gantt />
    </CenteredDiv>
  )
}
