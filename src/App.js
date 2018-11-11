import React, { Component } from 'react'
import HeaderMenuBlock from './components/menu/menu'
import MainBlock from "./components/carousel/carousel";
import Row from './components/grid/grRow'
import Col from './components/grid/grCol'
import './app.scss'
import ModalForm from "./components/modalForm/modalForm";
import SecondSlider from "./components/secondSlider/secondSlider";
import Services from "./components/services/services";
import About from "./components/about/about";
import Partners from "./components/partners/partners";
import Footer from "./components/footer/footer";
import {fetchSecondSlider,activatedMenuList, fetchApp, fetchMenu, fetchService, fetchSlider} from "./store/actions/application";
import {connect} from "react-redux";

class App extends Component {

    ymaps = {}
    modalFormRef = {}

    handleSelectedMenuItem = () => {
        // Выезжающая панель
        this.props.activatedMenuList(this)
    }

    componentWillMount() {
        this.props.fetchService(this)
        this.props.fetchMenu(this)
        this.props.fetchApp(this)
        this.props.fetchSlider(this)
        this.props.fetchSecondSlider(this)
    }


    render() {
        if (this.props.elements.length !== 0) {
            return (
                <React.Fragment>
                    <ModalForm ref={ref => this.modalFormRef = ref}/>
                    <HeaderMenuBlock elements={this.props.elements}/>
                    <MainBlock {...this.props.carousel} handleClickBtn={() => this.modalFormRef.handleOpenModal()}/>
                    <Row>
                        <Col hd={1} dt={1} tb={1} mb={1} styleProperties={{height: 100}}>
                        </Col>
                    </Row>

                    {/*// Второстепенный слайдер*/}
                    {this.props.secondSlider.images.length > 0 ?
                        <React.Fragment>
                            <SecondSlider {...this.props.secondSlider} handleBtn={() => this.modalFormRef.handleOpenModal()}/>
                            <Row>
                                <Col hd={1} dt={1} tb={1} mb={1} styleProperties={{height: 100}}>
                                </Col>
                            </Row>
                        </React.Fragment>
                        : null
                    }

                    {/*// Блок1 Услуги*/}
                    {this.props.services.length > 0 ?
                        this.props.services.map((s,k)=>{
                            return (
                                <React.Fragment key={k}>
                                    <Services {...s} nameService={'block'+(k+1)} handleBtn={() => this.modalFormRef.handleOpenModal()}/>
                                    <Row>
                                        <Col dt={1} tb={1} mb={1} styleProperties={{height: 100}}>
                                        </Col>
                                    </Row>
                                </React.Fragment>
                            )
                        })
                         : null
                    }

                    {/*// О компании*/}
                    <About {...this.props.about}/>
                    <Row>
                        <Col hd={1} dt={1} tb={1} mb={1} styleProperties={{height: 100}}>
                        </Col>
                    </Row>

                    {/*// Партнеры*/}
                    <Partners {...this.props.partners}/>
                    <Row>
                        <Col hd={1} dt={1} tb={1} mb={1} styleProperties={{height: 100}}>
                        </Col>
                    </Row>

                    {/*// Футер*/}
                    <Footer {...this.props.contacts} elements={this.props.elements}/>
                </React.Fragment>
            )
        } else return null
    }
}

function mapStateToProps(state) {
    return {
        elements: state.app.elements,
        about: state.app.about,
        partners: state.app.partners,
        contacts: state.app.contacts,
        carousel: state.app.carousel,
        services: state.app.services,
        secondSlider: state.app.secondSlider,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchApp: (ctx) => dispatch(fetchApp(ctx)),
        fetchSlider: (ctx) => dispatch(fetchSlider(ctx)),
        fetchSecondSlider: (ctx) => dispatch(fetchSecondSlider(ctx)),
        fetchMenu: (ctx) => dispatch(fetchMenu(ctx)),
        activatedMenuList: (ctx) => dispatch(activatedMenuList(ctx)),
        fetchService: (ctx) => dispatch(fetchService(ctx))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)

