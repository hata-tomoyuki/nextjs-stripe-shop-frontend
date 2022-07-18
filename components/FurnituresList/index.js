import { Card, CardBody, CardImg, CardTitle, Col, Row } from "reactstrap";
import Link from "next/link";

const FurnitureList = () => {
    return (
        <Row>
            <Col>
                <Card>
                    <CardImg src="" />
                    <CardBody>
                        <CardTitle>椅子</CardTitle>
                        <CardTitle>さまざまな椅子があります。</CardTitle>
                    </CardBody>
                    <div className="card-footer">
                        <Link href="/furnitures?id=1" as="/furnitures?id=1">
                            <a className="btn btn-primary">もっと見る</a>
                        </Link>
                    </div>
                </Card>
            </Col>
        </Row>
    );
}

export default FurnitureList;