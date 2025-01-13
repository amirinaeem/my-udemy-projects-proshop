import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <>
      <Card className='my-3 p-3'>
        <Row className='d-flex align-items-center'>
          {/* Product Image */}
          <Col md={4} className='d-flex align-items-center'>
            <Link to={`/product/${product._id}`} className='w-100'>
              <Card.Img
                src={product.image}
                className='img-fluid'
                style={{
                  height: '100%',
                  maxHeight: '300px', // Set a maximum height for the image
                  objectFit: 'cover', // Maintain aspect ratio
                }}
              />
            </Link>
          </Col>

          {/* Product Details */}
          <Col md={8}>
            <Card.Body>
              <Link to={`/product/${product._id}`}>
                <Card.Title as='h5' className='product-title'>
                  <strong>{product.name}</strong>
                </Card.Title>
              </Link>

              <Card.Text as='div'>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </Card.Text>

              <Card.Text className='mt-3'>{product.description}</Card.Text>
              <Card.Text as='h5' className='mt-3 text-primary'>
                ${product.price}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      {/* Social Buttons Section */}
      <div className='d-flex justify-content-center gap-3 mt-4'>
        <Button variant='outline-primary'>Like</Button>
        <Button variant='outline-secondary'>Comment</Button>
        <Button variant='outline-success'>Share</Button>
        <Button variant='outline-info'>Save</Button>
      </div>
    </>
  );
};

export default Product;
