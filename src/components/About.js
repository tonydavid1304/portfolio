import React from 'react';
import styled from 'styled-components';

const Div = styled.div`    
    display: flex;
    flex-direction: column;
    min-width: 100%;
    min-height: 100vh;
    justify-content: center;
    align-items: center; 
    background-color: #282c34;
`
const About = (props) => {
    const { data } = props;
    return (
        data.map(section => {
            const {about} = section;
            return (
                <Div key={"about"}>
                    <h1>{about.title}</h1>
                    <p>{about.desc}</p>
                </Div>
            )
        })
    )
}

export default About;