const functions = require("firebase-functions");
import { uniq } from "lodash";

export const region = "europe-west1";

export const from = functions.config().env.emails.from

export const contactUsEmails : Array<string> = uniq(
  functions
    .config()
    .env.emails.contactUs.split(",")
    .filter((email: string) => email)
    .map((email: string) => email.trim())
);

export const mailjetConf = {
  apiPublicKey: functions.config().env.mailjet.api_key_public,
  apiPrivateKey: functions.config().env.mailjet.api_key_private
}
