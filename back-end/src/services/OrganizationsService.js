import { organizationSchema } from "../schemas/organization.js";

import { pool } from "../db.js";

const duplicationErrors = [
  "Organizácia pod týmto menom už existuje.",
  "Zadané IČO pod týmto už existuje v databázi.",
];

export const createOrganization = async ({title, ico, city, street, psc, pravna_forma, iban, category, owner}) => {
    const { error, value } = organizationSchema.validate({ title, ico, city, street, psc, pravna_forma, iban, category, owner });
    console.log(error)

    if(error === undefined) {
      let duplicateErrorsString = "";
      const findTitleDuplicate = await pool.query(`SELECT title from organizations WHERE title='${ title }'`)
      const findICODuplicate = await pool.query(`SELECT ico from organizations WHERE ico='${ ico }'`)

      // Check duplication in DB
      if(findTitleDuplicate.rows.length !== 0) {
        duplicateErrorsString = duplicationErrors[0] + "/n";
      }
      
      if(findICODuplicate.rows.length !== 0) {
        duplicateErrorsString += duplicationErrors[1];
      }

      if(duplicateErrorsString !== "") {
        return [{duplicate: duplicateErrorsString}];
      }

      // Insert organization into DB
      const insert = pool.query(
        `INSERT INTO organizations(title, ico, city, street, psc, pravna_forma, iban, category, owner) 
        VALUES('${ title }', '${ ico }','${ city }', '${ street || "" }', '${ psc || "" }', '${ pravna_forma || "" }', '${ iban || "" }', '${ category || "" }' '${ owner || 1 }')`
      );

      console.log(insert);

      return;
    }

    return {error: error.details.message};
};


export const getAllOrganizations = async () => {
  const select = await pool.query(`SELECT * FROM organizations`);

  return select.rows;
};

export const getOrganization = async (id) => {
  const select = await pool.query(`SELECT * FROM organizations WHERE id=${id}`);

  return select.rows[0];
};
