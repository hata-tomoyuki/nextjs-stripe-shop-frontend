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

const FurnitureList = (props) => {
    const { loading, error, data } = useQuery(query);

    if (data) {
        const searchQuery = data.furnitures.filter((furniture) => 
            furniture.name.toLowerCase().includes(props.search)
        );
        return (
            <Row>
                {searchQuery.map((furniture) => (
                    <Col xs="6" sm="4" key={furniture.id}>
                        <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
                            <CardImg src={`${process.env.NEXT_PUBLIC_API_URL}${furniture.image[0].url}`} top={true} style={{ height: 250 }} />
                            <CardBody>
                                <CardTitle>{furniture.name}</CardTitle>
                                <CardTitle>{furniture.description}</CardTitle>
                            </CardBody>
                            <div className="card-footer">
                                <Link href={`/furnitures/${furniture.id}`} as={`/furnitures?id=${furniture.id}`}>
                                    <a className="btn btn-primary">もっと見る</a>
                                </Link>
                            </div>
                        </Card>
                    </Col>
                ))}
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
    } else {
        return <h1>家具が見つかりませんでした。</h1>
    }
}

export default FurnitureList;