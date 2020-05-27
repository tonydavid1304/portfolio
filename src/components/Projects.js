import React from 'react';
import styled from 'styled-components';
import Popup from './Popup';

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
            const {projects} = section;
            return (
                <Div key={"projects"}>
                    <h1>Projects</h1>
                    <Images>
                    {
                        projects.map((item,index) => {
                            return (     
                                <Wrapper key={index}>                  
                                    <img src={item.thumb} alt={item.title} onClick={() => onImgClick(item.title, item.desc, item.img)} />
                                </Wrapper>
                            )
                        })                    
                    }   
                    </Images>   

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