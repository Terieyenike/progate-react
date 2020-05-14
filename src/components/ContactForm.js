import React from 'react';

class ContactForm extends React.Component {
  state = {
    isSubmitted: false,
    email: '',
    hasEmailError: false,
    content: '',
    hasContentError: false
  };

  handleEmailChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';
    this.setState({
      email: inputValue,
      hasEmailError: isEmpty
    });
  }

  /* Declare the method handleContentChange */
  handleContentChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';
    this.setState({
      content: inputValue,
      hasContentError: isEmpty
    });
  }

  handleSubmit() {
    this.setState({ isSubmitted: true });
  }

  render() {
    let emailErrorText;
    if (this.state.hasEmailError) {
      emailErrorText = (
        <p className='contact-message-error'>Please enter your email address</p>
      );
    }

    /* Declare the variable contentErrorText */
    let contentErrorText;
    if (this.state.hasContentError) {
      contentErrorText = (
        <p className='contact-message-error'>Please enter your message</p>
      );
    }

    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = (
        <div className='contact-submit-message'>Sent Successfully</div>
      );
    } else {
      contactForm = (
        <form
          onSubmit={() => {
            this.handleSubmit();
          }}>
          <p>
            Email Address <span>(required)</span>
          </p>
          <input
            value={this.state.email}
            onChange={event => {
              this.handleEmailChange(event);
            }}
          />
          {emailErrorText}
          <p>
            Message <span>(required)</span>
          </p>
          {/* Add the value and an onChange event */}
          <textarea
            required
            value={this.state.content}
            onChange={event => {
              this.handleContentChange(event);
            }}
          />
          {/* Display contentErrorText  */}
          {contentErrorText}

          <input type='submit' value='Send' />
        </form>
      );
    }

    return <div className='contact-form'>{contactForm}</div>;
  }
}

export default ContactForm;
