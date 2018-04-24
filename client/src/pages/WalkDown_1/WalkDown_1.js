import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import "./WalkDown_1.css";

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
        lowerRange: ""
        // ,
        // alarm_1:[
        //   {alarmValue1: ""},
        //   {alarmType: ""}]  
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
        lowerRange: this.state.lowerRange
        // ,
        // alarm_1:[{alarmValue1: this.state.alarm_1.alarmValue1}, {alarmType: this.state.alarm_1.alarmType}]
      })




        .then(res => this.loadVariables())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-4">
            <Jumbotron>
              <h1 id="titulo">Add a New Reading Point</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.assetName}
                onChange={this.handleInputChange}
                name="assetName"
                placeholder="Variable Name (required)"
              />
              <Input
                value={this.state.assetLocation}
                onChange={this.handleInputChange}
                name="assetLocation"
                placeholder="Location (required)"
              />
              <Input
                value={this.state.assetE_U}
                onChange={this.handleInputChange}
                name="assetE_U"
                placeholder="e.u. (required)"
              />
              <Input
                value={this.state.upperRange}
                onChange={this.handleInputChange}
                name="upperRange"
                placeholder="max range (required)"
              />
              <Input
                value={this.state.lowerRange}
                onChange={this.handleInputChange}
                name="lowerRange"
                placeholder="min range (required)"
              />
              {/* <Input
                value={this.state.alarm_1.alarmValue1}
                onChange={this.handleInputChange}
                name="alarm_1.alarmValue1"
                placeholder="Limit Value (required)"
              />              
              <Input
                value={this.state.alarm_1.alarmType}
                onChange={this.handleInputChange}
                name="alarm_1.alarmType"
                placeholder="Limiter Type (required)"
              />   */}
              {/* <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              /> */}
              <FormBtn
                disabled={!(this.state.assetName && this.state.assetLocation&&this.state.assetE_U)}
                onClick={this.handleFormSubmit}
              >
                Submit Variable
              </FormBtn>
            </form>
          </Col>
          <Col size="md-8 sm-12">
            <Jumbotron>
              <h1 id="titulo1">Click on to Edit a Reading Point</h1>
            </Jumbotron>
            {this.state.variables.length ? (
              <List>
                {this.state.variables.map(variable => (
                  <ListItem key={variable._id}>
                    <Link to={"/variables/" + variable._id}>
                      <strong>
                        {variable.assetName} by {variable.lowerRange} :{variable.assetE_U}  
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
