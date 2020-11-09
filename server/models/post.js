const mysql = require('./mysql');

//const data = [{ name: 'Moshe', age: 43}, { name: 'Biden', age: 78 }]

async function getAll() {
    //throw { status: 501, message: "This is a fake error" }
    //await Promise.resolve()
    console.log("Called Get All")
    return await mysql.query(`SELECT * FROM posts`);
}

async function get(id) {
    const rows = await mysql.query(`SELECT * FROM posts WHERE id=?`, [id]);
    if (!rows.length) throw { status: 404, message: "Sorry, there is no such user" };
    return rows;
}

async function getTypes() {
    return await mysql.query(`SELECT id, name FROM Types WHERE Type_id = 2`);
} //figure out what to do with this

async function add(URL, Text, Mediatype, Owner_id) {
    const sql = 'INSERT INTO `posts` (`created_At`, `URL`, `Text`, `Media_type`, `Owner_id`) VALUES ? ';
    const params = [[new Date(), URL, Text, Mediatype, Owner_id]]; /* new Date(DOB) dont have this row may add it though*/
    return await mysql.query(sql, [params]);
}

async function update(id, URL, Text, Media_type, Owner_id) {
    const sql = 'UPDATE `posts` SET ? WHERE `id` = ?;';
    const params = { update_At: new Date(), URL, Text, Media_type, Owner_id };
    return await mysql.query(sql, [params, id]);
}

async function remove(id) {
    const sql = 'DELETE FROM `posts` WHERE `posts`.`id` = ?';
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`SELECT id, FirstName, LastName FROM posts WHERE LastName LIKE ? OR FirstName LIKE ?; `, [`%${q}%`, `%${q}%`]);

module.exports = { getAll, get, add, update, remove, getTypes, search }