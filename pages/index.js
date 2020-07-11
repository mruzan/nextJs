import Header from './Header';
import Footer from './Footer';

import { getProducts, makeFavorite } from "../pages/api/product";


import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

const Home = ({ posts }) => {
  const postList = [];
  
  const handleFavorite = (id) => {
    makeFavorite(true, id);
  };

  for (var key in posts) {
    if (posts.hasOwnProperty(key)) {     
      postList.push(
        <Col md={4} lg={4} sm={6} xs={12} className="single-profile" key={key}>
          <img className="profile" src={"/" + posts[key].profile_image} />
          <h6>{posts[key].name}</h6>

          <img src={"/" + posts[key].background_image} className="background" />
          <img className="blue" src="/heart-blue.png" />
          <span className="count">
            <b>{posts[key].like}</b> likes
          </span>
          <p className="description">{posts[key].description}</p>
          <p className="hash">{posts[key].hash}</p>
          <p className="view">View {posts[key].comment} Comments</p>
          <Row className="image-content">
            <Col md={10} lg={10} sm={10} xs={10} className="text-wrapper">
              <div className="text">{posts[key].content}</div>
              <div className="price">AED {posts[key].price}</div>
            </Col>
            <Col md={2} lg={2} sm={2} xs={2} className="image-wrapper">
              <img
                src="/heart-border.png"
                className="border-heart"
                onClick={() => handleFavorite(posts[key].id)}
              />
            </Col>
          </Row>
        </Col>
      );
    }
  }


  return(
  <>
    <Header />
    <Container className="container-fluid main-wrapper">
      <Row>
        {postList}
      </Row>
    </Container>
    <Footer />
  </>
  )
};

Home.getInitialProps = async ({ query }) => {
  const products = await getProducts();
  return { posts: products };
};

export default Home;
