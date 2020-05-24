import React from 'react';
import styled from 'styled-components';

const Div = styled.div`    
    display: flex;
    flex-direction: column;
    min-width: 100%;
    min-height: 100vh;
    justify-content: center;
    align-items: center; 
    background-color: #1a1a1a;
    background: #000000 url('./images/bg/clients.jpg') no-repeat;
    //background-size: 100% auto;
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
            const {clients} = section;
            return (
                <Div key={"clients"}>
                    <h1>Clients</h1>
                    <Images>
                    {
                        clients.map((item, index) => {                         
                            return (   
                                <Wrapper key={index}>    
                                    <img src={item} alt="" />
                                </Wrapper>
                            )
                        })                    
                    }   
                    </Images>             
                </Div>
            )
        })
    )
}

export default Clients;