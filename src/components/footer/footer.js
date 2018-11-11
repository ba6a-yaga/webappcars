import React from 'react'
import Col from "../grid/grCol";
import logo from "../../static/logo3.svg";
import MenuList from "../menu/menuList";
import Row from "../grid/grRow";
import { Map, Marker } from 'yandex-map-react';

class Footer extends React.Component {

    render() {
        return (
            <Row styleProperties={{flexWrap:'wrap'}}>
                <Col hd={2} dt={1} tb={0} mb={0} styleProperties={{backgroundColor:'#FF1F27'}}/>
                <Col styleProperties={{minWidth:'375px'}} hd={4} dt={5} tb={6} mb={12}>
                    <div id="footer" className={'blockLeftFooter-wrapper'}>
                        <div className={'blockFooter-cntr'}>
                            <div className={'logo'}>
                                <img alt={''} src={logo} />
                            </div>
                            <div className={'infoBlock'}>
                                <p className={'tileDesc'}>{this.props.desc}</p>
                                <p className={'tileTitle'}>{this.props.title}</p>
                            </div>
                            <div className={'contactsBlock'}>
                                <p className={'tileTitle'}>{this.props.phone}</p>
                                <p className={'tileDesc'}>{this.props.email}</p>
                            </div>
                            <a href={'#footer'} className={'blockFooter-btn'}>{this.props.titleBtn}</a>
                            <div className={'empty'}></div>
                            <div className={'hr'}></div>
                            <div className={'menu'}>
                                <MenuList position={'top'} size={90} elements={this.props.elements}/>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col styleProperties={{minWidth:'375px'}} hd={6} dt={6} tb={6} mb={12}>
                    <div className={'blockRightFooter-wrapper'}>
                        <Map
                        onAPIAvailable={function () { console.log('API loaded'); }}
                        center={[55.76, 37.64]} zoom={10}
                        width={'100%'} height={'100%'}>
                        <Marker lat={55.694843} lon={37.435023} />
                        </Map>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Footer