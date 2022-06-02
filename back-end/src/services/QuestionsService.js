import { pool } from "../db.js";

import { rateAnswers } from "../utils/rateAnswers.js";


export const sendAnswers = async (answers, username) => {
  try {
     const findDuplicate = await pool.query(`SELECT id from users WHERE username='${ username }'`)

    if(findDuplicate.rows.length !== 0) {
        const deleteDuplicate = await pool.query(`DELETE FROM answers WHERE user_id='${ findDuplicate.rows[0].id }'`)
    }

    const rating = rateAnswers(JSON.parse(answers));
    console.log(rating)

    const insert2 = await pool.query(`INSERT INTO user_properties(user_id, zvierata, introvertnost, vzdelavanie, ludia, hudba, umenie, investovanie, vozidlo, bydlisko, dobrovolnictvo, nabozenstvo, praca, varenie, sport, surodenci, cestovanie, jazyky, rastliny, jedlo, politika) VALUES('${ findDuplicate.rows[0].id}', ${ rating[0] }, ${ rating[1] }, ${ rating[2] }, ${ rating[3] }, ${ rating[4] }, ${ rating[5] }, ${ rating[6] }, ${ rating[7] }, ${ rating[8] }, ${ rating[9] }, ${ rating[10] }, ${ rating[11] }, ${ rating[12] }, ${ rating[13] }, ${ rating[14] }, ${ rating[15] }, ${ rating[16] }, ${ rating[17] }, ${ rating[18] }, ${ rating[19] })`);    
    const insert = await pool.query(`INSERT INTO answers(user_id, answers) VALUES((SELECT id FROM users WHERE username='${ username }'), '${ answers }')`);
  }catch(e) {
    console.log("Error while sending answers" + e);
    return "error";
  }

  return undefined;
};


