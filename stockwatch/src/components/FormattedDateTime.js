import moment from 'moment';
import React, { Component } from 'react';
import { FormattedDate, FormattedTime } from 'react-intl';

export default
class FormattedDateTime extends Component{

	render(){
	    if (this.props.type === "SHARES" && moment(this.props.timestamp).isSame(Date.now(), 'day')) {
	      return (
	        <div>
	        { this.props.prefix ?
	          <span>kl </span>
	        : "" }
	          <FormattedTime
	            value={new Date(this.props.timestamp)}
	          />
	        </div>
	      )
	    }
	    else 
	    	return (
		      <FormattedDate value={new Date(this.props.timestamp)} />
		    )
	}
}