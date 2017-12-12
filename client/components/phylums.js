import React, {Component} from 'react';
import axios from 'axios';

export default class Phylums extends Component {
    constructor () {
        super ();
        this.state = {
            phylums: []
        }
    }

    // componentDidMount () {
    //     axios.get('./api/kingdoms')
    //     .then(response => {
    //         this.setState({kingdoms: response})
    //     })
    // }

    render () {
        return (
            <div>
                phylums
            </div>
        )
    }
}