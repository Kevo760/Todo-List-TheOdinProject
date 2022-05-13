import { generateSessionStorage, generateLocalStorageSession } from "./generateWebsite";


if(window.localStorage) {
    generateLocalStorageSession()
} else {
    generateSessionStorage()
};





