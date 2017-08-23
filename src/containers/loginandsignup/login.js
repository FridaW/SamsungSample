import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginHide } from '../../actions/action_loginHide';

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.cancelLogIn = this.cancelLogIn.bind(this);

    }
    cancelLogIn() {
        this.props.loginHide(0);
    }
    render() {
        if(this.props.loginHideTerm.loginHide == 1){
            return(
                <div>
                    <label>Username:</label>
                    <input type="text" />
                    <label>Password:</label>
                    <input type="password" />
                    <button>Submit</button>
                    <button onClick={ this.cancelLogIn }>Cancel</button>
                </div>
            );
        } else {
            return(
                <div></div>
            )
        }
    }
}

function mapDispatcherToProps(dispatch) {
    return bindActionCreators({ loginHide }, dispatch);
}

function mapStateToProps({ loginHideTerm }){
    return { loginHideTerm };
}

export default connect (mapStateToProps, mapDispatcherToProps)(LogIn);
