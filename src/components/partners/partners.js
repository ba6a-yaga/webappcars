import React from 'react'
import Row from "../grid/grRow";
import Col from "../grid/grCol";

const Partners = (props) => {
    return (
        <React.Fragment>
            <div id="partners" className={'titlePartners'}>{props.title}</div>
            <Row>
                <Col hd={1} dt={1} tb={1} mb={1} styleProperties={{height:50}}>
                </Col>
            </Row>
            <Row>
                <Col hd={4} dt={3} tb={3} mb={0}></Col>
                <Col hd={4} dt={6} tb={6} mb={12} styleProperties={{justifyContent:'center'}}>
                    <div className={'blockPartners-wrapper'}>
                        {props.tile.map((tile,k)=>{
                            return (
                                <div key={k} className={'blockPartners-tile'}>
                                    <div className={'tileIcon'}>
                                        <img alt="" src={tile.icon} />
                                    </div>
                                    <div className={'tileTitle'}>{tile.title}</div>
                                    <div className={'tileDesc'}>{tile.desc}</div>
                                </div>
                            )
                        })}
                    </div>
                </Col>
                <Col hd={4} dt={3} tb={3} mb={0}></Col>
            </Row>
        </React.Fragment>
    )
}

export default Partners