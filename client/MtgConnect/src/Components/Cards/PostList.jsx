import { Badge, Card, CardTitle } from "reactstrap"

export const PostList = ({content}) => {
    return(
        <div>
            {content.map(c => (
                <Card>
                    <Badge>{c.format}</Badge>
                    <CardTitle>
                        {c.title}
                    </CardTitle>

                </Card>
            ))}

        </div>
    )
}