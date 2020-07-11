import Head from 'next/head';
import Link from 'next/link';

import {
  Container, 
  Navbar,
  Nav, 
  Col,
  Row,
} from "react-bootstrap";

const Header = () => {

    return (
        <div>
            <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container className="container-fluid header d-none d-sm-block">
                <Row>
                    <Col className="col-sm-1">
                        <Link href="/index">Home</Link>
                    </Col>
                    <Col className="col-sm-1">
                        <Link href="/favorite">Favorite</Link>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Header;