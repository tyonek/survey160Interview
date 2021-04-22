import React, { Component } from "react";
import { users, devices } from '../../Data/data'
import "./Interview.css";
import Container from '../Container/Container';
class Interview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: users,
      devices: devices,
    };
  }

  

  toggleSelectUser = (index) => {
    this.setState({
      users: this.state.users.map((user, i) => {
        const result =
          i === index ? { ...user, selected: !user.selected } : user;
        return result;
      }),
    });
  };

  toggleSelectDevice = (index) => {
    this.setState({
      devices: this.state.devices.map((device, i) => {
        const result =
          i === index ? { ...device, selected: !device.selected } : device;
        return result;
      }),
    });
  };

  

  render = () => {
    return (
      <div>
        <Container 
        item={this.state.users}
        toggleSelect={this.toggleSelectUser}
        header= {"Users"}
        />
        <Container 
        item={this.state.devices}
        toggleSelect={this.toggleSelectDevice}
        header= {"Devices"}
        />
      </div>
    );
  };
}

export default Interview;
