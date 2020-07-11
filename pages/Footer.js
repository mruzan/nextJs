import Link from 'next/link';

import {
  Container, 
  Col,
  Row,
} from "react-bootstrap";

const Footer = () => {

    return (
        <div className="d-block d-sm-none footer">
            <Container className="container-fluid">
                <Row>
                    <Col className="col-sm-1 col-hide-xs">
                        <Link href="/index">
                            <img
                                className="home"
                                src="/home.png"
                                alt="Home"
                            />                            
                        </Link>
                    </Col>
                    <Col className="col-sm-1">
                        <Link href="/favorite">
                            <img
                                className="favorite"
                                src="/heart.png"
                                alt="Favorite"
                            />
                        </Link>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Footer;