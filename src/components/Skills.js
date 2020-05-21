import React from 'react';
import { ProgressBar } from "react-bootstrap";
import styled from 'styled-components';

const Div = styled.div`    
    display: flex;
    flex-direction: column;
    min-width: 100%;
    min-height: 110vh;
    justify-content: center;
    align-items: center; 
    background-color: #292928;
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
        width: '70%'
    }
    return (
        data.map((section, index) => {
            const {skills} = section;
            const colors = ["","success", "info","warning","danger"];

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