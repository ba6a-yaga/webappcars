import React from 'react'
import {MdArrowDropDown,MdArrowDropUp} from 'react-icons/md'

const MenuList = props => {
    return (
        <React.Fragment>
        {props.elements.map((e, i) => {
            return (
                <React.Fragment key={i}>
                    <a className={'col-menuList'} href={e.link} onClick={e.handleClick}>{e.name}</a>
                    {e.active
                        ? <MdArrowDropUp size={22} style={{color:'#fff', marginTop:-5}} />
                        :e.isElementSelect
                            ? <MdArrowDropDown size={22} style={{color:'#fff', marginTop:-5}} />
                            : null
                    }
                </React.Fragment>
            )
        })}
        </React.Fragment>
    )
}

export default MenuList