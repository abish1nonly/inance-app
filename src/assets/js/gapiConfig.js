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

export function loadGapi () {
  const existingScript = document.getElementById("googleMaps");

  if (!existingScript) {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.id = "googleMaps";
    script.async = true;
    script.defer = true;

    script.onerror = () => {
      console.error("Failed to load Google Maps script. Check your API key or network connection.");
    };

    document.body.appendChild(script);
  } else {
    console.warn("Google Maps script already loaded.");
  }
};

