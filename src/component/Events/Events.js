import React, { Component } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Col, Row, Dropdown, Fade } from 'reactstrap';
import {history} from '../../store'
import { eventService } from '../../services/event.service';
import { AppSwitch } from '@coreui/react'

class Events extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            dropdownOpen: new Array(19).fill(false),
            events: []
        };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState } });
    }
    componentDidMount () {
        this.getEvent();
    }

    getEvent () {
        eventService.getEvents().then(res => {
            console.log(res)
            if (res.data.code === 200) {
                if (res.data.data != null) {
                    this.setState({
                        events: res.data.data
                    })
                }
            }

        })
    }
    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <div className="clearfix">
                            <h2 className="float-left mb-3">กิจกรรม</h2>
                            <div className="float-right">
                                <button type="button" className="btn btn-primary">Create Event</button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12" md="12">
                        <div className="clearfix mb-3">
                            <div className="float-left">
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-outline-secondary active">All</button>
                                    <button type="button" className="btn btn-outline-secondary">Active</button>
                                    <button type="button" className="btn btn-outline-secondary">Right</button>
                                </div>
                            </div>
                            <div className="float-right">
                                {/* <ButtonDropdown className="mr-1" isOpen={this.state.dropdownOpen[4]} toggle={() => { this.toggle(4); }}>
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
                                </ButtonDropdown> */}
                            </div>
                        </div>
                        <table className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th className="border-0" scope="col">#</th>
                                    <th className="border-0" scope="col">ชื่อกิจกรรม</th>
                                    <th className="border-0" scope="col">วันที่จัดงาน</th>
                                    <th className="border-0" scope="col">สถานที่จัดงาน</th>
                                    <th className="border-0" scope="col">Organize by</th>
                                    <th className="border-0" scope="col">Status</th>
                                    <th className="border-0" scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.events.map((event, i) => {
                                return (
                                <tr key={i}>
                                    <th scope="row">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label">1</label>
                                        </div>
                                    </th>
                                    <td>{event.name}</td>
                                    <td>08 ธ.ค. 2019 เวลา 04:00 - 10:00</td>
                                    <td>Chakrabandhu Pensiri Hall</td>
                                    <td>EX-RUN 2019</td>
                                    <td>
                                        <Button color="success">Active</Button>
                                    </td>
                                    <td>
                                        <Button color="link" onClick={() =>history.push(`/events/${event.id}`)}><i className="cui-note icons font-2xl d-block"></i></Button>
                                    </td>
                                </tr>
                                 )
                            })}
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Events;
