import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from '../ContactData/ContactData.module.css';
import axios from '../../../axios.-Order';

import Spinner from '../../../components/UI/Spinner/Spinner';
class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    console.log(this.props.ingredients);
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: 'Jennifer Lopez',
        address: {
          street: 'Beethoven',
          zipCode: '56768',
          country: 'USA'
        },
        email: 'jenny@info.com'
      },
      deliveryMethod: 'fastest'
    };

    axios.post('/orders.json', order)
      .then(Response => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder=" Your name"
        />
        <input
          className={classes.Input}
          type="email"
          name="email"
          placeholder=" Your email"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder=" Street"
        />
        <input
          className={classes.Input}
          type="text"
          name="postalCode"
          placeholder=" Postal Code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Inter your Contact Data:</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
