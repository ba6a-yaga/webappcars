import React from 'react'
import logo from '../../static/logo.svg'
import MenuList from './menuList'
import Row from '../grid/grRow'
import Col from '../grid/grCol'
import './menu.scss'

class Menu extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            elements:[],

        }
    }

    handleSelectedMenuItem = () => {
        // Выезжающая панель
    }

    componentWillMount() {
        this.setState({
            elements: [
                {name: "Аренда", link: "#", isElementSelect:true, active:false, handleClick:this.handleSelectedMenuItem},
                {name: "О компании", link: "#"},
                {name: "Партнеры", link: "#"},
                {name: "Контакты", link: "#"},
            ]
        })
    }

    render() {
        const style = {
            rowMenu: {
                justifyContent: 'space-between',
                height: 80
            },
            leftMenu: {
                alignItems: 'center'
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
                    <Col dt={1} tb={1} mb={0}/>
                    <Col styleProperties={style.leftMenu} mb={4} tb={4} dt={4}>
                        <img className={'logo'} src={logo} alt={''}/>
                    </Col>
                    <Col styleProperties={style.rightMenu} mb={4} tb={4} dt={4}>
                        <MenuList elements={this.state.elements}/>
                    </Col>
                    <Col dt={1} tb={1} mb={0} styleProperties={{backgroundColor:'#FF1F27'}}></Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Menu