import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

import BoxComponent from './boxHeightComponent'
import RowComponent from './rowsComponet'

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    }
})

class InputBoxesComponent extends Component {
    state = {
        rows: '',
        columns: '',
        rowSpace: '',
        columnSpace: '',
        flag: false
    }

    handleChange = e => {
        if (e.target.value) {
            this.setState({ [e.target.id]: e.target.value, flag: true })
        }
        else {
            this.setState({ [e.target.id]: '', flag: false })
        }
    }

    render() {
        const { classes } = this.props
        const { rows, columns, rowSpace, columnSpace, flag } = this.state
        return (
            <div>
                <TextField
                    id="rows"
                    label="No. of Rows"
                    placeholder="No. of Rows"
                    className={classes.textField}
                    value={rows}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="columns"
                    label="Columns String"
                    placeholder="Columns String"
                    className={classes.textField}
                    value={columns}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="rowSpace"
                    label="Space between rows"
                    placeholder="Space between rows"
                    className={classes.textField}
                    value={rowSpace}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="columnSpace"
                    label="Space between boxes"
                    placeholder="Space between boxes"
                    className={classes.textField}
                    value={columnSpace}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                />
                {false && <BoxComponent rowSpacing={rowSpace} />}
                {flag ? <RowComponent rows={rows} columnStr={columns} columnSpace={columnSpace} /> : ''}
            </div>
        )
    }
}

InputBoxesComponent.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(InputBoxesComponent)