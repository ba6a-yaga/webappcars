import React, { Component } from 'react'
import Row from "../grid/grRow"
import Col from "../grid/grCol"
import './carousel.scss'
import tempImgForCarousel from '../../static/car_01.png'
import {MdChevronRight,MdArrowForward,MdChevronLeft} from 'react-icons/md'
import Button from "../button/button"
import Radium from 'radium'
// import arrowRight from "../../static/arrowRight.svg";
import Carousel from 'nuka-carousel';

class MainBlock extends Component {

    state = {
        imgCarousel: {
            position: 'absolute',
            width: '100%',
        },
        centralBlock: {
            position:'relative',
            flexGrow: 10,
        },
        leftPreviewImg: {
            backgroundColor: '#fff',
        },
        rightPreviewImg: {
            backgroundColor: '#FF1F27',
        },
        buttonNavNext: {
            zIndex:2,
            alignSelf: 'center',
            backgroundColor:'#FF1F27',
            cursor: 'pointer',
            transition: 'padding 300ms',
            padding: '10px 15px 10px 10px',
            ':hover': {
                padding: '10px 5px 10px 10px'
            }
        },
        buttonNavPrev: {
            zIndex:2,
            alignSelf: 'center',
            backgroundColor:'#FFFFFF',
            cursor: 'pointer',
            transition: 'padding 300ms',
            padding: '10px 10px 10px 15px',
            ':hover': {
                padding: '10px 10px 10px 5px',
            }
        },
    }

    updateStyle = () => {
        let block = document.getElementById('imgCarousel');
        if (block !== null) {
            console.log(block.offsetHeight)
            this.setState({
                leftPreviewImg: {
                    height: block.offsetHeight,
                    backgroundColor: '#fff',
                },
                rightPreviewImg: {
                    height: block.offsetHeight,
                    backgroundColor: '#FF1F27',
                },
            })
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateStyle)
        // hack - waiting DOM
        setTimeout(() => {
            //
            this.updateStyle()
            //
            let btnPrev = document.getElementById('btnPrev');
            let btnNext = document.getElementById('btnNext');

            if (btnPrev !== null && btnNext !== null) {
                // console.log('btn success!')
                btnPrev.addEventListener('click',this.carouselRef.previousSlide)
                btnNext.addEventListener('click',this.carouselRef.nextSlide)
            }
            },
            500)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateStyle)
    }

    render() {
        return (
            <React.Fragment>
                <Row styleProperties={{
                    alignItems: 'stretch',
                    flexGrow: 1,
                }}>
                    <Col styleProperties={this.state.leftPreviewImg} dt={1} tb={0} mb={0}>
                        <p className={'textPreview'}>АРЕНДА АВТОМОБИЛЕЙ</p>
                    </Col>
                    <Col styleProperties={this.state.centralBlock} dt={11} tb={12} mb={12}>
                        <Col dt={1} tb={1} mb={1} styleProperties={{
                            flexDirection:'column',
                            alignItems: 'flex-start',
                        }}>
                            <Col dt={1} tb={1} mb={1}></Col>
                            <Col dt={1} tb={1} mb={1}>
                                <Button id={'btnPrev'} styleProperties={this.state.buttonNavPrev}>
                                    <MdChevronLeft color={'gray'} size={30} />
                                </Button>
                            </Col>
                            <Col dt={1} tb={1} mb={1}></Col>
                        </Col>
                        <Col dt={8} tb={8} mb={8} styleProperties={{
                            flexDirection:'column',
                        }} >
                            <Col dt={1} tb={1} mb={1}>
                                <p className={'titleCarousel'}>
                                    АРЕНДА СПЕЦТЕХНИКИ
                                </p>
                            </Col>
                            <Col dt={1} tb={1} mb={1}></Col>
                            <Col dt={1} tb={1} mb={1}></Col>
                        </Col>
                        <Col dt={2} tb={2} mb={2} styleProperties={{
                            flexDirection:'column',
                            alignItems: 'flex-end',
                        }}>
                            <Col dt={1} tb={1} mb={1}></Col>
                            <Col dt={1} tb={1} mb={1}>
                                <Button id={'btnNext'} styleProperties={this.state.buttonNavNext}>
                                    <MdChevronRight color={'gray'} size={30} />
                                </Button>
                            </Col>
                            <Col dt={1} tb={1} mb={1} styleProperties={{

                            }}>
                                <Button text={"Оставить заявку"} styleProperties={{
                                    // position: 'relative',
                                    alignSelf: 'flex-end', // По height
                                    paddingTop: '15px',
                                    paddingBottom: '10px',
                                    paddingRight: '20px',
                                    paddingLeft: '10px',
                                    cursor: 'pointer',
                                    zIndex:2,
                                    backgroundColor:'#FFFFFF',
                                    transition: 'background-color 300ms',
                                    ':hover': {
                                        backgroundColor:'#FF1F27'
                                    },
                                    ':active': {
                                        backgroundColor:'gray',
                                    }
                                }}>
                                    <MdArrowForward color={'#202020'} size={30}/>
                                </Button>
                            </Col>
                        </Col>
                        <Col dt={10} tb={10} mb={10} id={'imgCarousel'} styleProperties={this.state.imgCarousel}>
                            <Carousel
                                afterSlide={a => console.log(a)}
                                ref={carouselRef => {
                                    this.carouselRef = carouselRef
                                    console.log(carouselRef)}}
                                heightMode={'first'}
                                withoutControls={true}>
                                <img src={tempImgForCarousel} alt={""} />
                                <img src={tempImgForCarousel} alt={""} />
                                <img src={tempImgForCarousel} alt={""} />
                            </Carousel>
                        </Col>
                    </Col>
                    <Col styleProperties={this.state.rightPreviewImg} dt={1} tb={0} mb={0}>
                        <p className={'textPreview'}>АРЕНДА СНЕГОПЛАВЕЛЬНЫХ ПУНКТОВ</p>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Radium(MainBlock);
