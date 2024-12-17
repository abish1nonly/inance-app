import { gapi } from "gapi-script";

const CLIENT_ID = "579042755284-l0qldtepc45q6i8p6jf6ljeps2jf3cod.apps.googleusercontent.com";
const API_KEY = "AIzaSyAuo79yMjGkINKS0qjy34mUR77V6tgRGG0";
const SCOPES = "https://www.googleapis.com/auth/drive.file";

export const initializeGapiClient = async () => {
  try {
    await gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      scope: SCOPES,
    });
  } catch (error) {
    console.error("Error initializing gapi client:", error);
  }
};

export const loadGapi = () => {
  gapi.load("client:auth2", initializeGapiClient);
};

