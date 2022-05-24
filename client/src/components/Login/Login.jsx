import { useState } from "react";
import axios from "axios";

export function Login () {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    
    function onSubmit(e) {
        let userLogin;

        console.log('está saliendo el post ', userLogin )

        e.preventDefault()

        if (email && password) {
            userLogin = { email: email, password: password };

            console.log('está saliendo el post ', userLogin )

            axios.post('http://localhost:3001/api/login', userLogin)
            .then((res)=>{  
              console.log(res.data, '-> viendo qué respondio el post')
              // res.cookie('userId', user[0].id); // Hay que ver si esto es del front
              // res.redirect('/home'); // Hay que ver si esto es del front
              // res.send('tu user fue validado y vas a home');
              // puede venir como un array vacio o con un elemento (con un objeto)

              if(!res.data.email) {
                  return  window.location = "http://localhost:3000/login"
              }
              if(res.data.email) {
                // document.cookie = res.data;
                console.log(res.data, ' lo que debería setear en las cookies');

                return  window.location = "http://localhost:3000/home"
              }

              
              
            })
            .catch((error) => console.log(error))

        }

    }


    return (
        
        <div>
            <div> Entraste en / Login </div>
            <div> Quiero ver el formulario de login </div>
            <div>
                <h1>Iniciar sesión</h1>
                <h2>Email state: {email}</h2>
                <h2>Password state: {password}</h2>

                <form >

                  <input type='email' value= {email} 
                  name='email' placeholder='Email' required 
                  onChange = {(e) => setEmail(e.target.value)}/>

                  <input type='password' value= {password} 
                  name='password' placeholder='Contraseña' required 
                  onChange = {(e) => setPassword(e.target.value)}/>

                  <input type='submit' value='Ingresar'  onClick={(e)=>onSubmit(e)} />

                </form>
                <a href='/create'>Crear cuenta</a>
                <br />
                <a href='/'>Volver</a>        
            </div>
        </div>


    )
}
