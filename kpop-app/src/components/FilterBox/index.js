import React, {Component, Fragment} from 'react';
import './filterBox.css';

export default class FilterBox extends Component{

    render() {
        return(<Fragment>
            <div className="FilterBox d-flex flex-column">
                <span>Filter: </span>
                <input name="filterText" onChange={this.props.updateFilter}/>
            </div>
        </Fragment>)
    }
}