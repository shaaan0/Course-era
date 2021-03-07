import React from 'react';
import { Card, CardText, CardImg, CardBody, CardTitle } from 'reactstrap';

function RenderDish({dish}) {
        if (dish != null)
            return (
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
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

    function RenderComment({detail}) {
        const comnt = detail.map(comments => {
            return (
                <div>
                    <li key={comments.id}>
                        {comments.comment}
                    </li>
                    <br />
                    <li>
                        --{comments.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comments.date)))}
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

        const dishInfo = <RenderDish dish={dish}/>
        const dishComment = <RenderComment detail={dish.comments}/>

        return (
            <div className="container">
                <div className="row">
                    {dishInfo}
                    <div className="col-12 col-md-5 m-1">
                        {dishComment}

                </div>
                </div>
                

            </div>

        );
    }
export default DishDetail;
