import { Badge, Card, CardTitle } from "reactstrap"

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
                    <CardTitle className="ms-2 mt-1">
                        {c.title}
                    </CardTitle>

                </Card>
            ))}

        </div>
    )
}