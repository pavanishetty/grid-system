import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import BoxHeight from './boxHeightComponent'

const styles = () => ({
    root: {
        flexGrow: 1
    },
    demo: {
        height: 240
    }
})

class RowsComponent extends Component {
    state = {
        direction: 'row',
        justify: 'center',
        alignItems: 'center'
    }

    render() {
        const { classes, rows, columnSpace, columnStr } = this.props
        const { alignItems, direction, justify } = this.state
        const rowLength = Number(rows)
        const rowArr = [...new Array(rowLength).keys()]
        const columns = columnStr.split(',')
        const boxSpace = Number(columnSpace.substr(0, columnSpace.length - 2))
        let i = 0

        return (
            <Grid container className={classes.root}>
                <Grid item xs={12}>
                    <Grid
                        container
                        spacing={boxSpace}
                        className={classes.demo}
                        alignItems={alignItems}
                        direction={direction}
                        justify={justify} >

                        {columns.length === rowLength ?
                            rowArr.map(() => (
                                [...new Array(Number(columns[i++])).keys()].map(v => (
                                    <Grid key={v} item xs={12 / Number((columns[i - 1]))}>
                                        <BoxHeight styles={{ margin: '10px' }} />
                                    </Grid>
                                ))
                            )) : ''}
                    </Grid>
                </Grid>
            </Grid>
        )

    }
}

RowsComponent.propTypes = {
    classes: PropTypes.object.isRequired
}

RowsComponent.defaultProps = {
    spacing: '8',
    rows: '1',
    columnSpace: '8px'
}

export default withStyles(styles)(RowsComponent)