import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Datatable from 'react-bs-datatable';
import { listOrders } from '../actions/orderActions';

const OrderListScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push('/login');
    }
  }, [dispatch, history, userInfo]);


  let header = [
    { title: 'ID', prop: 'id'},
    { title: 'USER', prop: 'user', sortable: true },
    { title: 'DATE', prop: 'date', sortable: true  },
    { title: 'TOTAL', prop: 'total', sortable: true },
    { title: 'PAID', prop: 'paid', sortable: true },
    { title: 'DELIVERED', prop: 'delivered', sortable: true },
    { title: 'DETAILS', prop: 'button1' }
    
  ];
  
  let body
 
  return (
    <>
      <h1>Orders</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Datatable
        tableHeaders={header}
        tableBody={ body = orders.map((order ) => { 
            return {
              id: order._id,
              user: order.user.name,
              date: order.createdAt.substring(0, 10),
              total: order.totalPrice,
              paid: order.isPaid ? (
                  order.paidAt.substring(0, 10)
                ) : (
                  <i className='fas fa-times' style={{ color: 'red' }}></i>
                ),
              delivered: order.isDelivered ? (
                  order.deliveredAt.substring(0, 10)
                ) : (
                  <i className='fas fa-times' style={{ color: 'red' }}></i>
                ),
              button1 :  <LinkContainer to={`/order/${order._id}`}>
                  <Button variant='light' className='btn-sm'>Details</Button>
                </LinkContainer>      
            }; 
          })
        } 
        />       
      )}
    </>
  );
};

export default OrderListScreen;
