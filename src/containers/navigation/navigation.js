import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTerm } from '../../actions/action_fetchTerm'

class Navi extends Component {
    constructor(props) {
        super(props);
        this.state = { term:'' };
        this.dropHandle = this.dropHandle.bind(this);
    }
    dropHandle(event) {
        this.props.fetchTerm(event.target.innerHTML);
    }

    render(){
        return(
            <div className="react-header">
                <nav>
                    <ul className="head-nav">
                        <li><a className="LLiA" onMouseEnter={ this.dropHandle }>MOBILE</a></li>
                        <li><a className="LLiA" onMouseEnter={ this.dropHandle }>TV & AUDIO</a></li>
                        <li><a className="LLiA" onMouseEnter={ this.dropHandle }>COMPUTING</a></li>
                        <li><a className="LLiA" onMouseEnter={ this.dropHandle }>APPLIANCES</a></li>
                        <li className="liSsl"><a className="ssl">S A M S U N G</a></li>
                        <li><a className="RLiA">SUPPORT</a></li>
                        <li><a className="RLiA">BUSINESS</a></li>
                        <li><a className="RLiA">LOG IN / SIGN UP</a></li>
                        <li><img src="../../resources/icon/SearchIcon.png"/></li>
                        <li><img src="../../resources/icon/ShoppingCart.png"/></li>
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