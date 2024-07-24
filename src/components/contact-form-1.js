import React, {useRef, useEffect, useState} from "react"
import styled from "@emotion/styled"
import { useForm } from "react-hook-form"
import ReCAPTCHA from "react-google-recaptcha";
import { navigate } from "gatsby";


const FormDiv = styled.div`
width: 694px;
margin-right: 100px;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
form {
    // padding: 50px;
    width: 694px;
    min-height: 500px;
    height: 100%;
    max-height: 800px;
    // background-color: white;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .select-style {
        // background-color: white;
        padding: 5px;
        border: solid 1px black;
        :hover {
            cursor: pointer;
        }
    }
    .button-style {
        margin-top: 40px;
        padding: 20px;
        background-color: white;
        color: black;
        border: none;
        border-radius: 10px;
        font-size: 14px;
        font-weight: 600;
        transition: .3s;
        :hover {
            cursor: pointer;
            // background-color: #635bff;
        }
    }

    label {
        font-weight: 600;
        margin-top: 50px;
        // margin-left: 10px;
        margin-bottom: 4px;
    }
    input{
        font-size: 20px;
        padding: 15px;
        background-color: black;
        color: white;
        border-radius: 10px;
        border: 2px solid rgba(255,255,255,0.2);
        transition: .3s;

    }
    input:hover {
        border: 2px solid rgba(255,255,255,0.5);
    }
    input:focus-visible, textarea:focus-visible {
        border: 2px solid rgba(255,255,255,0.5);
        outline: 0;
    }
}
`



export default function ContactElectrical({setFormStage, setName, setPhone, setEmail}){

    ///need to reformat dates here before adding to state, or do in useEffect

    const reRef = useRef();
    const [serverState, setServerState] = useState({formSent: false});




    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()


      async function onSubmit(data){
        // const reRef = useRef<>();
        const token = await reRef.current.executeAsync();
        reRef.current.reset();
        setName(data.Name);
        setEmail(data.Email);
        setPhone(data.Phone);
        fetch("/api/postmark1", {
          method: `POST`,
          body: JSON.stringify({
            name: data.Name,
            email: data.Email,
            phone: data.Phone,
            token,
        }),
          headers: {
            "content-type": `application/json`,
          },
        })
          .then(res => res.json())
          .then(body => {
            console.log(`response from API:`, body);
          })
          .then(setServerState({formSent: true}))
      }
      console.log({ errors })
      useEffect(() => {
          if (serverState.formSent === true) {
            // navigate("/contact-success/");
            setTimeout(() => {
                setServerState({
                    formSent: false
                })
            }, 3000)
          }
      })

  return (
            <FormDiv>
                <ReCAPTCHA 
                    sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY} 
                    size="invisible"
                    ref={reRef} 
                />
                 <form onSubmit={handleSubmit(onSubmit)} autocomplete="on">
                    <label htmlFor="first">CONTACT NAME:</label>
                    <input
                        placeholder="Your name"
                        id="name"
                        type="text" 
                        name="name" 
                        required  
                        {...register("Name", { required: true, maxLength: 100 })} 
                    />
          
                    <label htmlFor="email">EMAIL ADDRESS:</label>
                    <input
                        placeholder="Your email address"
                        id="email"
                        type="email" 
                        name="email" 
                        required  
                        {...register("Email", { required: true, maxLength: 100 })} 
                    />
                    <label htmlFor="phone">PHONE NUMBER:</label>
                    <input
                        placeholder="Your phone number"
                        id="phone"
                        type="text" 
                        name="phone" 
                        required  
                        {...register("Phone", { required: true, maxLength: 100 })} 
                    />
         
                    <button
                        onClick={() => setFormStage(1)}
                        type="submit" 
                        className="g-recaptcha button-style"
                        data-sitekey="site_key"
                        data-callback='onSubmit'
                        data-action='submit'
                    >
                    NEXT STEP</button>
                </form>
            </FormDiv>
  )
}