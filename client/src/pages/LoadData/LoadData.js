import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
// const db = require("../models");

class LoadData extends Component {
  state = {
    variable: [],
    historic: [],
    // date: "",
    savedValue:""
    
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    this.loadVariable();
  }

  loadVariable = () =>{
    const variableId= this.props.match.params.id;
    API.getVariable(variableId)
      .then(res => this.setState({ variable: res.data }))
     
  }

  // loadHistorics = () => {
  //   API.getHistorics()
  //     .then(res =>
  //       this.setState({ hostorics: res.data, savedValue: ""
  //       })
  //     )
  //     .catch(err => console.log(err));
  // };

  handleInputChange2 = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
  };
    
  handleFormSubmit2 = event => {
        event.preventDefault();
        // if (this.state.savedValue) {
          const variableId= this.props.match.params.id;
          const savedValue = this.state.savedValue;
          // ,const _id = this.state.variable.id;;
          API.addHistoric({variableId, savedValue})
            // .then(variableData => res.json(variableData))
            .then(res => {
              // this.loadVariable();
              // this.loadHistorics();
              this.handleClearForm();
            })            
            .catch(err => console.log(err));
          
          //   // assetNameId: this.assetNameId,
          //   date: Date.now,
          //   savedValue: this.savedValue,
          

        // }
        
    
  };

  handleClearForm = () => {
    this.setState({
      savedValue: "",
      
    })
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.variable.assetName} by {this.state.variable.assetE_U}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis Politassss</h1>
              <p>
                {this.state.variable.assetName}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-3">
            <Link to="/">← Home</Link>
          </Col>

          <Col size="md-9">
              
            <form>
              <Input
                  value={this.state.savedValue}
                  onChange={this.handleInputChange2}
                  name="savedValue"
                  placeholder="ingrese valor"
              />
              
              <FormBtn
                disabled={!(this.state.savedValue)}
                onClick={this.handleFormSubmit2}
              >
                Submit Variable
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/historics">← Back to Route</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoadData;
