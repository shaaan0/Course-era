import React from 'react';
import {
    Card, CardText, CardImg, CardBody, CardTitle,
    Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Col, Label, Row
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <=len)
const minLength = (len) => (val) => !(val) || (val.length >= len)

class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isCommentModalOpen: false,

        }

        this.toggleCommentModal = this.toggleCommentModal.bind(this)
    }

    toggleCommentModal() {
        this.setState({
            isCommentModalOpen: !this.state.isCommentModalOpen
        });
    }
    handleCommentSubmit(values) {
        this.toggleCommentModal()
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }

    render() {
        return (
            <React.Fragment>
                <Button outline onClick={this.toggleCommentModal} ><span className="fa fa-pencil fa-lg"></span> Submit Comment </Button>
                <Modal isOpen={this.state.isCommentModalOpen} toggle={this.toggleCommentModal}>
                    <ModalHeader toggle={this.toggleModal}>{" "}Submit Comment{" "}</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values => this.handleCommentSubmit(values))}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" id="rating" name="rating"
                                        className="form-control"
                                        validators={{ required }}
                                    >
                                        <option defaultChecked>5</option>
                                        <option>4</option>
                                        <option>3</option>
                                        <option>2</option>
                                        <option>1</option>
                                    </Control.select>
                                    <Errors
                                        className="text-danger"
                                        model=".rating"
                                        show="touched"
                                        messages={{
                                            required: "Required"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">

                                <Label htmlFor="yourname" md={12}>Your Name</Label>
                                <Col md={12}>

                                    <Control.text model=".yourname" id="yourname" name="yourname"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".yourname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={12}>Comment </Label>
                                <Col md={12}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>

                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }


}

function RenderDish({ dish }) {
    if (dish != null)
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    else
        return (
            <div></div>
        );
}

function RenderComment({ comments }) {
    const comnt = comments.map(commnt => {
        return (
            <div>
                <li key={commnt.id}>
                    {commnt.comment}
                </li>
                <br />
                <li>
                    --{commnt.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(commnt.date)))}
                </li><br />
            </div>

        )
    });

    return (
        <div>
            <h4>Comments</h4>
            <br />
            <ul className='list-unstyled'>
                {comnt}
            </ul>
            <CommentForm />
        </div>
    )
}

const DishDetail = (props) => {
    const dish = props.dish

    if (dish == null) {
        return (
            <div></div>
        )
    }


    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComment comments={props.comments} />
                </div>

            </div>


        </div>

    );
}
export default DishDetail;
