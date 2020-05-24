import React from 'react';
import { ProgressBar } from "react-bootstrap";
import styled from 'styled-components';

const Div = styled.div`    
    display: flex;
    flex-direction: column;
    min-width: 100%;
    min-height: 100vh;
    justify-content: center;
    align-items: center; 
    background-color: #292928;
    background: #000000 url('./images/bg/skills.jpg') no-repeat;
    //background-size: 100% auto;
    ul{
        list-style-type:none;
    }
    li{
        margin-bottom:20px;
    }
`

const Skills = (props) => {
    const { data } = props;
    const barStyle = {
        width: '60%',
        margin: 0,
        padding: 0
    }
    return (
        data.map((section, index) => {
            const {skills} = section;
            const colors = ["info","warning", "","success","danger"];

            return (
                <Div key={"skills"} >
                    <h1>Skills</h1>
                    <ul style={barStyle}>
                    {
                        skills.map((item,index) => {
                            return (
                                <li key={index}>
                                    <em>{item.skill}</em>
                                    <ProgressBar variant={colors[index]} now={item.rating} />                      
                                </li>
                            )
                        })                    
                    }                                            
                    </ul>
                </Div>
            )
        })
    )
}

export default Skills;