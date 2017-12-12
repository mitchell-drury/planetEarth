import React, {Component} from 'react';
import Kingdoms from './kingdoms';
import Phylums from './phylums';

export default class Main extends Component {
    constructor () {
        super ();
    }

    render () {
        return (
            <div>
                Planet Earth
                <Kingdoms />
                <Phylums />
            </div>
        )
    }
}