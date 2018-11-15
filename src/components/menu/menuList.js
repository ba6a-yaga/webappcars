import React from 'react'
import {MdArrowDropDown,MdArrowDropUp} from 'react-icons/md'

class MenuList extends React.Component {

    scrollTo = (id) => {
        if (id !== "") {
            console.log("id", id)
            let element = document.getElementById(id)
            element.scrollIntoView({block: "start", behavior: "smooth"})
        }
    }

    render() {
        if (typeof this.props.elements !== 'undefined') {
            const position = this.props.position
            return (
                <div className={'menuList-wrapper'}
                     style={Boolean(this.props.size) ? {gridTemplateColumns: 'repeat(4, minmax(' + this.props.size + 'px, 1fr))'} : null}>
                    {this.props.elements.map((e, i) => {
                        return (
                            <div className={'menuList'} key={i}>
                                {Boolean(e.isElementSelect)
                                    ?
                                    <button id={'isElementSelect'} onClick={e.handleClick}
                                            className={Boolean(e.active) ? 'active' : 'simple'}>{e.name}
                                    </button>
                                    :
                                    <button onClick={()=>{this.scrollTo(e.link)}}
                                       className={Boolean(e.active) ? 'active' : 'withoutSelect'}>{e.name}
                                    </button>
                                }
                                {e.active
                                    ?
                                    <React.Fragment>
                                        <div className={'popuperTitle'}></div>
                                        <div className={position === 'bottom' ? 'popuperBodyBottom' : 'popuperBodyTop'}>
                                            <div className={'subMenuList'}>
                                                {e.subElements.map((s, k) => {
                                                    return (
                                                        <button key={k} onClick={()=>this.scrollTo(s.link)}>
                                                            {s.name}
                                                        </button>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <MdArrowDropUp className={'arrowDrop-active'} size={22}/>
                                    </React.Fragment>
                                    : e.isElementSelect
                                        ?
                                        <MdArrowDropDown size={22} className={'arrowDrop'}/>
                                        : null
                                }
                            </div>
                        )
                    })}
                </div>
            )
        } else return null
    }
}

export default MenuList