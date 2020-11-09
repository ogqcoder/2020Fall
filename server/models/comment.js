const mysql = require('./mysql');

//const data = [{ name: 'Moshe', age: 43}, { name: 'Biden', age: 78 }]

async function getAll() {
    //throw { status: 501, message: "This is a fake error" }
    //await Promise.resolve()
    console.log("Called Get All")
    return await mysql.query(`SELECT * FROM comments`);
}

async function get(id) {
    const rows = await mysql.query(`SELECT * FROM Posts WHERE id=?`, [id]);
    if (!rows.length) throw { status: 404, message: "Sorry, there is no such user" };
    return rows;
}

async function getCommentsFromThatPost(id) {
    const rows = await mysql.query(`SELECT * FROM comments WHERE post_id=?`, [id]);
    if (!rows.length) throw { status: 404, message: "Sorry, there is no such comment" };
    return rows;
}

async function getTypes() {
    return await mysql.query(`SELECT id, name FROM Types WHERE Type_id = 2`);
} //figure out what to do with this

async function add(text, post_id, owner_id) {
    const sql = 'INSERT INTO `comments` (`createdAt`, `post_id`, `text`, `owner_id`) VALUES ? ';
    const params = [[new Date(), URL, post_id, text, owner_id]]; /* new Date(DOB) dont have this row may add it though*/
    return await mysql.query(sql, [params]);
}

async function update(text, post_id, owner_id) {
    const sql = 'UPDATE `comments` SET ? WHERE `id` = ?;';
    const params = { updatedAt: new Date(), text, post_id, owner_id };
    return await mysql.query(sql, [params, id]);
}

async function remove(id) {
    const sql = 'DELETE FROM `comments` WHERE `comments`.`id` = ?';
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`SELECT id, FirstName, LastName FROM Users WHERE LastName LIKE ? OR FirstName LIKE ?; `, [`%${q}%`, `%${q}%`]);

module.exports = { get, add, update, remove, getCommentsFromThatPost }