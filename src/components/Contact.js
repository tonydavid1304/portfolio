import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Div = styled.div`    
    display: flex;
    flex-direction: column;
    min-width: 100%;
    min-height: 100vh;
    justify-content: center;
    align-items: center; 
    background-color: #000000;
    background: #000000 url('./images/bg/contact.jpg') no-repeat;
    //background-size: 100% auto;
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
            return (
                <Div key={"contact"}>
                    <h1>{contact.title}</h1>
                    <p>{contact.desc}</p>
                    <Icons>                        
                        <a href={contact.email} title="email">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        <a href={contact.linkedin} title="Linkedin" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href={contact.github} title="GitHub" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </Icons>
                </Div>
            )
        })
    )
}

export default Contact;