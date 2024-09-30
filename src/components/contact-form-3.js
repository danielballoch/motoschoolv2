import React, {useRef, useEffect, useState} from "react"
import styled from "@emotion/styled"
import { useForm } from "react-hook-form"
import ReCAPTCHA from "react-google-recaptcha";
import { navigate } from "gatsby";
import { isWithinInterval } from "date-fns";
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const FormDiv = styled.div`
width: 694px;
// margin-right: 100px;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
form {
    // padding: 50px;
    width: 694px;
    // margin-right: 20px;
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
           .back {
    width: 28%;
    margin-right: 2%;
    }
    .next {
    width: 70%;
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
        border: 2px solid rgba(255,255,255,1);
        transition: .3s;
    }
    // input:hover {
    //     border: 1px solid rgba(0,0,0,0.5);
    // }
    input:focus-visible, textarea:focus-visible {
        border: 2px solid rgba(255,255,255,0.5);
        outline: 0;
    }
}
.time-selection {
        display: flex;
        flex-wrap: wrap;
        // justify-content: space-between;
        div {
            // border: solid 2px white;
            border: 2px solid rgba(255,255,255,0.2);
            border-radius: 10px;
            font-size: 16px;
            font-weight: 600;
            padding: 14px 14px;
            box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
            margin: 0 10px 10px 0;
            transition: .3s;
            // background-color: grey;
            :hover {
                cursor: pointer;
                border: 2px solid rgba(255,255,255,0.5);
            }
        }
        .active-time {
            background-color: white;
            color: black;
        }
}
.grecaptcha-badge { visibility: hidden!important; }
.recaptcha-sub {
font-size: 14px;
color: hsla(40,22%,92%,.6);
}
.react-date-picker__wrapper {
width: 100%;
padding: 15px;
  font-size: 20px;
  padding: 15px;
  background-color: black;
  color: white;
  border-radius: 10px;
//   border: 2px solid rgba(255,255,255,1);
  border: 2px solid rgba(255,255,255,0.2);
  -webkit-transition: .3s;
  transition: .3s;
  :hover {
  cursor: pointer;
  border: 2px solid rgba(255,255,255,0.5);
  }
  input {
  border: none;
  }
  input:focus-visible {
  border: none;
  }
}
.react-date-picker__calendar-button__icon, .react-date-picker__clear-button__icon {
stroke: white;
transition: .3s;
}
.react-date-picker__inputGroup__input {
padding: 0;
}
@media(max-width: 940px){
    width: 90vw!important;
    form {
    box-sizing: border-box;
    width: 90vw!important;
}

`

function isWithinRange(date, range) {
    return isWithinInterval(date, { start: range[0], end: range[1] });
}
function isWithinRanges(date, ranges) {
    return ranges.some(range => isWithinRange(date, range));
}
let in3Days = new Date(2023, 11, 28);
let in5Days = new Date(2023, 11, 28);
let in13Days = new Date(2023, 11, 26);
let in15Days = new Date(2023, 11, 26);

export default function ContactElectrical({setFormStage, timesAvailable, totalPrice, name, phone, email, lessonString, gearString, bikeString, hourString}){

    ///need to reformat dates here before adding to state, or do in useEffect

    const reRef = useRef();
    const [serverState, setServerState] = useState({formSent: false});
    const [selectedDate, updateSelectedDate] = useState(new Date());
    const [activeTime, setActiveTime] = useState(0)
    const [bookedDates, setBookedDates] = useState([ [in3Days, in5Days],[in13Days, in15Days],])


    function tileDisabled({ date, view}) {
        // Add class to tiles in month view only
        if (view === 'month') {
          // Check if a date React-Calendar wants to check is within any of the ranges
          return isWithinRanges(date, bookedDates);
        }
    }


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()


      async function onSubmit(data){
        // const reRef = useRef<>();
        const token = await reRef.current.executeAsync();
        reRef.current.reset();
        let dd = selectedDate.getDate();
        let mm = selectedDate.getMonth()+1;
        let yyyy = selectedDate.getFullYear();
        let reformattedDate = dd+"/"+mm+"/"+yyyy;
        fetch("/api/postmark-booking", {
          method: `POST`,
          body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            lesson: lessonString,
            date: reformattedDate,
            time: timesAvailable[activeTime].time,
            gear: gearString,
            bike: bikeString,
            hours: hourString,
            totalPrice: totalPrice,
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
            navigate("/booking-success/");
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

          
                    <label htmlFor="email">BOOKING PERIOD:</label>
                    <DatePicker onChange={updateSelectedDate} value={selectedDate} tileDisabled={tileDisabled} minDate={new Date()} format="dd-MM-y"/>
                    
                    <label>TIME SELECTION:</label>
                    <div className="time-selection">
                        {timesAvailable.map((time, i)=>(
                            <div key={"timeslot "+i} onClick={()=>setActiveTime(i)} className={i === activeTime ? "active-time" : ""}>{time.time}</div>
                        ))}
                    </div>

                    <h3>Total: ${totalPrice}</h3>
                    <p className="recaptcha-sub">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
                    
                    <div>
                    <button className="button-style back" onClick={(e) => {e.preventDefault();setFormStage(1)}}>BACK</button>
                    <button
                        onClick={() => setFormStage(3)}
                        type="submit" 
                        className="g-recaptcha button-style next"
                        data-sitekey="site_key"
                        data-callback='onSubmit'
                        data-action='submit'
                    >
                    SEND REQUEST</button>
                    </div>
                </form>
            </FormDiv>
  )
}