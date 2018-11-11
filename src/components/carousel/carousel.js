import React, { Component } from 'react'
import Row from "../grid/grRow"
import Col from "../grid/grCol"
import './carousel.scss'
import Button from "../button/button"
import Radium from 'radium'
import arrow from "../../static/arrow.svg";
import Carousel from 'nuka-carousel';

class MainBlock extends Component {

    state = {
        current: this.props.current
    }

    updateStyle = () => {

    }

    nextCarouselSlide = () => {
        if (this.state.current === 2) {
            this.carouselRef.goToSlide(this.handleCurrentSlide(this.state.current+1))
        }
        this.carouselRef.nextSlide()
    }

    prevCarouselSlide = () => {
        if (this.state.current === 0) {
            this.carouselRef.goToSlide(this.handleCurrentSlide(this.state.current-1))
        }
        this.carouselRef.previousSlide()
    }
    //

    handleCurrentSlide = (n) => {
        if (n < 0) {
            return this.props.title.length-1
        } else if (n > (this.props.title.length-1)) {
            return 0
        } else {
            return n
        }
    }

    componentDidMount() {
        if (this.props.title.length > 0) {
            setTimeout(() => {
                var leftTextPreview = document.getElementById('leftTextPreview')
                var rightTextPreview = document.getElementById('rightTextPreview')
                leftTextPreview.classList.add("animationShowWithoutOpacity")
                rightTextPreview.classList.add("animationShowWithoutOpacity")
            }, 1000)
        }
    }

    componentWillUnmount() {
    }

    render() {
        if (typeof this.props.title !== 'undefined') {
            const current = this.state.current
            return (
                <Row>
                    <Col hd={1} dt={0}/>
                    <Col styleProperties={{justifyContent: 'flex-end'}} hd={1} dt={1} tb={0} mb={0}>
                        <p id={'leftTextPreview'}
                           className={'textPreview'}>{this.props.title[this.handleCurrentSlide(current - 1)]}</p>
                    </Col>
                    <Col hd={8} dt={10} tb={12} mb={12}>
                        <div id={'titleCarousel'} className={'titleCarousel'}>
                            {this.props.title[current]}
                        </div>
                        <div className={'centralBlock-wrapper'}>
                            <Carousel className={'imgCarousel-block'}
                                      afterSlide={a =>
                                          this.setState({
                                              current: a
                                          })
                                      }
                                      ref={carouselRef => {
                                          this.carouselRef = carouselRef
                                      }}
                                      heightMode={'first'}
                                      initialSlideHeight={500}
                                      withoutControls={true}>
                                {this.props.img.map((img, k) => {
                                    return (
                                        <img key={k} src={img} alt={""} />
                                    )
                                })}
                            </Carousel>
                            <Button onClick={this.prevCarouselSlide} id={'btnPrev'} className={'buttonNavPrev'}>
                                <img src={arrow} alt=""/>
                            </Button>
                            <Button onClick={this.nextCarouselSlide} id={'btnNext'} className={'buttonNavNext'}>
                                <img src={arrow} alt=""/>
                            </Button>
                            <Button onClick={this.props.handleClickBtn} text={"Оставить заявку"}
                                    className={'centralBlock-btn'}>
                                <img className={'imgArrow'} alt=""/>
                            </Button>
                        </div>
                    </Col>
                    <Col styleProperties={{justifyContent: 'flex-start', backgroundColor: '#FF1F27'}} hd={1} dt={1}
                         tb={0} mb={0}>
                        <p id={'rightTextPreview'}
                           className={'textPreview'}>{this.props.title[this.handleCurrentSlide(current + 1)]}</p>
                    </Col>
                    <Col hd={1} dt={0}/>
                </Row>
            )
        } return null
    }
}

export default Radium(MainBlock);
