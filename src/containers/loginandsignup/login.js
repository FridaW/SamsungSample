import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginHide } from '../../actions/action_loginHide';
import{ validation } from '../../actions/action_validation';

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = { username:'', password:'' };
        this.cancelLogIn = this.cancelLogIn.bind(this);
        this.onUsernameInputChange = this.onUsernameInputChange.bind(this);
        this.onPasswordInputChange = this.onPasswordInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    cancelLogIn() {
        this.props.loginHide(false);
    }
    onUsernameInputChange(event) {
        this.setState({ username:event.target.value} );
    }
    onPasswordInputChange(event) {
        this.setState({ password:event.target.value} );
    }
    onFormSubmit(event) {
        event.preventDefault();
        this.props.validation(this.state);
    }
    render() {
        if(this.props.loginHideTerm.loginHide == true){
            return(
                <form onSubmit={ this.onFormSubmit } className="form">
                    <div className="form-group">
                        <span>Username:</span>
                        <input
                            placeholder="Please enter your username"
                            className="form-control input-sm"
                            value={ this.state.username }
                            onChange={ this.onUsernameInputChange } />
                    </div>
                    <span>Password:</span>
                    <input
                        placeholder="Please enter your password"
                        className="form-control input-sm"
                        value={ this.state.password }
                        onChange={ this.onPasswordInputChange }/>
                    <button type="submit" className="btn btn-secondary">Submit</button>
                    <button className="btn" onClick={ this.cancelLogIn }>Cancel</button>
                </form>
            );
        } else {
            return(
                <div></div>
            )
        }
    }
}

function mapDispatcherToProps(dispatch) {
    return bindActionCreators({ loginHide, validation }, dispatch);
}

function mapStateToProps({ loginHideTerm }){
    return { loginHideTerm };
}

export default connect (mapStateToProps, mapDispatcherToProps)(LogIn);
