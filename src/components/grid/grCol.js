import React from 'react'
import Radium, {StyleRoot,Style} from 'radium'

const Col = (props) => {

    let rules = {
        '.col': {
            display: 'flex',
            width: props.tb*10 + 'vw',
            ...props.styleProperties
        },
        mediaQueries: {
            '(max-width: 980px)': {
                '.col': {
                    width: (typeof props.tb == 'number' && props.tb > 0) ? props.tb*10 + 'vw' : '100vw',
                    backgroundColor: 'gray'
                }
            },
            '(max-width: 450px)': {
                '.col': {
                    width: (typeof props.mb == 'number' && props.mb > 0) ? props.mb*10 + 'vw' : '100vw',
                    backgroundColor: 'blue'
                }
            }
        }
    }

    return (
        <React.Fragment >
            <div className={'col'}>
                {props.children}
            </div>
            <Style
                rules={rules}
            />
        </React.Fragment>
    )
}

export default Col