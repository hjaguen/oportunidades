import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import {
//     Card, CardTitle, CardText, CardActions, Button as ButtonCard,
//     Footer, FooterSection, FooterDropDownSection, FooterLinkList
// } from  'react-mdl';
// // Sharing Attempts
// import {
//   ShareButtons,
//   ShareCounts,
//   generateShareIcon
// } from 'react-share';
import * as conf from './config.jsx';
// import * as info from './addInfo.jsx';
import * as Stylo from './StyledComponents.jsx';

export default class Pedido extends Component {
    constructor(props) {
        super(props);
    }

    render(){
    	return(
			<div className="cart"> 
            	<div className="cart-info">
                	<table>
                    	<tbody>
	                        <tr>
	                            <td>No. of items</td>
	                            <td>:</td>
	                            {/*<td><strong>{this.props.totalItems}</strong></td>*/}
	                            <td><strong></strong></td>
	                        </tr>
	                        <tr>
	                            <td>Sub Total</td>
	                            <td>:</td>
	                            {/*<td><strong>{this.props.total}</strong></td>*/}
	                            <td><strong></strong></td>
	                        </tr>
                    	</tbody>
                	</table>
            	</div>
	            {/*<a className="cart-icon" href="#" onClick={this.handleCart.bind(this)} ref="cartButton">
	                <img className={this.props.cartBounce ? "tada" : " "} src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png" alt="Cart"/>
	                {this.props.totalItems ? <span className="cart-count">{this.props.totalItems}</span> : "" }
	            </a>*/}
	            {/*<div className={this.state.showCart ? "cart-preview active" : "cart-preview"} ref="cartPreview">*/}
	            <div className="cart-preview active" ref="cartPreview">    
	                <div className="action-block">
	                    <button type="button" className=" " >PROCEED TO CHECKOUT</button>
	                </div>
	            </div>
        	</div>
    	)
    }
}
