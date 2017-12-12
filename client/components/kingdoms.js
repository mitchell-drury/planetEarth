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
        axios.get('/api/kingdoms/')
        .then(response => {
            //this is where the state of the component should get set, but the api route is not working correctly at the moment
            
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