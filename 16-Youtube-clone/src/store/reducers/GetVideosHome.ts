import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../slice";
import axios from 'axios'
import { YOUTUBE_API_URL } from "../../utils/constants";
import { parseData } from "../../utils";
import { HomePageVideos } from "../../Types";

const API_KEY = "AIzaSyAJ3BZHm6VsBNT0XIXPdMlj0GOH6PwxJKY";

export const GetVideosHome = createAsyncThunk("youtubeApp/Home", async(isNext: boolean, {getState}) => {
  const {
    youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
  } = getState() as RootState;

  let url = `${YOUTUBE_API_URL}/search?maxResults=20&q="Projet react"&key=${API_KEY}&part=snippet&type=video`;

  if (isNext && nextPageTokenFromState) {
    url += `&pageToken=${nextPageTokenFromState}`;
  }

  let parsedData: HomePageVideos[] = []; // Déclarer parsedData en dehors du bloc try
  let nextPageToken: string | null = null; // Déclarer nextPageToken en dehors du bloc try

  try {
    const { data: { items, nextPageToken: token } } = await axios.get(url);
    console.log(items);
    // Créer fichier parseData.ts dans utils et les autres
    parsedData = await parseData(items); // Affecter la valeur de parsedData ici
    nextPageToken = token; // Affecter la valeur de nextPageToken ici
  } catch (error) {
    console.error("Une erreur est survenue lors de la récupération des vidéos:", error);
  }
  
  // Retourner les données dans les deux cas
  return { parsedData, nextPageToken };
});

