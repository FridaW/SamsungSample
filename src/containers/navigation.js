import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTerm } from '../actions/action_fetchTerm'

class Navi extends Component {
    constructor(props) {
        super(props);
        this.state = { term:'' };
        this.dropHandle = this.dropHandle.bind(this);
        this.dropClose = this.dropClose.bind(this);
    }
    dropHandle(event) {
        this.props.fetchTerm(event.target.innerHTML);
    }
    dropClose() {
        this.props.fetchTerm("");
    }
    render(){
        return(
            <div className="react-header">
                <nav>
                    <ul className="head-nav">
                        <li><a onMouseEnter={ this.dropHandle }>MOBILE</a></li>
                        <li><a onMouseEnter={ this.dropHandle }>TV & AUDIO</a></li>
                        <li><a onMouseEnter={ this.dropHandle }>COMPUTING</a></li>
                        <li><a onMouseEnter={ this.dropHandle }>APPLIANCES</a></li>
                        <li><a className="ssl">S A M S U N G</a></li>
                        <li><a>SUPPORT</a></li>
                        <li><a>BUSINESS</a></li>
                        <li><a>LOG IN / SIGN UP</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

function mapDispatcherToProps(dispatch) {
    return bindActionCreators({ fetchTerm }, dispatch);
}

export default connect (null, mapDispatcherToProps)(Navi);