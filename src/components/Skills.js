import React from 'react';
import { ProgressBar } from "react-bootstrap";
import styled from 'styled-components';
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "./VisibilitySensor";

const Div = styled.div`    
    display: flex;
    flex-direction: column;
    width: 100%;
    //height: 100vh;
    min-height: 100vh;
    //justify-content: center;
    align-items: center; 
    background-color: #292928;
    background: #000000 url('./images/bg/skills.jpg') no-repeat top center;
    //background-size: 100% auto;
    h1{
        margin-top: 15vh;
    }
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
            const {menu, skills} = section;
            const colors = ["info","warning", "","success","danger"];

            return (
                <Div key={"skills"} >                   

                    <VisibilitySensor once>
                        {({ isVisible }) => (
                            <>
                                <Spring delay={300} to={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible
                                    ? "scale(1)"
                                    : "scale(2)",
                                }}>
                                    {(props) => (
                                        <h1 style={{ ...props }}>{menu[1]}</h1>
                                    )}
                                </Spring> 
                                <ul style={barStyle}>
                                {
                                    skills.map((item,index) => {
                                        return (
                                            <li key={index}>                                                        
                                                <em>{item.skill}</em>
                                                <Spring
                                                    delay={50 * (index+1)}                                    
                                                    to={{ number: isVisible ? 1 : 0 }}>
                                                    {props => <ProgressBar variant={colors[index]} now={item.rating * props.number} />}
                                                </Spring>                                                       
                                                                                                       
                                            </li>
                                        )
                                    })                    
                                }                                            
                                </ul>                                 
                            </>  
                        )}
                    </VisibilitySensor>                    
                </Div>
            )
        })
    )
}

export default Skills;