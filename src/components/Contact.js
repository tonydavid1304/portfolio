import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

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
    background-color: #000000;
    background: #000000 url('./images/bg/contact.jpg') no-repeat top center;
    //background-size: 100% auto;
    h1{
        margin-top: 35vh;
    }
`
const Icons = styled.div`
    display: flex;
    flex-direction: row;
    a{
        margin:20px;
        color: white;
        &:hover {              
            filter: brightness(50%);   
            cursor: pointer;    
        }
    }
`

const Contact = (props) => {
    const { data } = props;
    
    return (
        data.map(section => {
            const {contact} = section;
            const typeArr = [contact.email, contact.linkedin, contact.github];
            const tttleArr = ["e-mail", "Linkedin", "GitHub"];
            const iconArr = [faEnvelope, faLinkedin, faGithub];

            return (
                <Div key={"contact"}>
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
                                        <h1 style={{ ...props }}>{contact.title}</h1>
                                    )}
                                </Spring>   
                                <Spring config={{duration: 1000}} delay={600} to={{
                                    opacity: isVisible ? 1 : 0
                                }}>
                                    {(props) => (
                                        <p style={{ ...props }}>{contact.desc}</p>
                                    )}
                                </Spring>              
                                
                                <Icons> 
                                    {
                                        typeArr.map((item, index) => {
                                            return(                                                
                                                <Spring key={"s"+index} delay={400 * (index+1)} to={{
                                                    opacity: isVisible ? 1 : 0
                                                }}>
                                                    {(props) => (
                                                         <a style={{ ...props }} href={item} title={tttleArr[index]} target="_blank" rel="noopener noreferrer">
                                                            <FontAwesomeIcon icon={iconArr[index]} />
                                                        </a>
                                                    )}
                                                </Spring> 
                                            )
                                        })
                                    }           
                                </Icons>
                            </>  
                        )}
                    </VisibilitySensor>              
                </Div>
            )
        })
    )
}

export default Contact;