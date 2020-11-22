const mysql = require('./mysql');

const PREFIX = process.env.MYSQL_TABLE_PREFIX || 'Fall2020_';

async function getAll() {
    //throw { status: 501, message: "This is a fake error" }
    //await Promise.resolve()
    console.log("Called Get All")
    return await mysql.query(`SELECT * FROM ${PREFIX}Comments`);
}



async function getCommentsFromThatPost(id) {
    const rows = await mysql.query(`SELECT * FROM ${PREFIX}Comments WHERE post_id=?`, [id]);
    if (!rows.length) throw { status: 404, message: "Sorry, there is no such comment" };
    return rows;
}

async function deleteComment(id) {
    const sql = `DELETE FROM ${PREFIX}Comments WHERE ${PREFIX}Comments.id = ?`;
    return await mysql.query(sql, [id]);
    //finished
}

async function getTypes() {
    return await mysql.query(`SELECT id, name FROM Types WHERE Type_id = 2`);
} //figure out what to do with this

async function comment(Text, Post_id, Owner_id) {
    const sql = `INSERT INTO ${PREFIX}Comments (created_At, Text, Post_id, Owner_id) VALUES ? `;
    const params = [[new Date(), Text, Post_id, Owner_id]];
    return await mysql.query(sql, [params]);
    //finished
}

async function updateComment(id, Text) {
    const sql = `UPDATE ${PREFIX}Comments SET ? WHERE id = ?;`;
    const params = { update_At: new Date(), Text };
    return await mysql.query(sql, [params, id]);
    //id refers to comment_id and not post or user ids keep in mind for front end connection
    //this is finished
}

async function remove(id) {
    const sql = `DELETE FROM ${PREFIX}Comments WHERE ${PREFIX}Comments.id = ?`;
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`SELECT id, FirstName, LastName FROM Users WHERE LastName LIKE ? OR FirstName LIKE ?; `, [`%${q}%`, `%${q}%`]);

module.exports = { deleteComment, getCommentsFromThatPost, comment, updateComment, getAll }