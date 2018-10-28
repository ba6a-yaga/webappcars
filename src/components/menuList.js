import React from 'react'

const MenuList = props => {
    const style = {
        element: {
            fontFamily: 'HeliosC Bold',
            fontSize: 12,
            color: '#fff',
            marginLeft: 25,
            textDecoration: 'none'
        }
    }
    return (
        <React.Fragment>
        {props.elements.map((e, i) => {
            return (
                <a key={i} style={style.element} href={e.Link}>{e.Name}</a>
            )
        })}
        </React.Fragment>
    )
}

export default MenuList