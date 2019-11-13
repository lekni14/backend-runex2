import React, { Component } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Col, Row, Dropdown, Fade } from 'reactstrap';

import { AppSwitch } from '@coreui/react'
import { Verify } from 'crypto';
import { VerifyPay } from '.';

class Event extends Component {
    constructor(props) {
        super(props);

        // this.toggle = this.toggle.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            dropdownOpen: false
        };
    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen

            
        }));
    }
    // toggle() {
    //     this.setState({ collapse: !this.state.collapse });
    // }

    // toggleFade() {
    //     this.setState((prevState) => { return { fadeIn: !prevState } });
    // }
    handleChange = () => {
        this.setState({
            complete: !this.state.complete
        });
    }
    render() {
        const dropdown = ['All', ''];
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <div className="clearfix">
                            <h2 className="float-left mb-3">รายชื่อผู้สมัคร</h2>
                            <div className="float-right">

                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12" md="12">
                        <div className="clearfix mb-3">
                            <div className="float-left">
                                {/* <div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-outline-secondary">All</button>
                                    <button type="button" className="btn btn-outline-secondary">Active</button>
                                    <button type="button" className="btn btn-outline-secondary">Right</button>
                                </div> */}
                            </div>
                            <div className="float-right">
                                <form className="form-inline">
                                    <div className="form-group mb-2">
                                        <label className="mr-3">Filter by</label>
                                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                            <DropdownToggle caret>
                                                All
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem>บัตรเครดิต</DropdownItem>
                                                <DropdownItem>QR Code</DropdownItem>
                                                <DropdownItem>Transfer</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <table className="table table-striped">
                            <thead className="thead-light">
                                <tr>
                                    <th className="border-0" scope="col">#</th>
                                    <th className="border-0" scope="col">ชื่อ</th>
                                    <th className="border-0" scope="col">นามสกุล</th>
                                    <th className="border-0" scope="col"></th>
                                    <th className="border-0" scope="col">จำนวนเงิน</th>
                                    <th className="border-0" scope="col">วันที่สมัคร</th>
                                    <th className="border-0" scope="col">รูปการชำระ</th>
                                    <th className="border-0" scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" onChange={this.handleChange} />
                                            <label className="custom-control-label" htmlFor="customCheck1">1</label>
                                        </div>
                                    </th>
                                    <td>Poonsak </td>
                                    <td>Aphidetmongkhon</td>
                                    <td>Chinjang Shiro Run 100 km.</td>
                                    <td>500</td>
                                    <td>EX-RUN 2019</td>
                                    <td>
                                        QR Code Method
                                    </td>
                                    <VerifyPay></VerifyPay>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck2" onChange={this.handleChange} />
                                            <label className="custom-control-label" htmlFor="customCheck2">2</label>
                                        </div>
                                    </th>
                                    <td>Poonsak </td>
                                    <td>Aphidetmongkhon</td>
                                    <td>Chinjang Shiro Run 100 km.</td>
                                    <td>500</td>
                                    <td>EX-RUN 2019</td>
                                    <td>
                                        QR Code Method
                                    </td>
                                    <VerifyPay></VerifyPay>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Event;
