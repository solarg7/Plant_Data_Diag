import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { FormBtn } from "../../components/Form";
import {Bar, Line, Pie} from "react-chartjs-2";
import {BootstrapTable, 
  TableHeaderColumn} from 'react-bootstrap-table';
import "./LoadData.css";
// const db = require("../models");
import { Input, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class LoadData extends Component {
  state = {
    variable: [],
    historics: [],
    dataTrend: [],
    historically: [],
    date: "",
    savedValue:"",
    savedAssetId:""
    
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    this.loadVariable();
    this.loadHistorics();
    this.loadAssetHistorics();
    this.loadTrend();
  }

  loadVariable = () =>{
    const variableId= this.props.match.params.id;
    API.getVariable(variableId)
      .then(res => this.setState({ variable: res.data }))
     
  }

  loadAssetHistorics = () =>{
    const variableId= this.props.match.params.id;
    API.getAssetHistorics(variableId)
      .then(res => this.setState({ historically: res.data }))
      // .then (res => this.loadTrend())
      .catch(err => console.log(err));   
  }

  loadHistorics = () => {
    API.getHistorics()
      .then(res =>
        this.setState({ historics: res.data, savedValue: "", date: "", savedAssetId:"" 
        })
      )
      .then (res => this.loadTrend())
      
      .catch(err => console.log(err));
  };

  // historicData = () => {
  //   this.setState = {
  //     historicData:{
  //       labels: this.setState.addHistoric.date,
  //       datasets:this.setState.addHistoric.savedValue
  //     }}
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
          const savedAssetId = variableId;
          // ,const _id = this.state.variable.id;;
          API.addHistoric({variableId, savedValue, savedAssetId 
          })
            // .then(variableData => res.json(variableData))
            // .then(res => {
            //   // this.loadVariable()
            //   this.loadHistorics()
            //   this.handleClearForm()

            .then(res => this.loadHistorics())
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


  loadTrend = () => {
    
    // const historicData = this.state.historics
    // const dateTimeStamp = this.state.historics.map(date => this.state.historics)
    const dataHistoricData = this.state.historics.map(historic => historic.savedValue)
    const dataHistoricIdData = this.state.historics.map(historic => historic.date)
    
    console.log (dataHistoricIdData)
    
    this.setState({
      dataTrend : {
        labels: dataHistoricIdData,
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataHistoricData
          }
        ]
    }

  })
    
  }
  

  render() {
    // const {dataTrend} =
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 id="tituloD">
                Capture your data: {this.state.variable.assetName} by {this.state.variable.assetE_U}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Enter Value</h1>
              <p>
                <h1>{this.state.variable.assetE_U}</h1>
              </p>
            </article>
          </Col>
        </Row>
        <Row>


          <Col size="md-6">
              
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
          <Col size="md-6">
          
            <Row>
              
                <Line data={this.state.dataTrend} />
              
            </Row>
            </Col>

        </Row>
        <Row>
          <Col size="md-12">

          <Link to="/variables">
            <Button color="primary" size="lg">  
              ← Editor Module
            </Button >           
          </Link>

          <Link to="/historics">
            <Button color="danger secundary" size="lg">  
                  ← Route Module
            </Button>
          </Link>           
          </Col>


        </Row>


          <div>
            <BootstrapTable data={this.state.historics} striped hover condensed>
              <TableHeaderColumn isKey dataField='_id'>
                ID
              </TableHeaderColumn>
              <TableHeaderColumn dataField='date'>
                Name
              </TableHeaderColumn>
              <TableHeaderColumn dataField='savedValue'>
                engineering unit
              </TableHeaderColumn>
            </BootstrapTable>
          </div>

      </Container>
    );
  }
}

export default LoadData;
