const mysql = require('./mysql');
const cm = require('./contactmethods')
//const data = [{ name: 'Moshe', age: 43}, { name: 'Biden', age: 78 }]

async function getAll() {
    //throw { status: 501, message: "This is a fake error" }
    //await Promise.resolve()
    console.log("Called Get All")
    return await mysql.query(`SELECT * FROM users`);
}

async function get(id) {
    const rows = await mysql.query(`SELECT * FROM users WHERE id=?`, [id]);
    if (!rows.length) throw { status: 404, message: "Sorry, there is no such user" };
    return rows;
}

async function getTypes() {
    return await mysql.query(`SELECT id, name FROM Types WHERE Type_id = 2`);
}

async function add(FirstName, LastName, email, Password, User_Type) {
    const sql = 'INSERT INTO `users` (`created_At`, `FirstName`, `LastName`, `email`, `Password`, `User_Type`) VALUES ? ';
    const params = [[new Date(), FirstName, LastName, email, Password, User_Type]]; /* new Date(DOB) dont have this row may add it though*/
    return await mysql.query(sql, [params]);
}

async function update(id, FirstName, LastName, email, Password, User_Type) {
    const sql = 'UPDATE `users` SET ? WHERE `id` = ?;';
    const params = { update_at: new Date(), FirstName, LastName, email, Password, User_Type };
    return await mysql.query(sql, [params, id]);
}

async function remove(id) {
    const sql = 'DELETE FROM `users` WHERE `users`.`id` = ?';
    return await mysql.query(sql, [id]);
}

async function register(FirstName, LastName, email, Password, User_Type) {
    if (cm.exists(email)) {
        throw { status: 409, message: "Email already Exists " }
    }
    const res = add(FirstName, LastName, email, Password, User_Type)
    const emailRes = cm.add(cm.Types.Email, email, true, true, res.insertId)
    const user = get(res.insertId)
    user.primaryEmail = email;
    return user;
}
// async function register(FirstName, LastName, email, Password, User_Type) {
//     if (exists(email)) {
//         throw { status: 409, message: "Email already Exists " }
//     }


const search = async q => await mysql.query(`SELECT id, FirstName, LastName FROM Users WHERE LastName LIKE ? OR FirstName LIKE ?; `, [`%${q}%`, `%${q}%`]);

module.exports = { register, getAll, get, add, update, remove, getTypes, search }