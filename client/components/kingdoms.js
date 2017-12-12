import React, {Component} from 'react';
import axios from 'axios';

export default class Kingdoms extends Component {
    constructor () {
        super ();
        this.state = {
            kingdoms: []
        }
    }

    componentDidMount () {
        axios.get('./api/kingdoms')
        .then(response => {
            this.setState({kingdoms: response})
        })
    }

    render () {
        return (
            <div>
                <select> 
                {
                    this.state.kingdoms.map((option, index) => {
                        return <option key={index} value={option}> option </option>
                    })
                }
                </select>
            </div>
        )
    }
}