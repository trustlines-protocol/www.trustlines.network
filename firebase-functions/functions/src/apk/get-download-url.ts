import { region } from "../constants";

import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

import serviceAccount from "./trustlines-production-service-account.json";

const BUCKET_NAME = "trustlines-38c29.appspot.com";
const FILE_NAME = "app-production-release.apk";

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
});

export const apkGetDownloadUrl = functions
  .region(region)
  .https.onRequest((req: any, res: any) => {
    res.set("Access-Control-Allow-Origin", "*");

    // Deal with cors requests
    if (req.method === "OPTIONS") {
      // Send response to OPTIONS requests
      res.set("Access-Control-Allow-Methods", "POST");
      res.set("Access-Control-Allow-Headers", "Content-Type");
      res.set("Access-Control-Max-Age", "3600");
      return res.status(204).send("");
    }

    if (req.method !== "GET") {
      res.status(403).send("Forbidden!");
    }

    const storage = admin.storage(app);
    const bucket = storage.bucket(BUCKET_NAME);
    const file = bucket.file(FILE_NAME);

    file
      .getSignedUrl({
        action: "read",
        expires: "03-09-2491",
      })
      .then((urls) => res.status(200).json(urls[0]))
      .catch((error) => res.status(500).json({ message: error.message }));
  });
