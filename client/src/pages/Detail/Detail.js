import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
// import { Card, CardImg, CardText, CardBody, CardLink,
//   CardTitle, CardSubtitle } from "reactstrap";

// // import 'bootstrap/dist/css/bootstrap.min.css';
import AssetCard from "../../components/AssetCard";
import "./Detail.css";

class Detail extends Component {
  state = {
    variable: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getVariable(this.props.match.params.id)
      .then(res => this.setState({ variable: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 id="tituloD">
                Asset Details:
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-4">    
            <div>
              <AssetCard project={this.state.variable}/>
            </div>
           </Col>
          </Row>        




        <Row>
          <Col size="md-3">
          <FormBtn>  
            <Link to="/variables">← Editor Module</Link>
          </FormBtn>           
          
          <FormBtn>  
                <Link to="/historics">← Route Module</Link>
          </FormBtn>           
          </Col>


        </Row>


      </Container>
    );
  }
}

export default Detail;
