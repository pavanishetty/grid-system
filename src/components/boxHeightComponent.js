import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'


const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        height: '100px' //height of box
    }
})

class BoxHeightComponent extends Component {
    render() {
        const { classes, rowSpacing } = this.props

        return (
            <div>
                <Paper
                    className={classes.paper}
                    style={{ margin: rowSpacing }}>{rowSpacing ? '' : 'Grid Cell'}</Paper>
            </div >
        )
    }
}

BoxHeightComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    rowSpacing: PropTypes.string
}

export default withStyles(styles)(BoxHeightComponent)