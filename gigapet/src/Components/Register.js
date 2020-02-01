import React from 'react';

function Register(){
    return(
        <form>
            <div className="Form decoration">
            <input type="text" placeholder="Input name here"/>
            <input type="e-mail" placeholder="Input e-mail here"/>
            <input type="password" placeholder="Input password here"/>
            </div>
        </form>
    )

}

export default Register;