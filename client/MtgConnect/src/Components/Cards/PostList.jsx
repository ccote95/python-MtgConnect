import { Badge, Card, CardText, CardTitle } from "reactstrap"

export const PostList = ({content}) => {
    return(
        <div>
            {content.map(c => (
                <Card key={c.id} className="w-50 mx-auto mt-2 shadow">
                    <div>
                        <Badge className="ms-2 mt-1">{c.format.name}</Badge>
                    </div>
                    <div>
                        <Badge className="ms-2 mt-1">{c.deck.name}</Badge>
                    </div>
                    <div className="d-flex justify-content-between">
                        <CardTitle className="ms-2 mt-1">
                            {c.title}
                        </CardTitle>
                        <CardText className="me-2">
                            {c.date}
                        </CardText>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end me-1 mb-1">
                        <button className="btn btn-primary" type="button">Details</button>
                    </div>
                </Card>
            ))}

        </div>
    )
    // Display the number of comments for each post
    //
}