import React from 'react'
import Col from "../grid/grCol";
import Carousel from "nuka-carousel";
import Button from "../button/button";
import Row from "../grid/grRow";
import arrow from "../../static/arrow.svg";

class SecondSlider extends React.Component {

    nextCarouselSlide = () => {
        this.carouselRef.nextSlide()
    }

    prevCarouselSlide = () => {
        this.carouselRef.previousSlide()
    }

    render() {
        return (
            <Row styleProperties={{
                width: '100%',
            }}>
                <Col hd={2} dt={1} tb={0} mb={0}></Col>
                <Col hd={8} dt={10} tb={12} mb={12}>
                    <div id="subSlider" className={'secondSlider-wrapper'}>
                        <div className={'secondSlider-title'} dangerouslySetInnerHTML={{__html:this.props.title}} />
                        <div className={'secondSlider-desc'} dangerouslySetInnerHTML={{__html:this.props.desc}} />
                        <div className={'secondSlider-cost'} dangerouslySetInnerHTML={{__html:this.props.cost}} />
                        <div className={'secondSlider-img'}>
                            <Carousel className={'imgCarousel-block'}
                                      ref={carouselRef => {
                                          this.carouselRef = carouselRef
                                      }}
                                      heightMode={'first'}
                                      withoutControls={true}>
                                {this.props.images.map((img, key)=>{
                                    return (
                                        <img key={key} alt={''} src={img}/>
                                    )
                                })}
                            </Carousel>
                        </div>
                        <Button onClick={this.prevCarouselSlide} className={'secondSlider-btnLeft'}>
                            <img src={arrow} alt="" />
                        </Button>
                        <Button  onClick={this.nextCarouselSlide} className={'secondSlider-btnRight'}>
                            <img src={arrow} alt="" />
                        </Button>
                        <Button text={"Оставить заявку"}
                                className={'secondSlider-btnMain'}
                                textProperties={{
                                    color: '#FFF',
                                }}
                                onClick={this.props.handleBtn}
                        >
                            <img className={'imgArrow'} alt={""} />
                        </Button>
                    </div>
                </Col>
                <Col hd={2} dt={1} tb={0} mb={0}></Col>
            </Row>
        )
    }
}

export default SecondSlider