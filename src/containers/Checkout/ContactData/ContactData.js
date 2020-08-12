import React, { Component } from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import classes from './ContactData.module.css';

class ContactData extends Component {
    state = {
        customer: {
            name: "",
            email: "",
            address: {
                street: "",
                postalCode: ""
            }
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);

        this.setState({loading: true});

        const orderData = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {...this.state.customer},
            deliveryMethod: "fastest"
        };

        axios.post("/orders.json", orderData)
            .then(response => {
                //console.log(response);
                this.setState({loading: false});
                this.props.history.push("/");
            })
            .catch(error => {
                //console.log(error);
                this.setState({loading: false});
            });
    }
    
    render () {
        let form = (
            <form>
                <Input inputtype="input" label="Name" type="text" name="name" placeholder="Your name" />
                <Input inputtype="input" label="Email" type="email" name="email" placeholder="Your email" />
                <Input inputtype="input" label="Street" type="text" name="street" placeholder="Your street" />
                <Input inputtype="input" label="Postal Code" type="text" name="postalCode" placeholder="Your postal code" />

                <Button 
                    btnType="Success"
                    clicked={this.orderHandler}
                    >ORDER</Button>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner />;
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact details</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;