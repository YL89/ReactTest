import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export default class SignIn extends React.Component {

    render() {
        return (
            <Container>

                <Form>
                    <Form.Group>
                        <Form.Label>Account</Form.Label>
                        <Form.Control type='email' placeholder='Account email'></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Password'></Form.Control>
                    </Form.Group>
                    <Form.Group className='text-center'>
                        <Button  className='signin-btn' variant='primary' type='submit' >Sign In</Button>{' '}
                        <Button  className='signin-btn' variant='primary' type='clear' >Clear</Button>
                    </Form.Group>

                </Form>

            </Container>
        )
    }
}