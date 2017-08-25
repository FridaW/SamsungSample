import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTerm } from '../../actions/action_fetchTerm'


class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = { username:'', password:'' };
        this.dropClose = this.dropClose.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    dropClose() {
        this.props.fetchTerm("");
    }

    render() {
        return(
            <form onSubmit={ this.onFormSubmit } className="form" onMouseEnter={ this.dropClose }>
                <div className="form-group">
                    <span>Username:</span>
                    <input
                        placeholder="Please enter your username"
                        className="form-control input-sm"
                        value={ this.state.username }
                     />
                </div>
                <span>Password:</span>
                <input
                    placeholder="Please enter your password"
                    className="form-control input-sm"
                    value={ this.state.password }
                 />
                <span>Email:</span>
                <input
                    placeholder="Please enter your email address"
                    className="form-control input-sm"
                    value={ this.state.password }
                 />
                <span>Phone number:</span>
                <input
                    placeholder="Please enter your phone number"
                    className="form-control input-sm"
                    value={ this.state.password }
                />
                <span>Address:</span>
                <input
                    placeholder="Please enter your password"
                    className="form-control input-sm"
                    value={ this.state.password }
                />
                <span>Password:</span>
                <input
                    placeholder="Please enter your password"
                    className="form-control input-sm"
                    value={ this.state.password }
                    onChange={ this.onPasswordInputChange }/>
                <span>Password:</span>
                <input
                    placeholder="Please enter your password"
                    className="form-control input-sm"
                    value={ this.state.password }
                    onChange={ this.onPasswordInputChange }/>
                <span>Password:</span>
                <input
                    placeholder="Please enter your password"
                    className="form-control input-sm"
                    value={ this.state.password }
                    onChange={ this.onPasswordInputChange }/>
                <span>Password:</span>
                <input
                    placeholder="Please enter your password"
                    className="form-control input-sm"
                    value={ this.state.password }
                    onChange={ this.onPasswordInputChange }/>
                <span>Password:</span>
                <input
                    placeholder="Please enter your password"
                    className="form-control input-sm"
                    value={ this.state.password }
                    onChange={ this.onPasswordInputChange }/>
                <span>Password:</span>
                <input
                    placeholder="Please enter your password"
                    className="form-control input-sm"
                    value={ this.state.password }
                    onChange={ this.onPasswordInputChange }/>
                <span>Password:</span>
                <input
                    placeholder="Please enter your password"
                    className="form-control input-sm"
                    value={ this.state.password }
                    onChange={ this.onPasswordInputChange }/>
                <span>Password:</span>
                <input
                    placeholder="Please enter your password"
                    className="form-control input-sm"
                    value={ this.state.password }
                    onChange={ this.onPasswordInputChange }/>
                <span>Password:</span>
                <input
                    placeholder="Please enter your password"
                    className="form-control input-sm"
                    value={ this.state.password }
                    onChange={ this.onPasswordInputChange }/>
                <span>Password:</span>
                <input
                    placeholder="Please enter your password"
                    className="form-control input-sm"
                    value={ this.state.password }
                    onChange={ this.onPasswordInputChange }/>
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
    }
}

function mapDispatcherToProps(dispatch) {
    return bindActionCreators({ fetchTerm }, dispatch);
}


export default connect (null, mapDispatcherToProps)(SignUpPage);
