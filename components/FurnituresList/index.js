import { Card, CardBody, CardImg, CardTitle, Col, Row } from "reactstrap";
import Link from "next/link";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const query = gql` 
    {
        furnitures {
            id
            name
            description
            image {
                url
            }
        }
    }
`;

const FurnitureList = () => {
    const { loading, error, data } = useQuery(query);
    console.log(data);
    return (
        <Row>
            <Col xs="6" sm="4">
                <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
                    <CardImg src="http://localhost:1337/uploads/thumbnail_chai2_8bf9042116.jpg" top={true} style={{ height: 250 }} />
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
            <style jsx>
                {`
                    a {
                        color: white;
                    }
                    a link {
                        text-decoration: none;
                        color: white;
                    }
                    a:hover {
                        color: white;
                    }
                    .card-colums {
                        column-count: 3;
                    }
                `}
            </style>
        </Row>
    );
}

export default FurnitureList;