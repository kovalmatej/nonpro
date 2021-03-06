import { organizationSchema } from "../schemas/organization.js";

import Stripe from "stripe";

import { pool } from "../db.js";
import { query } from "express";

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
  const select = await pool.query(`SELECT organizations.*, ico_nace.nace as nace_code, nace.type as type  FROM organizations INNER JOIN ico_nace ON organizations.ico=ico_nace.ico INNER JOIN nace ON ico_nace.nace=nace.nace ORDER BY organizations.id ASC`);

  return select.rows;
};

export const getOrganization = async (id) => {
  const select = await pool.query(`SELECT organizations.*, ico_nace.nace as nace_code, nace.type as type FROM organizations INNER JOIN ico_nace ON organizations.ico=ico_nace.ico INNER JOIN nace ON ico_nace.nace=nace.nace WHERE organizations.id=${id}`);

  return select.rows[0];
};

export const topOrganization = async (id) => {
  const findTopDuplicate = await pool.query(`SELECT id from sponsored WHERE organization_id='${ id }'`)

  // Check duplication in DB
  if(findTopDuplicate.rows.length !== 0) {
    return undefined;
  }
  const stripe = Stripe('sk_test_51K5YQoHJaurUFnL9Ffyshyqh9IclwZQcAXTFB1VSgrz1xHdSqRG4igugS9RmjXh2IfjwzftnTY41iskJ3oU8yKMF00BZPXOkaa');

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1K5Z8QHJaurUFnL9JedaqEU6',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `http://localhost:3000/organizacie/success`,
    cancel_url: `http://localhost:3000/organizacie/error`,
  });

  const today = new Date();
  let nextWeek = new Date();
  
  nextWeek.setDate(today.getDate() + 7);

  const insert = await pool.query(`INSERT INTO sponsored(organization_id, date) VALUES('${ id }', '${ nextWeek.toDateString() }')`);
    
  return session.url;
};

export const getNaces = async () => {
  const select = await pool.query(`SELECT nace, type FROM nace`);

  return select.rows;
}

export const getNaceByIco = async (ico) => {
  const select = await pool.query(`SELECT nace.nace, type FROM nace INNER JOIN ico_nace ON nace.nace = ico_nace.nace WHERE ico_nace.ico='${ ico }'`);

  return select.rows[0]
};

export const getRecommendedOrganizations = async (id, type = 0) => {
  let select;
  if(type == 0) {
    select = await pool.query(`
      SELECT organizations.*, (nace_properties.zvierata * user_properties.zvierata + nace_properties.introvertnost * user_properties.introvertnost + nace_properties.vzdelavanie * user_properties.vzdelavanie + nace_properties.ludia * user_properties.ludia + nace_properties.hudba * user_properties.hudba + nace_properties.umenie * user_properties.umenie + nace_properties.investovanie * user_properties.investovanie + nace_properties.vozidlo * user_properties.vozidlo + nace_properties.mesto * user_properties.bydlisko + nace_properties.dobrovolnictvo * user_properties.dobrovolnictvo + nace_properties.nabozenstvo * user_properties.nabozenstvo + nace_properties.manualna_praca * user_properties.praca + nace_properties.varenie * user_properties.varenie + nace_properties.sport * user_properties.sport + nace_properties.surodenci * user_properties.surodenci + nace_properties.cestovanie * user_properties.cestovanie + nace_properties.jazyky * user_properties.jazyky + nace_properties.rastliny * user_properties.rastliny + nace_properties.jedlo * user_properties.jedlo + nace_properties.politika * user_properties.politika) as rating FROM organizations 
        INNER JOIN ico_nace ON ico_nace.ico = organizations.ico
        INNER JOIN nace ON nace.nace = ico_nace.nace
        INNER JOIN nace_properties ON nace_properties.nace_id = nace.id 
        JOIN user_properties ON user_properties.user_id=${ id }
        ORDER BY rating DESC
        LIMIT 100
    `)
  } else {
     select = await pool.query(`
      SELECT organizations.*, (nace_properties.zvierata * user_properties.zvierata + nace_properties.introvertnost * user_properties.introvertnost + nace_properties.vzdelavanie * user_properties.vzdelavanie + nace_properties.ludia * user_properties.ludia + nace_properties.hudba * user_properties.hudba + nace_properties.umenie * user_properties.umenie + nace_properties.investovanie * user_properties.investovanie + nace_properties.vozidlo * user_properties.vozidlo + nace_properties.mesto * user_properties.bydlisko + nace_properties.dobrovolnictvo * user_properties.dobrovolnictvo + nace_properties.nabozenstvo * user_properties.nabozenstvo + nace_properties.manualna_praca * user_properties.praca + nace_properties.varenie * user_properties.varenie + nace_properties.sport * user_properties.sport + nace_properties.surodenci * user_properties.surodenci + nace_properties.cestovanie * user_properties.cestovanie + nace_properties.jazyky * user_properties.jazyky + nace_properties.rastliny * user_properties.rastliny + nace_properties.jedlo * user_properties.jedlo + nace_properties.politika * user_properties.politika) as rating FROM organizations 
        INNER JOIN ico_nace ON ico_nace.ico = organizations.ico
        INNER JOIN nace ON nace.nace = ico_nace.nace
        INNER JOIN nace_properties ON nace_properties.nace_id = nace.id 
        JOIN user_properties ON user_properties.user_id=(SELECT users.id FROM users WHERE users.username='${ id }')
        ORDER BY rating DESC
        LIMIT 100
    `)
  }
  
  
  return select.rows;
};

export const getOwnedOrganizations = async (username) => {
  const select = await pool.query(`SELECT organizations.* FROM organizations WHERE organizations.owner=(SELECT users.id FROM users WHERE users.username='${ username }')`);

  if(select) {
    return select.rows;
  }

  return undefined
};

export const getVisitedProperties = async (id) => {
  const select = await pool.query(`SELECT * FROM user_likes_properties WHERE user_id=${ id }`);

  if(select) {
    return select.rows;
  }

  return undefined
};

export const updateVisited = async (id, naceId) => {
  const select = await pool.query(`
    SELECT nace_properties.* FROM nace_properties WHERE nace_id=(SELECT id FROM naces WHERE naces.nace=${ nace });
  `);

  let properties = select.rows[0];

  const insert = await pool.query(`
    INSER INTO 
      user_likes_properties(user_id, zvierata, introvernost, vzdelavanie, ludia, hudba, umenie, investovanie, vozidlo, mesto, bydlisko, dobrovolnictvo, nabozenstvo, praca, varenie, sport, surodenci, cestovanie, jazyky, rastliny, jedlo, politika)
    VALUES(${ id }, ${ Math.min(properties.zvierata * 0.02, 20) }, ${ Math.min(properties.introvertnost * 0.02, 20) }, ${ Math.min(properties.vzdelavanie * 0.02, 20) }, ${ Math.min(properties.ludia * 0.02, 20) }, ${ Math.min(properties.hudba * 0.02, 20) }, ${ Math.min(properties.umenie * 0.02, 20) }, ${ Math.min(properties.investovanie * 0.02, 20) }, ${ Math.min(properties.vozidlo * 0.02, 20) }, ${ Math.min(properties.mesto * 0.02, 20) }, ${ Math.min(properties.dobrovolnictvo * 0.02, 20) }, ${ Math.min(properties.nabozenstvo * 0.02, 20) }, ${ Math.min(properties.manualna_praca * 0.02, 20) }, ${ Math.min(properties.varenie * 0.02, 20) }, ${ Math.min(properties.sport * 0.02, 20) }, ${ Math.min(properties.surodenci * 0.02, 20) }, ${ Math.min(properties.cestovanie * 0.02, 20) }, ${ Math.min(properties.jazyky * 0.02, 20) }, ${ Math.min(properties.rastliny * 0.02, 20) }, ${ Math.min(properties.jedlo * 0.02, 20) }, ${ Math.min(properties.politika * 0.02, 20) })
  `);
  
  console.log(insert)

  return true;
};

export const getSponsoredOrganizations = async () => {
  const select = await pool.query(`
    SELECT organizations.* FROM organizations WHERE organizations.id IN (SELECT organization_id FROM sponsored ORDER BY random() LIMIT 5);
  `);

  if(select.rows.length > 0) {
    return select.rows;
  }

  return null;
};

export const getSimilarByIco = async (ico) => {
  const select = await pool.query(`
    SELECT organizations.* 
      FROM organizations 
      WHERE organizations.ico IN 
      (SELECT ico 
        FROM ico_nace 
        WHERE nace=
          (SELECT ico_nace.nace 
            FROM ico_nace 
            WHERE ico_nace.ico='${ ico }'
          )
      )
    ORDER BY random()
    LIMIT 4
    ;
  `);

  if(select.rows.length > 0) {
    return select.rows;
  }

  return null;
};