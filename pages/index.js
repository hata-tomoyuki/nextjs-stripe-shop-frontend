import { Alert, Button, Col, Input, InputGroup, InputGroupText, Row } from "reactstrap";
import FurnitureList from "../components/FurnituresList";

const index = () => {
    return (
        <div className="container-fluid">
            <Row>
                <Col>
                    <div className="search">
                        <InputGroup>
                            <InputGroupText>探す</InputGroupText>
                            <Input placeholder="家具名を入力してください" />
                        </InputGroup>
                    </div>
                    <FurnitureList />
                </Col>
            </Row>
            <style jsx>
                {`
                    .search {
                        margin: 20px;
                        width: 500px;
                    }  
                `}
            </style>
        </div>
    );
}

export default index;