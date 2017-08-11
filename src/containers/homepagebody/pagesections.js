import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTerm } from '../../actions/action_fetchTerm'

export class HomeSection extends Component{
    constructor(props) {
        super(props);
        this.dropClose = this.dropClose.bind(this);
    }

    dropClose() {
        this.props.fetchTerm("");
    }

    render() {
        return(
            <div className="HomeSection-div" onMouseEnter={ this.dropClose }>
                <section>
                    <img src="http://s7d2.scene7.com/is/image/SamsungUS/300_off_Galaxy_BTS_Desktop_080817?$header-jpg$"/>
                </section>
                <section>
                    <img src="http://s7d2.scene7.com/is/image/SamsungUS/SNA_Summer_S8_Miss_Nothing_dt_20170802?$header-jpg$"/>
                </section>
                <section>
                    <img src="http://s7d2.scene7.com/is/image/SamsungUS/FrameTV_HP_right?$cm-g-fb-full-bleed-img-jpg$"/>
                </section>
                <section>
                    <img src="http://s7d2.scene7.com/is/image/SamsungUS/SmartHome_site_driver?$header-jpg$"/>
                </section>
                <section>
                    <img src="http://s7d2.scene7.com/is/image/SamsungUS/Tease_Desktop_v01_20170721?$header-jpg$"/>
                </section>
                <section>
                    <img src="http://s7d2.scene7.com/is/image/SamsungUS/Smartswitch_PC_image_right?$cm-g-fb-full-bleed-img-jpg$"/>
                </section>

            </div>
        )
    }
}

function mapDispatcherToProps(dispatch) {
    return bindActionCreators({ fetchTerm }, dispatch);
}

export default connect (null, mapDispatcherToProps)(HomeSection);