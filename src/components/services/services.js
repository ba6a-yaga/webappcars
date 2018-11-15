import React from 'react'
import Col from "../grid/grCol";
import cardImg from "../../static/card.png";
import Button from "../button/button";
import Row from "../grid/grRow";

class Services extends React.Component {

    render() {
        const initImg = (props) => {
            switch (props.className) {
                case 'card-hor':
                    return (
                        props.card.img !== ''
                            ?
                        props.card.img
                            :
                        cardImg
                    )
                case 'card-ver':
                    return (
                        props.card.img !== ''
                            ?
                        props.card.img
                            :
                        cardImg
                    )
                default:
                    return null
            }
        }

        if (typeof this.props.cardHor !== 'undefined') {
            return (
                <Row styleProperties={{
                    width: '100%',
                }}>
                    <Col hd={2} dt={1} tb={0} mb={0}></Col>
                    <Col hd={8} dt={10} tb={12} mb={12}>
                        <div id={this.props.nameService} className={'block1-wrapper'}>
                            <div className={'block1-title'} dangerouslySetInnerHTML={{__html:this.props.title}} />
                            {this.props.cardHor.map((card,k) => {
                                return (
                                    <div key={k} className={'card-hor' + (k + 1)}>
                                        <p className={'cardName'}>{card.name}</p>
                                        <img alt={''} src={initImg({className:'card-hor',card:card})}/>
                                        <div className={'cardInfo'}>
                                            <p dangerouslySetInnerHTML={{__html:card.desc}} />
                                            <p className={'cardInfo-cost'}>{card.cost}</p>
                                        </div>
                                    </div>
                                )
                            })}
                            {this.props.cardVer.map((card,k) => {
                                return (
                                    <div key={k} className={'card-ver' + (k + 1)}>
                                        <p className={'cardName'}>{card.name}</p>
                                        <img alt={''} src={initImg({className:'card-ver',card:card})}/>
                                        <div className={'cardInfo'}>
                                            <p dangerouslySetInnerHTML={{__html:card.desc}} />
                                            <p className={'cardInfo-cost'}>{card.cost}</p>
                                        </div>
                                    </div>
                                )
                            })}
                            <Button text={"Оставить заявку"}
                                    className={'block1-btn'}
                                    textProperties={{
                                        color: '#FFF',
                                    }}
                                    onClick={this.props.handleBtn}
                            >
                                <img width={80} height={25} className={'imgArrow'} alt={""} />
                            </Button>
                        </div>

                    </Col>
                    <Col hd={2} dt={1} tb={0} mb={0}></Col>
                </Row>
            )
        } return null
    }
}

export default Services