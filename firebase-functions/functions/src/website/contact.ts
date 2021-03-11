import { contactUsEmails, from, region } from "../constants";
import { sendMail } from "../utils/email";

import * as functions from "firebase-functions";

interface errorsInterface {
  name?: string;
  email?: string;
  topic?: string;
  message?: string;
}

export const websiteContact = functions
  .region(region)
  .https.onRequest((req: any, res: any) => {
    if (req.method !== "POST") {
      res.status(403).send("Forbidden!");
    }

    const mail = req.body;

    const mailOptions = {
      from: {
        name: mail.name,
        address: mail.email,
      },
    };

    const errors: errorsInterface = {};
    if (typeof mail.name === "undefined" || String(mail.name).trim() === "") {
      errors.name = "You didn't provide a name";
    }

    if (typeof mail.email === "undefined" || String(mail.email).trim() === "") {
      errors.email = "You didn't provide an email";
    }

    if (typeof mail.topic === "undefined" || String(mail.topic).trim() === "") {
      errors.topic = "You didn't provide a topic";
    }

    if (
      typeof mail.message === "undefined" ||
      String(mail.message).trim() === ""
    ) {
      errors.message = "You didn't provide a message";
    }

    const text = `
  A new email from ${mail.name} <${mail.email}>
  Topic: {mail.topic}
  Message:
    ${mail.message}`;

    if (Object.keys(errors).length) {
      return res.status(200).send({ success: false, errors: errors });
    }

    const toEmails = contactUsEmails.map((toEmail: string) => {
      return { Email: toEmail };
    });

    return sendMail(mail.topic, { text: text }, { Email: from }, toEmails, {
      Email: mailOptions.from.address,
      Name: mailOptions.from.name,
    })
      .then((result: any) => {
        if (result.body.Messages[0].Status === "success") {
          res.status(200).send({
            success: true,
            message: "Email was sent",
          });
        } else {
          res
            .status(200)
            .send({ success: false, errors: { general: result.Errors } });
        }
      })
      .catch((err: any) => {
        res.status(200).send({ success: false, errors: { general: err } });
      });
  });
