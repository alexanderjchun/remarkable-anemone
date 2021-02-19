import React from 'react';
import _ from 'lodash';

import Action from './Action';


export default class SectionActions extends React.Component {
    render() {
        const actions = _.get(this.props, 'actions');
        return _.map(actions, (action, idx) => <Action key={idx} action={action} />);
    }
}