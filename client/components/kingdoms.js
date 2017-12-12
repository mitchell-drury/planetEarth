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
        axios.get('/api/kingdoms')
        .then(response => {
            //this.setState({kingdoms: response})
            console.log('kingdoms:', response);
        })
    }

    render () {
        return (
            <div>
                <select> 
                <option> Select Kingdom </option>
                {
                    this.state.kingdoms.map((option, index) => {
                        return <option key={index} value={option.name}> option </option>
                    })
                }
                </select>
            </div>
        )
    }
}