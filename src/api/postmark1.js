// Require:
var postmark = require("postmark");

// Send an email:
var client = new postmark.ServerClient(process.env.POSTMARK_AUTH);

//function to validate token with google re-captcha
async function validateHuman(token){
const secret = process.env.GATSBY_RECAPTCHA_SECRET;
const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
  {
      method: "POST",
  } 
)
const data = await response.json();
return data.success;
}

//main function
export default async(req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  console.log(req.body);
  //call re-captcha validation function
  const human = await validateHuman(req.body.token);
  if (!human){
      // console.log("this message shows we're getting to the !human part")
      res.status(400);
      res.json({errors: ["Please, you're not fooling us, bot."]})
      return;
  }
  try {
    let message = {
      "From": "info@motoschool.co.nz",
      "To": "philsmotoschool@outlook.com",
      "ReplyTo": "philsmotoschool@outlook.com",
      "TemplateId" : 36706722,
      "TemplateModel": {
        "name": req.body.name,
        "email": req.body.email,
        "phone": req.body.phone,
        "message": req.body.message,
        "youth": req.body.youth,
        "adults": req.body.adults,
      },
      "MessageStream": "outbound"
    }
    //send emails if human
    await client.sendEmailWithTemplate(message)
    console.log("customer-lead-sent")
    message.To = "daniel@thoughtfulhq.com"
    message.ReplyTo = "philsmotoschool@outlook.com"
    await client.sendEmailWithTemplate(message)
    console.log("backup-lead-sent")
    return res.status(200).json({
      message: "Lead Form 1 sent successfully",
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: "There was a form error", error: err })
  }
}
