import bcrypt from "bcryptjs";

import { userSchema } from "../schemas/user.js";

import { pool } from "../db.js";

export const createUser = async ({ username, password }) => {
    const { error, value } = userSchema.validate({ username, password });

    if(error !== undefined) {
      const findDuplicate = await pool.query(`SELECT id from users WHERE username='${ username }'`)

      if(findDuplicate.rows.length === 0) {
        const encryptedPassword = await bcrypt.hash(password, 10);
        pool.query(`INSERT INTO users(username, password) VALUES('${ username }', '${ encryptedPassword }')`);
        return undefined;
      }

      return [{duplicate: 'Užívateľ pod týmto menom už existuje.'}]
    }
};
