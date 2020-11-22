const mysql = require('./mysql');

const PREFIX = process.env.MYSQL_TABLE_PREFIX || 'Fall2020_';

async function getAll() {
    //throw { status: 501, message: "This is a fake error" }
    //await Promise.resolve()
    console.log("Called Get All")
    return await mysql.query(`SELECT * FROM ${PREFIX}Posts`);
} //finished

async function get(id) {
    const rows = await mysql.query(`SELECT * FROM ${PREFIX}Posts WHERE id=?`, [id]);
    if (!rows.length) throw { status: 404, message: "Sorry, there is no such user" };
    return rows;
}


async function add(URL, Text, Mediatype, Owner_id) {
    const sql = `INSERT INTO ${PREFIX}Posts (created_At, URL, Text, Media_type, Owner_id, Privacy_Setting) VALUES ?`;
    const params = [[new Date(), URL, Text, Mediatype, Owner_id, 4]]; /* new Date(DOB) dont have this row may add it though*/
    return await mysql.query(sql, [params]);
}

async function update(id, URL, Text, Media_type, Owner_id) {
    const sql = `UPDATE ${PREFIX}Posts SET ? WHERE id = ?;`;
    const params = { update_At: new Date(), URL, Text, Media_type, Owner_id };
    return await mysql.query(sql, [params, id]);
}

async function remove(owner_id, post_id) {
    const sql = `DELETE FROM ${PREFIX}Posts WHERE ${PREFIX}Posts.Owner_id = ? AND ${PREFIX}Posts.Post_id = ?`;
    return await mysql.query(sql, [owner_id, post_id]);
} //done

const search = async q => await mysql.query(`SELECT id, FirstName, LastName FROM ${PREFIX} Posts WHERE LastName LIKE ? OR FirstName LIKE ?; `, [` % ${q}% `, ` % ${q}% `]);

module.exports = { add, update, remove, search, getAll }