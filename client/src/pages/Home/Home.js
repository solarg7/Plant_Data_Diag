import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";

class LoadData extends Component {
  state = {
    variable: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  // componentDidMount() {
  //   API.getVariable(this.props.match.params.id)
  //     .then(res => this.setState({ variable: res.data }))
  //     .catch(err => console.log(err));
  // }

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
              <h1>Synopsis Polita</h1>
              <p>
                {this.state.variable.assetName}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-3">
            <Link to="/variables">← Editor Module</Link>
          </Col>

          <Col size="md-9">
              
            <form>

              
              {/* <FormBtn
                disabled={!(this.state.assetName && this.state.assetLocation&&this.state.assetE_U)}
                onClick={this.handleFormSubmit}
              >
                Submit Variable
              </FormBtn> */}
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
          <FormBtn>  
                <Link to="/historics">← Route Module</Link>
          </FormBtn>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoadData;
