// Require:
var postmark = require("postmark");

// Send an email:
var client = new postmark.ServerClient(process.env.POSTMARK_AUTH);

//validate token through google
async function validateHuman(token){
  // console.log("validate human running")
const secret = process.env.GATSBY_RECAPTCHA_SECRET;
const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
  {
      method: "POST",
  } 
)
//this is where It's failing??
const data = await response.json();
return data.success;
}

//main function
export default async(req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  console.log(req.body);
  const human = await validateHuman(req.body.token);
  if (!human){
      // console.log("this message shows we're getting to the !human part")
      res.status(400);
      res.json({errors: ["Please, you're not fooling us, bot."]})
      return;
  }
  try {
    let option = "No options selected"
    let optionValue = ""
    if (req.body.lesson === "Coaching only - $100 p/h"){option = "Lesson Hours: "; optionValue = req.body.hours} else {option = "Rental Bikes & Gear: "; optionValue = req.body.bike + ", " + req.body.gear}
    let message = {
      "From": "info@motoschool.co.nz",
      "To": "philsmotoschool@outlook.com",
      "ReplyTo": "philsmotoschool@outlook.com",
      "TemplateId" : 36707535,
      "TemplateModel": {
        "name": req.body.name,
        "email": req.body.email,
        "phone": req.body.phone,
        "lesson": req.body.lesson,
        "option": option,
        "optionValue": optionValue,
        "price": req.body.price
      },
      "MessageStream": "outbound"
    }
    await client.sendEmailWithTemplate(message)
    console.log("customer-lead-sent")
    message.To = "daniel@thoughtfulhq.com"
    message.ReplyTo = "philsmotoschool@outlook.com"
    await client.sendEmailWithTemplate(message)
    console.log("backup-lead-sent")
    return res.status(200).json({
      message: "Lead Form 2 sent successfully",
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: "There was a form error", error: err })
  }
}
