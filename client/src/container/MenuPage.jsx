import React from 'react'
import ToggleLocation from '../component/ToggleLocation'
import styled from 'styled-components'
import { combo } from '../utils/fakeData'
function Menu() {
    const data = combo;
    return (
        <Container>
            <ToggleLocation />
            {data.map((item, index) => (
                <Wrap key={index}>
                    <img src={item.img} key={index} />
                </Wrap>
            ))}
        </Container>
    )
}
const Container = styled.div`
    width: 100%;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Wrap = styled.div`
    width: 70%;
    img{
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
`
export default Menu