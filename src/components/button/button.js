import React from 'react'
import Radium from 'radium'
import './button.scss'
import Row from '../grid/grRow'
import Col from '../grid/grCol'

const Button = (props) => {
    return (
        <Row onClick={props.onClick} id={props.id} className={props.className} styleProperties={{justifyContent:'center',...props.styleProperties}}>
            <Col>
                <p style={(typeof props.text === 'undefined')? ({display:'none'}):{...props.textProperties}} className={'buttonText'}>{props.text}</p>
            </Col>
            <Col>
                {props.children}
            </Col>
        </Row>

    )
}

export default Radium(Button)