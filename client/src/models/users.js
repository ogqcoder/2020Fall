import { myFetch } from "./my-fetch";



export function getList() {
    return myFetch('users', true);
}



export const users = [
    {
        id: 1,
        firstname: "Bruce",
        lastname: "Wayne",
        handle: "iam_vengeance",
        datejoined: 2019,
        followers: ["thebestrobin", "pennyforyourthoughts"]
    },
    {
        id: 2,
        firstname: "Dick",
        lastname: "Grayson",
        handle: "thebestrobin",
        datejoined: 2019,
        followers: []
    },
    {
        id: 3,
        firstname: "Alfred",
        lastname: "Pennyworth",
        handle: "pennyforyourthoughts",
        datejoined: 2019,
        followers: []
    }]