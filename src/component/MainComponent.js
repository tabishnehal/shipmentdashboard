import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
        shipments: []
    };
  }

  componentDidMount(){
      const token = "tTU3gFVUdP";
      const email = "m.nehal@iiitmanipur.ac.in";
      const headers = {
          'Authorization': `Bearer ${token}`
      };
          axios.post("https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch",{email: email},
          {headers}
          ).then(res => this.setState({
              shipments: res.data
          }))
          .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/home" component={() => <Home shipments={this.state.shipments} /> } />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default Main;