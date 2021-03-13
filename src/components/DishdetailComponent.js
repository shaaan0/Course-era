import React from 'react';
import { Card, CardText, CardImg, CardBody, CardTitle,
    Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({dish}) {
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

    function RenderComment({comments}) {
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
                    <hr/>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComment comments={props.comments}/>
                </div>
                </div>
                

            </div>

        );
    }
export default DishDetail;
