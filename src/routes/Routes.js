import React, { Component } from 'react';
import {Container,TextField,Card,CardHeader,CardContent,Typography,Button,} from '@material-ui/core';
import axios from 'axios';

export class Home extends Component {
  render() {
    return (
      <Container>
        <Card></Card>
      </Container>
    );
  }
}


export class TestEndpoint extends Component {
  constructor() {
    super();
    this.state = { message: null };
    console.log('constructing');
  }

  callBackend() {
    axios.get('https://jeap-backend.herokuapp.com//test').then(r => {
      console.log(r);
      this.setState({ message: r.data});
    }).catch(()=>{
      this.setState({message:"Failed to Issue AJAX Request."});
    });
  }

  render() {
    return (
      <Container>
        <Card>
          <CardHeader>Ajax Request Response</CardHeader>
          <CardContent>
            <Button onClick={()=>{this,this.callBackend()}}>Perform Request</Button>
            <Typography style={{ textAlign: 'center' }}>
              {this.state.message != null ? this.state.message : null}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    );
  }
}




export class TruckSearch extends Component {
  render() {
    return (
      <Container>
        <h1>
          No Truck Currently Selected
        </h1>
        <Card>
          <CardHeader title="Find New Truck"></CardHeader>
          <CardContent>
            <TextField required label="Price Range"></TextField> <br />
            <TextField required label="Food Type"></TextField> <br />
            <Button variant="contained">Search</Button>
          </CardContent>
        </Card>
      </Container>
    );
  }
}
