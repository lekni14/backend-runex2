import React, { Component,useState } from 'react'
import { Button, Modal, Image } from 'react-bootstrap';
import receipt from '../../assets/img/receipt.png'

export default class VerifyPay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalReceipt: false,
        }
    }
    ModalReceiptClose = () => {        
        this.setState({ modalReceipt: false })
    }
    ModalReceiptShow = () => {
        console.log('show')
        this.setState({ modalReceipt: true })
    }
    render() {
        // const [show, setShow] = useState(false);
        // const handleClose = () => setShow(false);
        // const handleShow = () => setShow(true);

        return (
            <td>
                {/* <Button variant="link" onClick={this.ModalReceiptShow}><i className="icon-doc icons font-2xl d-block"></i></Button> */}
                <Button variant="link" onClick={this.ModalReceiptShow}><i className="cui-note icons font-2xl d-block"></i></Button>
                <Modal show={this.state.modalReceipt} onHide={this.ModalReceiptClose} animation={false}>
                    {/* <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header> */}
                    <Modal.Body>
                        <Image src={receipt} fluid />
                        {/* <img className=""  src={receipt} alt="" rounded /> */}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.ModalReceiptClose}>
                            ยกเลิก
                        </Button>
                        <Button variant="primary" onClick={this.ModalReceiptClose}>
                            ยืนยัน
                        </Button>
                    </Modal.Footer>
                </Modal>
            </td>
        )
    }
}
