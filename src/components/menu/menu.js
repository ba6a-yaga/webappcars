import React from 'react'
import logo from '../../static/logo.svg'
import MenuList from './menuList'
import Row from '../grid/grRow'
import Col from '../grid/grCol'
import './menu.scss'

class Menu extends React.Component {

    render() {
        const style = {
            rowMenu: {
                height: 80
            },
            leftMenu: {
                alignItems: 'center',
                justifyContent: 'flex-start'
            },
            rightMenu: {
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FF1F27',
            },
            leftPreviewImg: {
                height: 470,
                backgroundColor: '#fff',
            },
            rightPreviewImg: {
                height: 470,
                backgroundColor: '#FF1F27',
            }
        }
        return (
            <React.Fragment>
                <Row styleProperties={style.rowMenu} className={'row-menu'}>
                    <Col hd={1} />
                    <Col hd={1} dt={1} tb={0} mb={0}/>
                    <Col styleProperties={style.leftMenu} hd={4} dt={5} tb={6} mb={5}>
                        <img className={'logo'} src={logo} alt={''}/>
                    </Col>
                    <Col styleProperties={style.rightMenu} hd={4} mb={0} tb={6} dt={5}>
                        <MenuList position={'bottom'} size={100} elements={this.props.elements}/>
                    </Col>
                    <Col hd={0} dt={0} tb={0} mb={5}/>
                    <Col hd={1} dt={1} tb={0} mb={0} styleProperties={{backgroundColor: '#FF1F27'}}></Col>
                    <Col hd={1} />
                </Row>
            </React.Fragment>
        )
    }
}

export default Menu