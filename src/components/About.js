import React from 'react';
import styled from 'styled-components';

const Div = styled.div`    
    display: flex;
    flex-direction: column;
    width: 100%;
    //height: 100vh;
    min-height: 100vh;
    //justify-content: center;
    align-items: center;     
    background-color: #282c34;
    background: #000000 url('./images/bg/about.jpg') no-repeat top center;
    //background-size: 100% auto;
    h1{
        margin-top: 35vh;
    }
    p{
        text-align: center;
        width: 70%;
    }
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