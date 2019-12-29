import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from '../ContactData/ContactData.module.css';

class ContactData extends Component {
  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Inter your Contact Data:</h4>
        <form>
          <input
            className={classes.Input}
            type="text"
            name="name"
            placeholder=" Your name"
          />
          <input
            className={classes.Input}
            type="text"
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
            name="postal"
            placeholder=" Postal Code"
          />
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
