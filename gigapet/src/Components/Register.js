import React from 'react';
import {Form, Input, FormGroup, Label} from 'reactstrap';

function Register(){
    return(
<Form>
    <FormGroup>
        <Label for="Your E-mail">E-mail</Label>
        <Input type="email" name="email" placeholder="Enter your e-mail"></Input>
    </FormGroup>
</Form>
    )

}

export default Register;