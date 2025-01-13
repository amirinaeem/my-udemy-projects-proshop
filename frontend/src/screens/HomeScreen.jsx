import { Row, Col, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Loader from '../components/Loader';
import SearchBox from '../components/SearchBox';
import Message from '../components/Message';
import Sidebar from '../components/Sidebar';
import Product from '../components/Product';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';

function HomeScreen() {
  const { pageNumber, keyword } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  console.log(data); // Debug API response

  return (
    <Container fluid>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light mb-4'>
          Go Back
        </Link>
      )}
      <SearchBox />
      <Row>
        {/* Sidebar */}
        <Col md={3}>
          <Sidebar />
        </Col>

        {/* Main Content */}
        <Col md={9}>
          {isLoading ? (
            <Loader />
          ) : isError ? (
            <Message variant='danger'>
              {isError?.data?.message || isError.error}
            </Message>
          ) : data ? (
            <>
              <h1 className='my-3'>Latest Products</h1>
              {data.products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
              <Paginate
                pages={data.pages || 1}
                page={data.page || 1}
                keyword={keyword ? keyword : ''}
              />
            </>
          ) : (
            <Message variant='danger'>No products available</Message>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default HomeScreen;
