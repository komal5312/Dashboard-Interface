/*!

=========================================================
* Argon Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import Moment from "react-moment";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  NavLink,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";
import ReactHtmlTableToExcel from "react-html-table-to-excel";


class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    // fetch("http://localhost:8080/api/device-table").
      fetch("https://agrix-api-v2.azurewebsites.net/api/farm-machine/operation").
      then(resp => resp.json()).
      then(resp => this.setState({ posts: resp }))
  }
  render() {
    return (
      <>
        <SimpleHeader name="" parentName="" />
        <Container className="mt--6" fluid>

          <Card>
            <CardHeader className="border-0">
              <Row>
                <Col xs="6">
                  <h3 className="mb-0">Machine History</h3>
                </Col>
                <Col className="text-right" xs="6">


                  {/* <Button color="success" type="button">
                    Add
                  </Button> */}
                  
                <ReactHtmlTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button btn btn-success mb-3"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Export"/>
                </Col>

              </Row>
            </CardHeader>

            <Table className="align-items-center table-flush"  id="table-to-xls" responsive>
              <thead className="thead-light">
                <tr>
                  <th>MachineId</th>
                  <th>Phone Number</th>
                  <th>Schedule Date</th>
                  <th>Start Date</th>
                  <th>Stop Date</th>
                </tr>
              </thead>

              <tbody>
                {this.state.posts.map((post,index) => (
                  <tr>
                    <td>{post.machineId}</td>
                    <td>{post.phoneNumber}</td>
                    <td>{post.scheduleDate}</td>
                    <td><Moment format="MMM DD YYYY h:mm A">{post.startTime}</Moment></td>
                    <td><Moment format="MMM DD YYYY h:mm A">{post.stopTime}</Moment></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>


        </Container>
      </>
    );
  }
}

export default Tables;
