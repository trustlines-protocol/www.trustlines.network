import { isString } from "lodash";
import { mailjetConf } from "../constants";

interface RecipientType {
  Email: string;
  Name?: string;
}

interface BodyType {
  text?: string;
  html?: string;
}

interface MessageType {
  From: RecipientType;
  To: Array<RecipientType>;
  ReplyTo?: RecipientType;
  Subject: string;
  TextPart?: string;
  HtmlPart?: string;
}

type MessagesType = {
  Messages: Array<MessageType>;
};

const pattern = /^[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i;

let sandBoxMode = false;

export function setSandBoxMode(mode: boolean) {
  sandBoxMode = mode;
}

function getSandboxMode() {
  return sandBoxMode;
}

export default function validateEmailAddress(email: string) {
  return isString(email) && pattern.test(email);
}

/**
 * Send a mail over the mailjet api
 *
 * @param subject
 * @param body
 * @param from
 * @param to
 * @param replyTo
 */
export const sendMail = (
  subject: string,
  body: BodyType,
  from: RecipientType,
  to: Array<RecipientType>,
  replyTo?: RecipientType
): any => {
  const mailjet = require("node-mailjet").connect(
    mailjetConf.apiPublicKey,
    mailjetConf.apiPrivateKey
  );

  const MessagesObj: MessagesType = { Messages: [] };

  const messages = to
    .map((recipient) => {
      const Message: MessageType = {
        From: from,
        To: [recipient],
        ReplyTo: replyTo,
        Subject: subject,
      };

      if (body.text) {
        Message.TextPart = body.text;
      }

      if (body.html) {
        Message.HtmlPart = body.html;
      }

      return Message;
    })
    .reduce((prev, curr) => {
      prev.Messages.push(curr);

      return prev;
    }, MessagesObj);

  return mailjet
    .post("send", { version: "v3.1" })
    .request({
      ...messages,
      SandboxMode: getSandboxMode(),
    })
    .then((result: any) => {
      console.log("successfully sent mail");
      return result;
    })
    .catch((err: any) => {
      return Promise.reject(err);
    });
};
