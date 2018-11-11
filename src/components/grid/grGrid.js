import React from 'react'
import './grid.scss'

export default class GrGrid extends React.Component {
    render () {
        return (
            <div className={'mainWrapper'}>
                {this.props.children}
            </div>
        )
    }
}