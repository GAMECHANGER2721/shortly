import styled from "styled-components";
import Link from 'next/link'

const SubscribeArea = styled.div `
height: 25vh;
background : #3b3054;
color : #fff;
display:flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
align-content: center;
`

function Subscribe() {
    return (
        <SubscribeArea>
            <h1>Boost your links today</h1>
            <button type="submit">Shorten it!</button>
        </SubscribeArea>
    )
}

export default Subscribe;
