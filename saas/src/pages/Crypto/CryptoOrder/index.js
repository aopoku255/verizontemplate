import React, { useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import AllOrders from './AllOrders';
import { useSelector, useDispatch } from "react-redux";
import { getOrderList } from "../../../slices/thunks";
import { createSelector } from 'reselect';
// import {CryptoOrders} from "../../../common/data/cryptoPage";

const CryproOrder = () => {
    const dispatch = useDispatch();

    
    const selectDashboardData = createSelector(
        (state) => state.Crypto.orderList,
        (orderList) => orderList
      );
      
    // Inside your component
    const  orderList  = useSelector(selectDashboardData);



    useEffect(() => {
        dispatch(getOrderList());
    }, [dispatch]);

  document.title="Orders | Velzon - React Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Orders" pageTitle="Crypto" />
                    <Row>
                        <AllOrders orderList={orderList} />
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default CryproOrder;