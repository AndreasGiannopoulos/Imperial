import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listUsers, deleteUser } from '../actions/userActions';
import Datatable from 'react-bs-datatable';
import Paginate from '../components/Paginate';


const UserListScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users, page, pages } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push('/login');
    }
  }, [dispatch, history, userInfo, successDelete]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteUser(id));
    }
  };

  let header = [
    { title: 'ID', prop: 'id'},
    { title: 'NAME', prop: 'name', sortable: true, filterable: true },
    { title: 'EMAIL', prop: 'email', sortable: true,filterable: true },
    { title: 'ADMIN', prop: 'admin' },
    { title: 'EDIT', prop: 'button1', },
    { title: 'DELETE', prop: 'button2', }
  ];
  
  let body
 
  return (
    <>
      <h1>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Datatable
            tableHeaders={header}
            tableBody={body = users.map((user ) => {    
              return {      
                id: user._id,
                name: user.name ,
                email: user.email,
                admin: user.isAdmin ? (
                    <i className='fas fa-check' style={{ color: 'green' }}></i>
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  ),
                  button1 : <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button variant='light' className='btn-sm'>
                        <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>,
                button2: <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(user._id)}>
                    <i className='fas fa-trash'></i>
                  </Button>
              }; 
            })
          }
            tableClass="dataTable"
            initialSort={{ prop: 'name', isAscending: true }}
          />
          <Paginate pages={pages} page={page} isAdmin={true} />
        </>
      )}
    </>
  );
};

export default UserListScreen;
