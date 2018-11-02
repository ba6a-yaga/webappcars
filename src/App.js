import React, { Component } from 'react'
import Menu from './components/menu/menu'
import MainBlock from "./components/carousel/carousel";
import Row from './components/grid/grRow'
import Col from './components/grid/grCol'
import {MdArrowForward, MdChevronLeft, MdChevronRight} from "react-icons/md";
import Button from "./components/button/button";
import secondSliderImg1 from './static/57.png'
import './app.scss'

class App extends Component {

    render() {
        return (
            <React.Fragment>
                <Menu />
                <MainBlock />
                <Row>
                    <Col dt={1} tb={1} mb={1} styleProperties={{height:100}}>
                    </Col>
                </Row>

                {/*// Второстепенный слайдер*/}
                <Row styleProperties={{
                    width:'100%',
                }}>
                    <Col dt={1} tb={1} mb={0}></Col>
                    <Col dt={10} tb={10} mb={12}>
                        <div className={'secondSlider-wrapper'}>
                            <div className={'secondSlider-title'}>Прием и утилизация снега</div>
                            <div className={'secondSlider-desc'}> Прием и&nbsp;утилизация снега в ЦАО на мобильные снегоплавельные пункты</div>
                            <div className={'secondSlider-cost'}>цена: 300&nbsp;руб./м3</div>
                            <div className={'secondSlider-img'}>
                                <img alt={''} src={secondSliderImg1}/>
                            </div>
                            <MdChevronLeft className={'secondSlider-btnLeft'} color={'gray'} size={30} />
                            <MdChevronRight className={'secondSlider-btnRight'} color={'gray'} size={30} />
                            <Button text={"Оставить заявку"}
                                    className={'secondSlider-btnMain'}
                                    textProperties={{
                                        color: '#FFF',
                                    }}
                                    styleProperties={{
                                        paddingTop: '15px',
                                        paddingBottom: '10px',
                                        paddingRight: '20px',
                                        paddingLeft: '10px',
                                        cursor: 'pointer',
                                        zIndex:2,
                                        backgroundColor:'#FF1F27',
                                        transition: 'background-color 300ms',
                                        ':hover': {
                                            backgroundColor:'gray'
                                        },
                                        ':active': {
                                            backgroundColor:'gray',
                                        }
                                    }}>
                                <MdArrowForward color={'#FFF'} size={30}/>
                            </Button>
                        </div>
                    </Col>
                    <Col dt={1} tb={1} mb={0}></Col>
                </Row>
                <Row>
                    <Col dt={1} tb={1} mb={1} styleProperties={{height:100}}>
                    </Col>
                </Row>

                {/*// Блок1 Услуги*/}
                <Row styleProperties={{
                    width:'100%',
                }}>
                    <Col dt={1} tb={1} mb={0}></Col>
                    <Col dt={10} tb={10} mb={12}>
                        <div className={'block1-wrapper'}>
                            <div className={'block1-title'}>
                                Аренда <br />спецтехники
                            </div>
                            <div className={'card-hor1'}></div>
                            <div className={'card-hor2'}></div>
                            <div className={'card-ver1'}></div>
                            <div className={'card-ver2'}></div>
                            <div className={'card-hor3'}></div>
                            <div className={'card-hor4'}></div>
                            <div className={'card-hor5'}></div>
                            <div className={'card-hor6'}></div>
                            <div className={'card-ver3'}></div>
                            <div className={'card-hor7'}></div>
                            <div className={'card-hor8'}></div>
                            <Button text={"Оставить заявку"}
                                    className={'block1-btn'}
                                    textProperties={{
                                        color: '#FFF',
                                    }}
                                    styleProperties={{
                                        paddingTop: '15px',
                                        paddingBottom: '10px',
                                        paddingRight: '20px',
                                        paddingLeft: '10px',
                                        cursor: 'pointer',
                                        zIndex:2,
                                        backgroundColor:'#FF1F27',
                                        transition: 'background-color 300ms',
                                        ':hover': {
                                            backgroundColor:'gray'
                                        },
                                        ':active': {
                                            backgroundColor:'gray',
                                        }
                                    }}>
                                <MdArrowForward color={'#FFF'} size={30}/>
                            </Button>
                        </div>

                    </Col>
                    <Col dt={1} tb={1} mb={0}></Col>
                </Row>
                <Row>
                    <Col dt={1} tb={1} mb={1} styleProperties={{height:100}}>
                    </Col>
                </Row>

                {/*// Блок2 Услуги*/}
                <Row styleProperties={{
                    width:'100%',
                }}>
                    <Col dt={1} tb={1} mb={0}></Col>
                    <Col dt={10} tb={10} mb={12}>
                        <div className={'block1-wrapper'}>
                            <div className={'block1-title'}>Аренда премиальных <br />автомобилей</div>
                            <div className={'card-hor1'}></div>
                            <div className={'card-hor2'}></div>
                            <div className={'card-ver1'}></div>
                            <div className={'card-ver2'}></div>
                            <div className={'card-hor3'}></div>
                            <div className={'card-hor4'}></div>
                            <div className={'card-hor5'}></div>
                            <div className={'card-hor6'}></div>
                            <div className={'card-ver3'}></div>
                            <div className={'card-hor7'}></div>
                            <div className={'card-hor8'}></div>
                            <Button text={"Оставить заявку"}
                                    className={'block1-btn'}
                                    textProperties={{
                                        color: '#FFF',
                                    }}
                                    styleProperties={{
                                        paddingTop: '15px',
                                        paddingBottom: '10px',
                                        paddingRight: '20px',
                                        paddingLeft: '10px',
                                        cursor: 'pointer',
                                        zIndex:2,
                                        backgroundColor:'#FF1F27',
                                        transition: 'background-color 300ms',
                                        ':hover': {
                                            backgroundColor:'gray'
                                        },
                                        ':active': {
                                            backgroundColor:'gray',
                                        }
                                    }}>
                                <MdArrowForward color={'#FFF'} size={30}/>
                            </Button>
                        </div>

                    </Col>
                    <Col dt={1} tb={1} mb={0}></Col>
                </Row>
                <Row>
                    <Col dt={1} tb={1} mb={1} styleProperties={{height:100}}>
                    </Col>
                </Row>

                {/*// О компании*/}
                <Row styleProperties={{
                    width:'100%',
                    flexWrap:'wrap',
                }}>
                    <Col dt={6} tb={6} mb={12}>
                        <div className={'leftBlockAbout-wrapper'}>
                            <div className={'blockAbout-cntr'}>
                                <div className={'blockAbout-title'}>О компании</div>
                                <div className={'blockAbout-desc'}>
                                    С 2013 года компания ООО "Сити ЖКХ" работает в сфере благоустройства<br />
                                    в ЦАО г.Москвы. Основными видами деятельности компании являются
                                </div>
                                <div className={'blockAbout-tile'}>
                                    <div className={'tileIcon'}></div>
                                    <div className={'tileTitle'}>
                                        Уборка снега
                                    </div>
                                    <div className={'tileDesc'}>
                                        с улиц ЦАО г. Москвы<br />
                                        собственным автопарком<br />
                                        спецтехники
                                    </div>
                                </div>
                                <div className={'blockAbout-tile'}>
                                    <div className={'tileIcon'}>
                                    </div>
                                    <div className={'tileTitle'}>Утилизация снега </div>
                                    <div className={'tileDesc'}>
                                        на собственных мобильных снегоплавильных пунктах
                                    </div>
                                </div>
                                <div className={'blockAbout-tile'}>
                                    <div className={'tileIcon'}></div>
                                    <div className={'tileTitle'}>
                                        Выполнение работ по озеленению и благоустройству городских территорий
                                    </div>
                                    <div className={'tileDesc'}>
                                        ООО «Сити ЖКХ» является одним из подрядчиков Префектуры ЦАО города Москвы.
                                    </div>
                                </div>
                                <div className={'blockAbout-tile'}>
                                    <div className={'tileIcon'}></div>
                                    <div className={'tileTitle'}>Изготовление металлоконструкций </div>
                                    <div className={'tileDesc'}>
                                        Наличие собственного производства позволяет выполнять заказы любой сложности, как в рамках государственного заказа, так и для коммерческих организаций
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col dt={6} tb={6} mb={12}>
                        <div className={'rightBlockAbout-wrapper'}>
                            <div className={'blockAbout-cntr'}></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col dt={1} tb={1} mb={1} styleProperties={{height:100}}>
                    </Col>
                </Row>

                {/*// Партнеры*/}
                <div className={'titlePartners'}>Партнеры</div>
                <Row>
                    <Col dt={1} tb={1} mb={1} styleProperties={{height:50}}>
                    </Col>
                </Row>

                <Row>
                    <Col dt={3} tb={3} mb={0}></Col>
                    <Col dt={6} tb={6} mb={12}>
                        <div className={'blockPartners-wrapper'}>
                            <div className={'blockPartners-tile'}>
                                <div className={'tileIcon'}></div>
                                <div className={'tileTitle'}>Название</div>
                                <div className={'tileDesc'}>Город</div>
                            </div>
                            <div className={'blockPartners-tile'}>
                                <div className={'tileIcon'}></div>
                                <div className={'tileTitle'}>Название</div>
                                <div className={'tileDesc'}>Город</div>
                            </div>
                            <div className={'blockPartners-tile'}>
                                <div className={'tileIcon'}></div>
                                <div className={'tileTitle'}>Название</div>
                                <div className={'tileDesc'}>Город</div>
                            </div>
                            <div className={'blockPartners-tile'}>
                                <div className={'tileIcon'}></div>
                                <div className={'tileTitle'}>Название</div>
                                <div className={'tileDesc'}>Город</div>
                            </div>

                            <div className={'blockPartners-tile'}>
                                <div className={'tileIcon'}></div>
                                <div className={'tileTitle'}>Название</div>
                                <div className={'tileDesc'}>Город</div>
                            </div>
                            <div className={'blockPartners-tile'}>
                                <div className={'tileIcon'}></div>
                                <div className={'tileTitle'}>Название</div>
                                <div className={'tileDesc'}>Город</div>
                            </div>
                            <div className={'blockPartners-tile'}>
                                <div className={'tileIcon'}></div>
                                <div className={'tileTitle'}>Название</div>
                                <div className={'tileDesc'}>Город</div>
                            </div>
                            <div className={'blockPartners-tile'}>
                                <div className={'tileIcon'}></div>
                                <div className={'tileTitle'}>Название</div>
                                <div className={'tileDesc'}>Город</div>
                            </div>

                            <div className={'blockPartners-tile'}>
                                <div className={'tileIcon'}></div>
                                <div className={'tileTitle'}>Название</div>
                                <div className={'tileDesc'}>Город</div>
                            </div>
                            <div className={'blockPartners-tile'}>
                                <div className={'tileIcon'}></div>
                                <div className={'tileTitle'}>Название</div>
                                <div className={'tileDesc'}>Город</div>
                            </div>
                            <div className={'blockPartners-tile'}>
                                <div className={'tileIcon'}></div>
                                <div className={'tileTitle'}>Название</div>
                                <div className={'tileDesc'}>Город</div>
                            </div>
                            <div className={'blockPartners-tile'}>
                                <div className={'tileIcon'}></div>
                                <div className={'tileTitle'}>Название</div>
                                <div className={'tileDesc'}>Город</div>
                            </div>
                        </div>
                    </Col>
                    <Col dt={3} tb={3} mb={0}></Col>
                </Row>
                <Row>
                    <Col dt={1} tb={1} mb={1} styleProperties={{height:100}}>
                    </Col>
                </Row>

                {/*// Футер*/}
                <Row>
                    <Col dt={6} tb={6} mb={12}>
                        <div className={'blockLeftFooter-wrapper'}>
                            <div className={'blockFooter-cntr'}>
                                <div className={'logo'}></div>
                                <div className={'infoBlock'}></div>
                                <div className={'contactsBlock'}></div>
                                <div className={'bnt'}></div>
                                <hr />
                                <div className={'menu'}></div>
                            </div>
                        </div>
                    </Col>
                    <Col dt={6} tb={6} mb={12}>
                        <div className={'blockRightFooter-wrapper'}>

                        </div>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default App;
