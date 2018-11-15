import React from 'react'
import Col from "../grid/grCol";
import Row from "../grid/grRow";
import icon1 from "../../static/icon1.svg";
import icon2 from "../../static/icon2.svg";
import icon3 from "../../static/icon3.svg";
import icon4 from "../../static/icon4.svg";
import mov from "../../static/cars.mov";

const About = (props) => {

    let ico1 = icon1,
        ico2 = icon2,
        ico3 = icon3,
        ico4 = icon4;

    return(
        <React.Fragment>
            <Row styleProperties={{
                width: '100%',
            }}>
                <Col hd={2} dt={1} tb={0} mb={0} styleProperties={{backgroundColor: '#F3F1F3'}}></Col>
                <Col hd={8} dt={10} tb={12} mb={12}>
                    <div id="about" className={'blockAbout-wrapper'}>
                        <div className={'leftBlockAbout-wrapper'}>
                            <div className={'blockAbout-cntr'}>
                                <div className={'blockAbout-title'}>{props.title}</div>
                                <div className={'blockAbout-desc'} dangerouslySetInnerHTML={{__html:props.desc}} />
                                {props.services.map((service,k)=>{
                                    return (
                                        <div key={k} className={'blockAbout-tile'}>
                                            <div className={'tileIcon'} >
                                                <img src={eval('ico'+(k+1))} alt=""/>
                                            </div>
                                            <div className={'tileTitle'}>{service.title}</div>
                                            <div className={'tileDesc'} dangerouslySetInnerHTML={{__html:service.desc}} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={'rightBlockAbout-wrapper'}>
                            <div className={'blockAbout-cntr'}>
                                <video className={'blockAbout-video'} controls autoPlay={true} muted={true} >
                                    <source src={mov}/>
                                </video>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col hd={2} dt={1} tb={0} mb={0} styleProperties={{backgroundColor: '#FF1F27'}}></Col>
            </Row>
        </React.Fragment>
    )
}

export default About