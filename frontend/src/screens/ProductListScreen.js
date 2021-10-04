import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import { listProducts, deleteProduct, createProduct, } from '../actions/productActions';
import { PRODUCT_CREATE_RESET } from '../constants/productConstants';
import Datatable from 'react-bs-datatable';


const ProductListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    success: successCreate,
    error: errorCreate,
    product: createdProduct,
  } = productCreate;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });
    if (!userInfo.isAdmin) {
      history.push('/login');
    }
    if (successCreate) {
      history.push(`/admin/product/${createdProduct._id}/edit`);
    } else {
      dispatch(listProducts('', pageNumber));
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdProduct,
    pageNumber,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteProduct(id));
    }
  };

  const createProductHandler = () => {
    dispatch(createProduct());
  };
  
  const header = [
    { title: 'ID', prop: 'id'},
    { title: 'NAME', prop: 'name', sortable: true, filterable: true },
    { title: 'PRICE', prop: 'price', sortable: true, },
    { title: 'CATEGORY', prop: 'category', sortable: true, filterable: true, },
    { title: 'BRAND', prop: 'brand', sortable: true, filterable: true },
    { title: 'EDIT', prop: 'button1', },
    { title: 'DELETE', prop: 'button2', }
  ];

  const body = products.map((product) => {
    return {
      id: product._id,
      name: product.name,
      price: product.price,
      category: product.category,
      brand: product.brand,
      button1 :  <LinkContainer to={`/admin/product/${product._id}/edit`}>
      <Button variant='light' className='btn-sm'>
        <i className='fas fa-edit'></i>
      </Button>
    </LinkContainer>,
      button2: <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(product._id)}>
      <i className='fas fa-trash'></i>
    </Button>
        
    }; 
  });

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' onClick={createProductHandler}>
            <i className='fas fa-plus'></i> Create Product
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Datatable 
            tableHeaders={header} 
            tableBody={body} 
            tableClass="dataTable"
            initialSort={{ prop: "name", isAscending: true }}
          />
          <Paginate pages={pages} page={page} isAdmin={true} />
        </>
      )}
    </>
  );
};

export default ProductListScreen;
