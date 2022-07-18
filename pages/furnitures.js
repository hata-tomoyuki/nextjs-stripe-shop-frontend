import { Card, CardBody, CardImg, CardTitle, Col, Row } from "reactstrap";
import Link from "next/link";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";

const GET_FURNITURE_ITEMS = gql` 
    query ($id: ID!) {
        furniture(id: $id) {
            id
            name
            items {
                id
                name
                description
                price
                image {
                    url
                }
            }
        }
    }
`;

const Furnitures = (props) => {
    const router = useRouter();
    const { loading, error, data } = useQuery(GET_FURNITURE_ITEMS, {
        variables: {id: router.query.id }
    });

    if (error) return "家具の読み込みに失敗しました";

    if (loading) return <h1>読み込み中・・・</h1>;

    if (data) {
        const { furniture } = data;
        return (
            <Row>
                {furniture.items.map((furniture) => (
                    <Col xs="6" sm="4" key={furniture.id}>
                        <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
                            <CardImg src={`${process.env.NEXT_PUBLIC_API_URL}${furniture.image.url}`} top={true} style={{ height: 250 }} />
                            <CardBody>
                                <CardTitle>{furniture.name}</CardTitle>
                                <CardTitle>{furniture.description}</CardTitle>
                            </CardBody>
                            <div className="card-footer">
                                <Link as={`/furnitures/${furniture.id}`} href={`/furnitures?id=${furniture.id}`}>
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

export default Furnitures;