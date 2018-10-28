import React from 'react'

const Row = (props) => {
    let style = {
        grRow: {
            display: 'flex',
            flexDirection: 'row',
            border: 'solid 1px #000'
        }
    }

    if (props.styleProperties !== null) {
        style.grRow = Object.assign({}, style.grRow, props.styleProperties)
    }

    return (
        <div style={style.grRow}>
            {props.children}
        </div>
    )
}

export default Row