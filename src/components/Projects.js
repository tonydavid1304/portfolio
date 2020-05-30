import React from 'react';
import styled from 'styled-components';
import Popup from './Popup';

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
    background-color: #1f1f1e;
    background: #000000 url('./images/bg/projects.jpg') no-repeat top center;
    //background-size: 100% auto;
    h1{
        margin-top: 25vh;
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
    border: 0;  
    background: none;
    &:hover {              
        filter: brightness(125%);   
        cursor: pointer;    
    }
    img {
        box-shadow: 5px 5px 8px #000000;
    }
`

const Projects = (props) => {
    const { data } = props;
    const [modalShow, setModalShow] = React.useState(false);
    const [title, setTitle] = React.useState("");
    const [desc, setDesc] = React.useState("");
    const [img, setImg] = React.useState("");

    function onImgClick(title, desc, img) {
        setModalShow(true);
        setTitle(title);
        setDesc(desc);
        setImg(img);
    };

    return (
        data.map((section, index) => {
            const {menu, projects} = section;
            return (
                <Div key={"projects"}>
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
                                        <h1 style={{ ...props }}>{menu[2]}</h1>
                                    )}
                                </Spring> 
                   
                                <Images>
                                {
                                    projects.map((item,index) => {
                                        return (    
                                            <Spring key={"s"+index} delay={300 * (index+1)} to={{
                                                opacity: isVisible ? 1 : 0,
                                                transform: isVisible ? "scale(1) rotateY(0)" : "scale(0.5) rotateY(180deg)"
                                            }}>
                                                {(props) => (
                                                     <Wrapper style={{ ...props }} key={index}>                  
                                                        <img src={item.thumb} alt={item.title} onClick={() => onImgClick(item.title, item.desc, item.img)} />
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

                    <Popup
                        title={title}
                        desc={desc}
                        img={img}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />             
                </Div>
            )
        })
    )
}

export default Projects;