import React from 'react';
import { SRLWrapper } from "simple-react-lightbox";

export const MainComponent = () => {
    return (
        <SRLWrapper>
            <h1 style={{textAlign:"center" , fontFamily:"Helvetica "}}>Click Any Image</h1>

            <div style={{width: "100%", display: 'flex', flexWrap: "wrap", height: "100vh" , alignItems:"center" , justifyContent:"center"}}>
                <div style={{width: "25%", margin: "50px" ,cursor:"pointer" , height:"300px"  }}>
                    <img src={require('./images/img1.jpg').default} style={{width: "100%" , height:"100%"}} />
                </div>
                <div style={{width: "25%", margin: "50px" ,cursor:"pointer" , height:"300px"}}>
                    <img src={require('./images/img2.jpg').default} style={{width: "100%", height:"100%"}} />
                </div>
                <div style={{width: "25%", margin: "50px" ,cursor:"pointer" , height:"300px"}}>
                    <img src={require('./images/img3.jpg').default} style={{width: "100%", height:"100%"}} />
                </div>
                <div style={{width: "25%", margin: "50px" ,cursor:"pointer" , height:"300px"}}>
                    <img src={require('./images/img4.jpg').default} style={{width: "100%", height:"100%"}} />
                </div>
                <div style={{width: "25%", margin: "50px" ,cursor:"pointer" , height:"300px"}}>
                    <img src={require('./images/img5.jpg').default} style={{width: "100%", height:"100%"}} />
                </div>
                <div style={{width: "25%", margin: "50px" ,cursor:"pointer" , height:"300px"}}>
                    <img src={require('./images/img6.jpg').default} style={{width: "100%", height:"100%"}} />
                </div>
                <div style={{width: "25%", margin: "50px" ,cursor:"pointer" , height:"300px"}}>
                    <img src={require('./images/tree1.jpg').default} style={{width: "100%", height:"100%"}} />
                </div>
                <div style={{width: "25%", margin: "50px" ,cursor:"pointer" , height:"300px"}}>
                    <img src={require('./images/tree2.png').default} style={{width: "100%", height:"100%"}} />
                </div>
                <div style={{width: "25%", margin: "50px" ,cursor:"pointer" , height:"300px"}}>
                    <img src={require('./images/tree3.jpg').default} style={{width: "100%", height:"100%"}} />
                </div>
                <div style={{width: "25%", margin: "50px" ,cursor:"pointer" , height:"300px"}}>
                    <img src={require('./images/tree4.jpg').default} style={{width: "100%", height:"100%"}} />
                </div>
                <div style={{width: "25%", margin: "50px" ,cursor:"pointer" , height:"300px"}}>
                    <img src={require('./images/tree5.jpg').default} style={{width: "100%", height:"100%"}} />
                </div>
                <div style={{width: "25%", margin: "50px" ,cursor:"pointer" , height:"300px"}}>
                    <img src={require('./images/tree6.jpg').default} style={{width: "100%", height:"100%"}} />
                </div>
            </div>
        </SRLWrapper>
    )
}