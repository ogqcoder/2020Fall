import { myFetch, myFetch2, fetchUsers } from "./my-fetch";

export function fetch() {
    return myFetch('users', true);
}

export function getList() {
    return fetchUsers("http://localhost:3000/users")
}

export function getAUser() {
    return myFetch("users/46").then(x => { return x })

}

export function realLogin(data) {
    myFetch2("users/login", data)
}


// export const users =
//     [
//         {
//             "id": 43,
//             "created_at": "2020-11-17T19:02:27.000Z",
//             "update_at": "2020-11-17T19:03:02.000Z",
//             "FirstName": "WEB",
//             "LastName": "DuBois",
//             "Email": "",
//             "Password": "$2b$08$DynnlvuUb8ZE81mArNKe7OZpjAiuHE31kyy2bh",
//             "User_Type": 6
//         },
//         {
//             "id": 44,
//             "created_at": "2020-11-19T18:39:17.000Z",
//             "update_at": "2020-11-19T18:39:53.000Z",
//             "FirstName": "Dyno",
//             "LastName": "Mite",
//             "Email": "",
//             "Password": "$2b$08$lAxkpRtaBYIqMHDQrbZ0BOVLo0oiqhNuttgt9e",
//             "User_Type": 6
//         },
//         {
//             "id": 46,
//             "created_at": "2020-11-20T20:15:37.000Z",
//             "update_at": "2020-11-20T20:16:14.000Z",
//             "FirstName": "Thomas",
//             "LastName": "Wayne",
//             "Email": "",
//             "Password": "$2b$08$YT1Jz8nbU8tFyoXmN5IIrutcH4gN085cozNSiJ",
//             "User_Type": 6
//         },
//         {
//             "id": 51,
//             "created_at": "2020-11-21T23:14:03.000Z",
//             "update_at": "2020-11-21T23:14:42.000Z",
//             "FirstName": "Timothy",
//             "LastName": "Grey",
//             "Email": "",
//             "Password": "$2b$08$/nkZKTydmxRmXn9qd2tHcuTsa2hosXw/g9jzAa",
//             "User_Type": 6
//         },
//         {
//             "id": 58,
//             "created_at": "2020-11-22T18:53:51.000Z",
//             "update_at": "2020-11-22T18:54:30.000Z",
//             "FirstName": "Minato",
//             "LastName": "Namikaze",
//             "Email": "",
//             "Password": "$2b$08$n7CXGLTNUwOJsqyh7.Z0CuBSseGshy9SPLToOE",
//             "User_Type": 6
//         },
//         {
//             "id": 59,
//             "created_at": "2020-11-22T18:55:59.000Z",
//             "update_at": "2020-11-22T18:56:38.000Z",
//             "FirstName": "Kushina",
//             "LastName": "Uzumaki",
//             "Email": "kuzumaki@gmail.com",
//             "Password": "$2b$08$FTfzzBUsMXo8ETT2hn9sIeBkjwTF15CdZkjyEu",
//             "User_Type": 6
//         }
//     ]