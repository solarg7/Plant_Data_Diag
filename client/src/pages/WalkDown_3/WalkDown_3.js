import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import "./WalkDown_3.css";

class Variables extends Component {
  state = {
    variables: [],
    assetName: "",
    assetLocation: "",
    assetE_U: ""
    ,
    upperRange: ""
    ,
    lowerRange: ""
    // ,
    // alarm_1:[
    //   {alarmValue1: ""},
    //   {alarmType: ""}]
  };

  componentDidMount() {
    this.loadVariables();
  }

  loadVariables = () => {
    API.getVariables()
      .then(res =>
        this.setState({ variables: res.data, assetName: "", assetLocation: "", assetE_U: "",
        upperRange: "",
        lowerRange: "",
        alarmValue1: "",
        alarmType: ""  
        })
      )
      .catch(err => console.log(err));
  };

  deleteVariable = id => {
    API.deleteVariable(id)
      .then(res => this.loadVariables())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.assetName && this.state.assetLocation&&this.state.assetE_U) {
      API.saveVariable({
        assetName: this.state.assetName,
        assetLocation: this.state.assetLocation,
        assetE_U: this.state.assetE_U,


        upperRange: this.state.upperRange,
        lowerRange: this.state.lowerRange,
        alarmValue1: this.state.alarmValue1,
        alarmType: this.state.alarmType
      })




        .then(res => this.loadVariables())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>

          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1 id="titulo1">Click on to Submit a Data Measurement</h1>
            </Jumbotron>
            {this.state.variables.length ? (
              <List>
                {this.state.variables.map(variable => (
                  <ListItem key={variable._id}>
                    <Link to={"/historics/" + variable._id}>
                      <strong>
                        {variable.assetName} by {variable.alarmType} :{variable.alarmValue1}  
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteVariable(variable._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Variables;
