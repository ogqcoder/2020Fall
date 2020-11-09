const mysql = require('./mysql');


async function getAll() {
    //throw { status: 501, message: "This is a fake error" }
    //await Promise.resolve()
    console.log("Called Get All")
    return await mysql.query(`SELECT * FROM contactmethods`);
}

async function get(id) {
    const rows = await mysql.query(`SELECT * FROM contactmethods WHERE id=?`, [id]);
    if (!rows.length) throw { status: 404, message: "Sorry, there is no such contact method" };
    return rows;
}

async function getTypes() {
    return await mysql.query(`SELECT id, name FROM Types WHERE Type_id = 2`);
}

async function add(Type, Value, isPrimary, CanSpam, User_id) {
    const sql = 'INSERT INTO `contactmethods` (`created_At`, `Type`, `Value`, `isPrimary`, `CanSpam`, `User_id`) VALUES ? ';
    const params = [[new Date(), Type, Value, isPrimary, CanSpam, User_id]]; /* new Date(DOB) dont have this row may add it though*/
    return await mysql.query(sql, [params]);
}

async function update(id, Type, Value, isPrimary, CanSpam, User_id) {
    const sql = 'UPDATE `contactmethods` SET ? WHERE `id` = ?;';
    const params = { update_at: new Date(), Type, Value, isPrimary, CanSpam, User_id };
    return await mysql.query(sql, [params, id]);
}

async function remove(id) {
    const sql = 'DELETE FROM `contactmethods` WHERE `contactmethods`.`id` = ?';
    return await mysql.query(sql, [id]);
}


async function exists(email) {
    const rows = await mysql.query(`SELECT * FROM contactmethods WHERE Value=?`, [email]);
    return rows.length;
}


const search = async q => await mysql.query(`SELECT id, Value FROM contactmethods WHERE Value LIKE ?; `, [`%${q}%`]);

module.exports = { add, getAll, remove, getTypes, update, exists }
// getAll, get, add, update, remove, getTypes, search