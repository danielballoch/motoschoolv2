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
    margin-right: 20px;
    // max-width: 800px;
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
        
        :hover {
            cursor: pointer;
        }
    }
    .button-style {
        width: 50%;
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
    .back {
    width: 28%;
    margin-right: 2%;
    }
    .next {
    width: 70%;
    }
    .select-style {
    border-radius: 5px;
    padding: 15px;
    font-size:20px;
    }
    label {
        font-weight: 600;
        margin-top: 50px;
        // margin-left: 10px;
        margin-bottom: 4px;
    }
    select {
        font-size: 20px;
        padding: 15px;
        background-color: black;
        color: white;
        border-radius: 10px;
        border: 2px solid rgba(255,255,255,0.2);
        transition: .3s;
    }
    select:hover {
        border: 2px solid rgba(255,255,255,0.5);
    }
    select:focus-visible, textarea:focus-visible {
        border: 2px solid rgba(255,255,255,0.5);
        outline: 0;
    }
    .options-wrap {
    display: flex;
    flex-direction: column;
    }
}
`



export default function ContactElectrical({setFormStage, name, phone, email, lessonString, setLessonString, gearString, setGearString, bikeString, setBikeString, hourString, setHourString, totalPrice, setTotalPrice}){

    ///need to reformat dates here before adding to state, or do in useEffect

    const reRef = useRef();
    const [serverState, setServerState] = useState({formSent: false});
    const [lessonPrice, setLessonPrice] = useState(80)
    const [gearPrice, setGearPrice] = useState(0)
    const [bikeCost, setBikeCost] = useState(0)
    const [hourCost, setHourCost] = useState(0)
    // const [totalPrice, setTotalPrice] = useState(80)

    // const [lessonString, setLessonString] = useState("30 minute lesson - $80")
    // const [gearString, setGearString] = useState("1 Set - (included)")
    // const [bikeString, setBikeString] = useState("1 Bike - (included)")
    // const [hourString, setHourString] = useState("1 Hour")



    let LS1 = "30 minute lesson - $80"
    let LS2 = "1 hour lesson - $80"
    let LS3 = "Coaching only - $100 p/h"
    
    let GS1 = "1 set - (included)"
    let GS2 = "2 sets - $15"
    let GS3 = "3 sets - $30"
    let GS4 = "4 sets - $45"

    let BS1 = "1 bike - (included)"
    let BS2 = "2 bikes - $45"
    let BS3 = "3 bikes - $90"
    let BS4 = "4 bikes - $135"

    let HS1 = "1 Hour"
    let HS2 = "2 Hours"
    let HS3 = "3 Hours"


    useEffect(() => {
        //calculate total price
        if (lessonPrice === 100){setTotalPrice(lessonPrice + hourCost)} else {setTotalPrice(lessonPrice + gearPrice + bikeCost + hourCost)}
        //set string values for forms
        if(lessonPrice === 80 && lessonString !== LS1){setLessonString(LS1)} else if(lessonPrice === 145 && lessonString !== LS2){setLessonString(LS2)} else if(lessonPrice === 100 && lessonString !== LS3){setLessonString(LS3)} 
        if(gearPrice === 0 && gearString !== GS1){setGearString(GS1)} else if(gearPrice === 15 && gearString !== GS2){setGearString(GS2)} else if(gearPrice === 30 && gearString !== GS3){setGearString(GS3)} else if(gearPrice === 45 && gearString !== GS4){setGearString(GS4)} 
        if(bikeCost === 0 && bikeString !== BS1){setBikeString(BS1)} else if(bikeCost === 45 && bikeString !== BS2){setBikeString(BS2)} else if(bikeCost === 90 && bikeString !== BS3){setBikeString(BS3)} else if(bikeCost === 135 && bikeString !== BS4){setBikeString(BS4)}
        if(hourCost === 0 && hourString !== HS1){setHourString(HS1)} else if(hourCost === 100 && hourString !== HS2){setHourString(HS2)} else if(hourCost === 200 && hourString !== HS3){setHourString(HS3)} 
    },[lessonPrice, gearPrice, bikeCost, hourCost])


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()


      async function onSubmit(data){
        // const reRef = useRef<>();
        const token = await reRef.current.executeAsync();
        reRef.current.reset();
        fetch("/api/postmark2", {
          method: `POST`,
          body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            lesson: lessonString,
            gear: gearString,
            bike: bikeString,
            hours: hourString,
            price: totalPrice,
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
                    <label htmlFor="lesson">LESSON SELECTION:</label>
                    <select
                    className="select-style"
                         id="lesson"
                         type="lesson" 
                         name="lesson" 
                         required
                         {...register("Lesson", { required: true})}
                         onChange={(e) => setLessonPrice(Number(e.target.value))}
                    >
                        <option value="80">30 minute lesson - $80</option>
                        <option value="145" >1 hour lesson - $145</option>
                        <option value="100" >Coaching only - $100 p/h</option>
                    </select>
    

                        {lessonPrice !== 100?
                            <div className="options-wrap">
                            <label htmlFor="gear">GEAR HIRE:</label>
                            <select
                            className="select-style"
                                id="gear"
                                type="gear" 
                                name="gear" 
                                required
                                {...register("Gear", { required: true})}
                                onChange={(e) => setGearPrice(Number(e.target.value))}
                            >
                                <option value="0">1 Set - (included)</option>
                                <option value="15" >2 Sets - $15</option>
                                <option value="30" >3 Sets - $30</option>
                                <option value="45" >4 Sets - $45</option>
                            </select> 
                            <label htmlFor="bike">BIKE HIRE:</label>
                            <select
                            className="select-style"
                                id="bike"
                                type="bike" 
                                name="bike" 
                                required
                                {...register("Bike", { required: true})}
                                onChange={(e) => setBikeCost(Number(e.target.value))}
                            >
                                <option value="0">1 bike - (included)</option>
                                <option value="45" >2 bikes - $45</option>
                                <option value="90" >3 bikes - $90</option>
                                <option value="135" >4 bikes - $135</option>
                            </select> 
                            </div>
                    : 
                        <div className="options-wrap">
                            <label htmlFor="hours">Lesson Hours:</label>
                            <select
                            className="select-style"
                                 id="hours"
                                 type="hours" 
                                 name="hours" 
                                 required
                                 {...register("Hours", { required: true})}
                                 onChange={(e) => setHourCost(Number(e.target.value))}
                            >
                                <option value="0" >1 hour</option>
                                <option value="100" >2 hours</option>
                                <option value="200" >3 hours</option>
                            </select>     
                        </div>
                    }
                    <h3>Total: ${totalPrice}</h3>
                    <div>
                        <button className="button-style back" onClick={(e) => {e.preventDefault();setFormStage(0)}}>BACK</button>
                        <button
                        onClick={() => setFormStage(2)}
                        type="submit" 
                        className="g-recaptcha button-style next"
                        data-sitekey="site_key"
                        data-callback='onSubmit'
                        data-action='submit'
                        >
                        NEXT STEP
                        </button>
                    </div>
                  
                </form>
            </FormDiv>
  )
}