import React, { Component } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react'

class Member extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            dropdownOpen: new Array(19).fill(false),
        };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState } });
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="12" md="12">
                        <div class="bg-info clearfix">
                            <button type="button" class="btn btn-secondary float-left">Example Button floated left</button>
                            <button type="button" class="btn btn-secondary float-right">
                                <ButtonDropdown className="mr-1" isOpen={this.state.dropdownOpen[4]} toggle={() => { this.toggle(4); }}>
                                    <DropdownToggle caret color="info">
                                        Info
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>Header</DropdownItem>
                                        <DropdownItem disabled>Action Disabled</DropdownItem>
                                        <DropdownItem>Action</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Another Action</DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </button>
                        </div>
                        <table className="table">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Regitered</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Member;
