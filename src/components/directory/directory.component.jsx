import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import sections from '../../config/sections.data';
import './directory.styles.scss';

class Directory extends Component {
    constructor() {
        super();
        this.state = { sections };
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({id, ...restOf}) => <MenuItem key={id} {...restOf} />)}
            </div>
        );
    }
}

export default Directory;