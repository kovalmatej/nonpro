import { pool } from "../db.js";

export const sendAnswers = async (answers, username) => {
  try {
     const findDuplicate = await pool.query(`SELECT id from users WHERE username='${ username }'`)

    if(findDuplicate.rows.length !== 0) {
        const deleteDuplicate = await pool.query(`DELETE FROM questions WHERE user_id='${ findDuplicate.rows[0].id }'`)
    }

    const insert = await pool.query(`INSERT INTO questions(user_id, answers) VALUES((SELECT id FROM users WHERE username='${ username }'), '${ answers }')`);
  }catch(e) {
    console.log("Error while sending answers" + e);
    return "error";
  }

  return undefined;
};
