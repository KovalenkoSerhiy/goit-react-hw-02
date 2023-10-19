import { Component } from "react";
import { usersData} from "../data/users";
import { Button } from "components/Button/Button"

export class App extends Component {
  state ={
    users: usersData,
    isListShow: false,
  }

  showList = () =>{
    this.setState({
      isListShow: true,
    }) 
  }

  render() {
    return
    <Button text="Show list of users"/>
  }
};
