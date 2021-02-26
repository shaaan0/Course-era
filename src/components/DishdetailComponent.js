import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';


class Dishdetail extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        const detail = this.props.dishDetail.map((feed) => {
            return(
                <div key={feed.id}>
                        {feed.comment}
                        <br/><br/>
                        --{feed.author}, {feed.date}
                        <br/><br/>
                </div>
                
            );
        });

        return(
            <Card>
                <CardBody>
                        <CardTitle>Comments</CardTitle>
                        <CardText>{detail}</CardText>
                        
                </CardBody>
            </Card>

        );
    }
}

export default Dishdetail;