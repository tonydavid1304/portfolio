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
    background-color: #1a1a1a;
    background: #000000 url('./images/bg/clients.jpg') no-repeat top center;
    //background-size: 100% auto;
    h1{
        margin-top: 35vh;
    }
    @media only screen and (max-width: 600px) {
        h1{
            margin-top: 10vh;
        }
    }
`
const Images = styled.div`
    display: flex;   
    flex-flow: row wrap;    
    justify-content: space-around;    
`
const Wrapper = styled.div`
    margin: 20px;
    box-shadow: 5px 5px 8px #000000;
`

const Clients = (props) => {
    const { data } = props;

    return (
        data.map(section => {
            const {menu, clients} = section;
            return (
                <Div key={"clients"}>
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
                                        <h1 style={{ ...props }}>{menu[3]}</h1>
                                    )}
                                </Spring> 

                                <Images>
                                {
                                    clients.map((item, index) => {                         
                                        return (   
                                            <Spring key={"s"+index} delay={300 * (index+1)} to={{
                                                opacity: isVisible ? 1 : 0,
                                                transform: isVisible ? "scale(1)" : "scale(0.5)"
                                            }}>
                                                {(props) => (
                                                     <Wrapper style={{ ...props }} key={index}>                  
                                                        <img src={item} alt="" />
                                                    </Wrapper>
                                                )}
                                            </Spring>                                            
                                        )
                                    })                    
                                }   
                                </Images>   
                            </>  
                        )}
                    </VisibilitySensor>                    
                </Div>
            )
        })
    )
}

export default Clients;