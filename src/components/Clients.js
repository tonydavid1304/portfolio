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