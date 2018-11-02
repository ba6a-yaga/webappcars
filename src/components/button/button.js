import React from 'react'
import Radium from 'radium'
import './button.scss'
import Row from '../grid/grRow'
import Col from '../grid/grCol'

const Button = (props) => {
    return (
        <Row id={props.id} className={props.className} styleProperties={{...props.styleProperties}}>
            <Col dt={1} tb={1} mb={1}>
                <p style={(typeof props.text === 'undefined')? ({display:'none'}):{...props.textProperties}} className={'buttonText'}>{props.text}</p>
            </Col>
            <Col dt={1} tb={1} mb={1}>
                {props.children}
            </Col>
        </Row>

    )
}

export default Radium(Button)