import React, { Component } from 'react';
import Navi from '../containers/navigation/navigation'
import DropDown from '../containers/navigation/dropdown'

export default class CombineNavigation extends Component{
    render(){
        return(
            <div className="combine-navigation" >
                <Navi/>
                <DropDown/>
            </div>
        )
    }
}


