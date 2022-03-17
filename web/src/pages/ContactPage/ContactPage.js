import { MetaTags } from '@redwoodjs/web'
import {
  FieldError,
  Form,
  Label,
  Submit,
  TextAreaField,
  TextField,
} from '@redwoodjs/forms'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <Form onSubmit={onSubmit} config={{ mode: "onBlur" }}>
        <Label name="name" errorClassName="error">Name</Label>
        <TextField
          name="name"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="name" className="error" />

        <Label name="email" errorClassName="error">Email</Label>
        <TextField
          name="email"
          validation={{
            required: true,
            pattern: {
              value: /^[^@]+@[^.]+\..+$/,
              message: "Please enter a valid email address.",
            },
          }}
          errorClassName="error"
        />
        <FieldError
          name="email"
          className="error"
          errorClassName="error"
        />

        <Label name="message" errorClassName="error">Message</Label>
        <TextAreaField name="message" validation={{ required: true }} />
        <FieldError
          name="message"
          className="error"
          errorClassName="error"
        />

        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
