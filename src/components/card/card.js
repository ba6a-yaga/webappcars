import React from 'react'
import cardImg from "../../static/card.png";

const Card = props => {
    return(
        <div className={'card-hor1'}>
            <p></p>
            <img src={cardImg} />
            <div className={'cardInfo'}>
                <p>
                    Модель: 2017 Porsche 911<br />
                    Мощность в лошадиных силах: 450 л.с.<br />
                    Коробка передач: автоматическая<br />
                    Привод: задний<br />
                    Состояние: идеальное<br />
                </p>
                <p className={'cardInfo-cost'}>9 000 руб./сутки</p>
            </div>
        </div>
    )
}