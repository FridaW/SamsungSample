import React, { Component } from 'react';
import Navi from '../containers/navigation/navigation';
import DropDown from '../containers/navigation/dropdown';
import LogIn from '../containers/loginandsignup/login';

export default class CombineNavigation extends Component{
    render(){
        return(
            <div className="combine-navigation" >
                <Navi/>
                <LogIn/>
                <DropDown/>
            </div>
        )
    }
}


