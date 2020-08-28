import React, { Component } from 'react';
import axios from '../../axios-orders';

import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actionCreators/index';

import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    componentDidMount () {
        this.props.onFetchOrdersHandler();
    }

    render () {
        let orders = <Spinner />;

        if (!this.props.loading) {
            orders = (
                <div>
                    {this.props.orders.map(order => (
                        <Order 
                            key={order.id} 
                            ingredients={order.ingredients} 
                            price={order.price} />
                    ))}
                </div>
            );
        }

        return (
            <div>
                {orders}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrdersHandler: () => dispatch(actionCreators.fetchOrders())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));