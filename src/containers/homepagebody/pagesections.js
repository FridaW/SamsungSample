import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTerm } from '../../actions/action_fetchTerm'
import HomepageFooter from '../../components/footer';

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
                <section className="firstSection">
                    <img src="http://s7d2.scene7.com/is/image/SamsungUS/300_off_Galaxy_BTS_Desktop_080817?$header-jpg$"/>
                    <div>
                        <h1>Back to school <br />saving. $300 off the <br />Galaxy S8 unlocked.</h1>
                        <p>$150 instant saving, plus $150 trade-in credit and bonus AKG headphones.*</p>
                    </div>
                </section>
                <section className="secondSection">
                    <img src="http://s7d2.scene7.com/is/image/SamsungUS/SNA_Summer_S8_Miss_Nothing_dt_20170802?$header-jpg$"/>
                    <div>
                        <h1>Summer-proof.</h1>
                        <p>Brave the elements with water and dust resistance on the Galaxy S8.<sup>1</sup></p>
                    </div>
                </section>
                <section className="thirdSection">
                    <img src="http://s7d2.scene7.com/is/image/SamsungUS/FrameTV_HP_right?$cm-g-fb-full-bleed-img-jpg$"/>
                    <div>
                        <h1>The most beautiful TV <br /> you’ve never seen</h1>
                        <p>Introducing The Frame from Samsung - a revolutionary way to think <br /> about your TV.</p>
                    </div>
                </section>
                <section className="fourthSection">
                    <img src="http://s7d2.scene7.com/is/image/SamsungUS/SmartHome_site_driver?$header-jpg$"/>
                    <div>
                        <h1>Whole home Wi-Fi.</h1>
                        <p>Take ultimate control of your home with Samsung Connect <br /> Home Smart Wi-Fi System, a Wi-Fi router and SmartThings hub <br /> all in one.</p>
                    </div>
                </section>
                <section>
                    <img src="http://s7d2.scene7.com/is/image/SamsungUS/Tease_Desktop_v01_20170721?$header-jpg$"/>
                </section>
                <section className="sixthSection">
                    <img src="http://s7d2.scene7.com/is/image/SamsungUS/Smartswitch_PC_image_right?$cm-g-fb-full-bleed-img-jpg$"/>
                    <div>
                        <h1>Switch to Galaxy,<br /> easily keep your<br /> memories.</h1>
                    </div>
                </section>
                <HomepageFooter/>
            </div>
        )
    }
}

function mapDispatcherToProps(dispatch) {
    return bindActionCreators({ fetchTerm }, dispatch);
}

export default connect (null, mapDispatcherToProps)(HomeSection);