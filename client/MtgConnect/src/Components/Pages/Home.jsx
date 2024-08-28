import { Card, CardBody, CardTitle } from "reactstrap"

export const Home = () => {
    return(
        <div>
            <Card className="w-50 mx-auto fs-2 shadow">
                <CardTitle className="mx-auto">
                    Welcome To MtgConnect!
                </CardTitle>
                <CardBody className="mx-auto fst-italic">
                    A place for Magic the Gathering players to connect
                </CardBody>
            </Card>
        </div>
    )
}