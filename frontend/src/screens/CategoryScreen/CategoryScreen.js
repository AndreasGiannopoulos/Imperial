import React, { useEffect} from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Product from '../../components/Product/Product';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productActions';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import Paginate from '../../components/Paginate';
import Meta from '../../components/Meta';
import './CategoryScreen.css';

const CategoryScreen = ({ match }) => {
  const category = match.params.category;

  const pageNumber = match.params.pageNumber;
  const dispatch = useDispatch();
  
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  
  useEffect(() => {
    dispatch(listProducts(category, pageNumber));
  }, [dispatch, category, pageNumber]);

  return (
    <>
      <Meta />
      <Container>
        <h1>{category}</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <>
            <Row>
              {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
            <Paginate pages={pages} page={page} category={category} /> 
          </>
        )}
      </Container>
    </>
  );
};

export default CategoryScreen;
