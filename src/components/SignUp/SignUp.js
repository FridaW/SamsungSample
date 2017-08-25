import React, { Component } from 'react';
import CombineNavigation from '../Homepage/combine_navigation';
import SignUpPage from '../../containers/loginandsignup/signup'

export default class SignUp extends Component {
    render() {
        return (
            <div className="sub-container">
                <CombineNavigation/>
                <SignUpPage/>
            </div>
        );
    }
}
