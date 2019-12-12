import React from 'react'
import { Field, reduxForm, Form } from 'redux-form'
import { Layout, Menu, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class FormDemo extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <div>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>

        </div>
        <Form action='' onSubmit={handleSubmit} role="form">
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email" />
          </div>
          <button type="submit" >Submit</button>
        </Form>
      </div>

    )
  }
}

FormDemo = reduxForm({
  // a unique name for the form
  form: 'contact'
})(FormDemo)

export default FormDemo;