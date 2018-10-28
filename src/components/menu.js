import React from 'react'
import logo from '../static/logo.svg'
import MenuList from './menuList'
import Row from './grid/grRow'
import Col from './grid/grCol'
import Radium from 'radium'

const Menu = () => {

    const style = {
        row: {
            justifyContent: 'space-between',
            height: 80
        },
        left: {
            alignItems: 'center'
        },
        right: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'red',
        },
        logo: {
            width: '50px',
            height: '43px',
        }
    }

    return (
        <Row styleProperties={style.row}>
            <Col tb={1} mb={1}/>
            <Col styleProperties={style.left} mb={5} tb={5}>
                <img style={style.logo} src={logo} />
            </Col>
            <Col styleProperties={style.right} mb={5} tb={5}>
                <MenuList elements={[
                    {Name:"Аренда", Link:"#"},
                    {Name:"О компании", Link:"#"},
                    {Name:"Партнеры", Link:"#"},
                    {Name:"Контакты", Link:"#"}
                ]} />
            </Col>
            <Col tb={1} mb={1}/>
        </Row>
    )
}

export default Radium(Menu)