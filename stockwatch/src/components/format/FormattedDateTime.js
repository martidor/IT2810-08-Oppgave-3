import moment from 'moment';
import React, { Component } from 'react';
import { FormattedDate, FormattedTime } from 'react-intl';

export default class FormattedDateTime extends Component{

  /*
    This component shows either a date or time, based on props
  */

  render(){
    let possiblePrefix;
    if (this.props.prefix)
      possiblePrefix = (<span>kl </span>);

      // If it is a share and the date is today, show minutes
      if (this.props.type === "SHARES" && moment(this.props.timestamp).isSame(Date.now(), 'day'))
        return (
          <div>
            {possiblePrefix}
            <FormattedTime
              value={new Date(this.props.timestamp)}
            />
          </div>
        )
      // Otherwise, show a date
      else
        return (
          <FormattedDate value={new Date(this.props.timestamp)} />
        )
  }
}
