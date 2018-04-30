import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import "./WalkDown_1.css";

import {BootstrapTable, 
  TableHeaderColumn} from 'react-bootstrap-table';

class Variables extends Component {
  state = {
    variables: [],
    assetName: "",
    assetLocation: "",
    assetE_U: ""
    ,
    upperRange: ""
    ,
    lowerRange: "",
    alarmValue1: "",
    alarmType: "",
    historical:""
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
        alarmType: "",
        historical:""
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
          <Col size="md-4">
            <Jumbotron>
              <h1 id="titulo">Add a New Asset</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.assetName}
                onChange={this.handleInputChange}
                name="assetName"
                placeholder="Asset Name (required)"
              />
              <Input
                value={this.state.assetLocation}
                onChange={this.handleInputChange}
                name="assetLocation"
                placeholder="Asset Location (required)"
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
                placeholder="Max Range (required)"
              />
              <Input
                value={this.state.lowerRange}
                onChange={this.handleInputChange}
                name="lowerRange"
                placeholder="Min Range (required)"
              />
              <Input
                value={this.state.alarmValue1}
                onChange={this.handleInputChange}
                name="alarmValue1"
                placeholder="Limit Value (required)"
              />              
              <Input
                value={this.state.alarmType}
                onChange={this.handleInputChange}
                name="alarmType"
                placeholder="Limiter Type (required)"
              />  
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
                Submit Asset
              </FormBtn>
            </form>
          </Col>
          <Col size="md-8 sm-12">
            <Jumbotron>
              <h1 id="titulo1">Click the asset to Edit</h1>
            </Jumbotron>
            <div>
            <BootstrapTable data={this.state.variables}>
              <TableHeaderColumn isKey dataField='assetLocation'>
                ID
              </TableHeaderColumn>
              <TableHeaderColumn dataField='assetName'>
                Name
              </TableHeaderColumn>
              <TableHeaderColumn dataField='assetE_U'>
                engineering unit
              </TableHeaderColumn>
              <TableHeaderColumn dataField='upperRange'>
                Max Range
              </TableHeaderColumn>
              <TableHeaderColumn dataField='lowerRange'>
                Low Range
              </TableHeaderColumn>
              <TableHeaderColumn dataField='lowerRange'>
                Low Range
              </TableHeaderColumn>
              <TableHeaderColumn >
                Low Range
              </TableHeaderColumn>

            </BootstrapTable>
          </div>
            {this.state.variables.length ? (
              <List>
                {this.state.variables.map(variable => (
                  <ListItem key={variable._id}>
                    <Link to={"/variables/" + variable._id}>
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
