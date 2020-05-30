import React from 'react';
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
                     <VisibilitySensor once>
                        {({ isVisible }) => (
                            <>
                                <Spring delay={300} 
                                from={{                                                                
                                    transform: "scale(2)",
                                }}
                                to={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: "scale(1)"                                
                                }}>
                                    {(props) => (
                                        <h1 style={{ ...props }}>{about.title}</h1>
                                    )}
                                </Spring>  
                                <Spring delay={800} to={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? "scale(1)" : "scale(0.5)"
                                }}>
                                    {(props) => (
                                        <p style={{ ...props }}>{about.desc}</p>
                                    )}
                                </Spring>
                            </>  
                        )}
                    </VisibilitySensor>
                </Div>
            )
        })
    )
}

export default About;