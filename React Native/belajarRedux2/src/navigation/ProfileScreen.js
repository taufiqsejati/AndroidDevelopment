import React from 'react';
import {Profile} from '@containers';



export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <>
       <Profile navigation={this.props.navigation} />
        </>
    )

  }
}
