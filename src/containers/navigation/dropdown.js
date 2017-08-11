import React, { Component } from 'react';
import { connect } from 'react-redux';

class DropDown extends Component {
    constructor(props){
        super(props);
    }
    render () {
        if(this.props.term.term==''||!this.props.term.term){
            return(
                <div></div>
            )
        } else if(this.props.term.term=='MOBILE'){
            return(
                <div>
                    <div className="non-border-split"></div>
                    <div className="nav-table">
                        <table className="LTable">
                            <thead>
                            <tr>
                                <th>MOBILE</th>
                                <th>APPS</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Galaxy Products</td>
                                <td>Bixby</td>
                            </tr>
                            <tr>
                                <td>Phones</td>
                                <td>Smart Swich</td>
                            </tr>
                            <tr>
                                <td>Tablets</td>
                                <td>Samsung Pay</td>
                            </tr>
                            <tr>
                                <td>Wearables</td>
                                <td>Samsung Health</td>
                            </tr>
                            <tr>
                                <td>Virtual Reality</td>
                                <td>Samsung +</td>
                            </tr>
                            <tr>
                                <td>Accessories</td>
                                <td>Shop Samsung App</td>
                            </tr>
                            <tr>
                                <td>Switching to Galaxy</td>
                                <td>Samsung Kids</td>
                            </tr>
                            </tbody>
                        </table>
                        <table className="RTable">
                            <thead>
                                <tr>
                                    <th>FEATURED</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Galaxy S8</td>
                            </tr>
                            <tr>
                                <td>Unlocked by Samsung</td>
                            </tr>
                            <tr>
                                <td>Premium Care</td>
                            </tr>
                            <tr>
                                <td>Galaxy Tab S3</td>
                            </tr>
                            <tr>
                                <td>Galaxy S7</td>
                            </tr>
                            <tr>
                                <th className="Sub-head">SHOP</th>
                            </tr>
                            <tr>
                                <td>Special Offers</td>
                            </tr>
                            <tr>
                                <td>Student Discounts</td>
                            </tr>
                            <tr>
                                <td>Employee Discounts</td>
                            </tr>
                            <tr>
                                <td>Certified Refurbished</td>
                            </tr>
                            <tr>
                                <td>Samsung Financing</td>
                            </tr>
                            <tr>
                                <td>Trade-In Program</td>
                            </tr>
                            </tbody>
                        </table>
                        <img src="http://s7d2.scene7.com/is/image/SamsungUS/GNB_FLYOUT_MOBILE_300"/>
                    </div>
                    <div className="clear-float"></div>
                    <div className="bottom-border-split"></div>
                </div>
            );
        } else if(this.props.term.term=='TV &amp; AUDIO'){
            return(
                <div>
                    <div className="non-border-split"></div>
                    <div className="nav-table">
                        <table className="LTable">
                            <thead>
                            <tr>
                                <th>TVS & HOME THEATER</th>
                                <th>AUDIO</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>TVs</td>
                                <td>Headphones</td>
                            </tr>
                            <tr>
                                <td>Home Theater</td>
                                <td>Wireless Speakers</td>
                            </tr>
                            <tr>
                                <td>Accessories</td>
                                <td>Stereo Shelf System</td>
                            </tr>
                            </tbody>
                        </table>
                        <table className="RTable">
                            <thead>
                            <tr>
                                <th>FEATURED</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>QLED TVs with Quantum Dots</td>
                            </tr>
                            <tr>
                                <td>The Frame</td>
                            </tr>
                            <tr>
                                <td>Serif TV</td>
                            </tr>
                            <tr>
                                <td>4K Ultra HD Blu-ray Player</td>
                            </tr>
                            <tr>
                                <td>Sound+ Soundbar</td>
                            </tr>
                            <tr>
                                <td>Move Collection</td>
                            </tr>
                            <tr>
                                <td>Level On Headphones</td>
                            </tr>
                            <tr>
                                <th className="Sub-head">SHOP</th>
                            </tr>
                            <tr>
                                <td>Special Offers</td>
                            </tr>
                            <tr>
                                <td>Student Discounts</td>
                            </tr>
                            <tr>
                                <td>Student Discounts</td>
                            </tr>
                            <tr>
                                <td>Employee Discounts</td>
                            </tr>
                            <tr>
                                <td>Certified Refurbished</td>
                            </tr>
                            <tr>
                                <td>Samsung Financing</td>
                            </tr>
                            <tr>
                                <td>TV Trade-In Program</td>
                            </tr>
                            </tbody>
                        </table>
                        <img src="http://s7d2.scene7.com/is/image/SamsungUS/FrameTV_GNB-1"/>
                    </div>
                    <div className="clear-float"></div>
                    <div className="bottom-border-split"></div>
                </div>
                    )
        } else if(this.props.term.term=='COMPUTING'){
            return(
                <div>
                    <div className="non-border-split"></div>
                    <div className = "nav-table">
                        <table className ="LTable">
                            <thead>
                            <tr>
                                <th>COMPUTING</th>
                                <th>NETWORKING</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Windows Laptops</td>
                                <td>Whole Home Wi-Fi</td>
                            </tr>
                            <tr>
                                <td>Windows Desktops</td>
                            </tr>
                            <tr>
                                <td>Chromebooks</td>
                            </tr>
                            <tr>
                                <td>Tablets</td>
                            </tr>
                            <tr>
                                <td>Printers</td>
                            </tr>
                            <tr>
                                <td>Moniters</td>
                            </tr>
                            <tr>
                                <td>Memory & Storage</td>
                            </tr>
                            <tr>
                                <td>Accessories</td>
                            </tr>
                            </tbody>
                        </table>
                        <table className ="RTable">
                            <thead>
                            <tr>
                                <th>FEATURED</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Notebook Odyssey</td>
                            </tr>
                            <tr>
                                <td>Galaxy Book</td>
                            </tr>
                            <tr>
                                <td>Galaxy Tab S3</td>
                            </tr>
                            <tr>
                                <td>Chromebook Plus</td>
                            </tr>
                            <tr>
                                <th className="Sub-head">SHOP</th>
                            </tr>
                            <tr>
                                <td>Special Offers</td>
                            </tr>
                            <tr>
                                <td>Student Discounts</td>
                            </tr>
                            <tr>
                                <td>Employee Discounts</td>
                            </tr>
                            <tr>
                                <td>Certified Refurbished</td>
                            </tr>
                            <tr>
                                <td>Samsung Financing</td>
                            </tr>
                            </tbody>
                        </table>
                        <img src="http://s7d2.scene7.com/is/image/SamsungUS/GNB_COMPUTING_FLYOUT"/>
                    </div>
                    <div className="clear-float"></div>
                    <div className="bottom-border-split"></div>
                </div>
            )
        } else if(this.props.term.term=='APPLIANCES'){
            return(
                <div>
                    <div className="non-border-split"></div>
                    <div className ="nav-table">
                        <table className ="LTable">
                            <thead>
                            <tr>
                                <th>HOME APPLIANCES</th>
                                <th>SMART HOME</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Refrigerators</td>
                                <td>Whole Home Wi-Fi</td>
                            </tr>
                            <tr>
                                <td>Ranges</td>
                                <td>Samsung SmartThings</td>
                            </tr>
                            <tr>
                                <td>Wall Ovens</td>
                                <td>Security & Monitoring</td>
                            </tr>
                            <tr>
                                <td>Cooktops & Hoods</td>
                            </tr>
                            <tr>
                                <td>Microwaves</td>
                            </tr>
                            <tr>
                                <td>Dishwashers</td>
                            </tr>
                            <tr>
                                <td>Washers</td>
                            </tr>
                            <tr>
                                <td>Dryers</td>
                            </tr>
                            <tr>
                                <td>Vacuums</td>
                            </tr>
                            <tr>
                                <td>Accessories</td>
                            </tr>
                            </tbody>
                        </table>
                        <table className ="RTable">
                            <thead>
                            <tr>
                                <th>FEATURED</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>FlexWash<sup>TM</sup> + FlexDry<sup>TM</sup></td>
                            </tr>
                            <tr>
                                <td>Connect Home Smart Wi-Fi</td>
                            </tr>
                            <tr>
                                <td>Family Hub<sup>TM</sup> Refrigerator</td>
                            </tr>
                            <tr>
                                <td>AddWash<sup>TM</sup> Washer</td>
                            </tr>
                            <tr>
                                <td>activewash<sup>TM</sup> Washer</td>
                            </tr>
                            <tr>
                                <td>Built-in Appliances</td>
                            </tr>
                            <tr>
                                <th className="Sub-head">SHOP</th>
                            </tr>
                            <tr>
                                <td>Rebates</td>
                            </tr>
                            <tr>
                                <td>Special Offers</td>
                            </tr>
                            <tr>
                                <td>Student Discounts</td>
                            </tr>
                            <tr>
                                <td>Employee Discounts</td>
                            </tr>
                            <tr>
                                <td>Certified Refurbished</td>
                            </tr>
                            </tbody>
                        </table>
                        <img src="http://s7d2.scene7.com/is/image/SamsungUS/Family%20Hub_GNB%20Flyout"/>
                    </div>
                    <div className="clear-float"></div>
                    <div className="bottom-border-split"></div>
                </div>
            )
        }
    }
}

function mapStateToProps({ term }){
    return { term };
}

export default connect(mapStateToProps)(DropDown)

