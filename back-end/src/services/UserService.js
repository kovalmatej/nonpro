import bcrypt from "bcryptjs";

import { userSchema } from "../schemas/user.js";

import { pool } from "../db.js";

export const createUser = async ({ username, password }) => {
    const { error, value } = userSchema.validate({ username, password });

    if(error === undefined) {
      const findDuplicate = await pool.query(`SELECT id from users WHERE username='${ username }'`)

      if(findDuplicate.rows.length === 0) {
        const encryptedPassword = await bcrypt.hash(password, 10);
        const insert = pool.query(`INSERT INTO users(username, password) VALUES('${ username }', '${ encryptedPassword }')`);
        return undefined;
      }

      return [{duplicate: 'Užívateľ pod týmto menom už existuje.'}]
    }
};

export const loginUser = async ({ username, password }) => {
  const { error, value } = userSchema.validate({ username });

  if(error !== undefined) {
    const user = await pool.query(`SELECT username, password FROM users WHERE username='${ username }'`);

    if(user.rows.length > 0) {
      const dbPassword = user.rows[0].password;

      if(user && await bcrypt.compare(password, dbPassword)) {


        return undefined;
      }
    }
  }

  return { notFound: 'Používateľ s touto kombináciou mena a hesla nebol nájdený.'};
};

export const getId = async (username) => {
  const select = await pool.query(`SELECT id FROM users WHERE username='${ username }'`);
 
  if(!select.rows) {
    return undefined;
  }

  return select.rows[0];
};

export const getAnswersStatus = async (username) => {
  const select = await pool.query(`SELECT answers.id FROM answers WHERE answers.user_id=(SELECT users.id FROM users where users.username='${ username }')`);
  console.log(select)
  if(select.rows.length > 0) {
    return true;
  }
  return false;
};

