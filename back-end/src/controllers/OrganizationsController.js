import express from "express";

// Service
import { createOrganization, getAllOrganizations, getOrganization, topOrganization, getNaces, getNaceByIco, getRecommendedOrganizations, getOwnedOrganizations } from "../services/OrganizationsService.js";

export const OrganizationsController = express.Router();

OrganizationsController.post("/add", async (req, res) => {
  try {
    const errors = await createOrganization(req.body);

    if(errors === undefined) {
      return res.send("Organization registered successfully");
    }else {
      console.log("error")
      return res.json(errors);
    }
  } catch(e) {
    console.log(e);
    return;
  }
});

OrganizationsController.get("/getAll", async (req, res) => {
  try {
    const organizations = await getAllOrganizations();

    if(organizations) {
      return res.json(organizations);
    }else {
      console.log("Error while fetching organizations")
      return;
    }
  } catch(e) {
    console.log(e);
    return;
  }
});

OrganizationsController.get("/owned/:username", async (req, res) => {
  try {
    if(req.params.username) {
      const organizations = await getOwnedOrganizations(req.params.username);
   
      if(organizations) {
        return res.json(organizations);
      }else {
        console.log("Error while fetching organizations")
        return;
      } 
   } else {
     res.status(400);
   }
  } catch(e) {
    console.log(e);
    return;
  }
});


OrganizationsController.get("/naces", async (req, res) => {
  try {
    const naces = await getNaces();

    if(naces) {
      return res.json(naces);
    }else {
      console.log("Error while fetching naces")
      return;
    }
  } catch(e) {
    console.log(e);
    return;
  }
});

OrganizationsController.get("/:ico/nace", async (req, res) => {
  try {
    const nace = await getNaceByIco(req.params.ico);
    
    console.log(nace)
    if(nace) {
      
      return res.json(nace);
    }else {
      console.log("Error while fetching nace")
      return;
    }
  } catch(e) {
    console.log(e);
    return;
  }
});

OrganizationsController.get("/:id", async (req, res) => {
    try {
    const organization = await getOrganization(req.params.id);

    if(organization) {
      return res.json(organization);
    }else {
      console.log("Organization not found")
      return;
    }
  } catch(e) {
    console.log(e);
    return;
  }
});



OrganizationsController.post("/top", async (req, res) => {
    try {
    const organization = await topOrganization(req.body.organizationId);

    if(organization) {
      return res.json({url: organization});
    }else {
      return res.status(403).send("Organization not found or already topped.");
    }
  } catch(e) {
    console.log(e);
    return;
  }
});

OrganizationsController.get("/:userId/recommended", async (req, res) => {
  try {
    const organizations = await getRecommendedOrganizations(req.params.userId);

    if(organizations) {
      return res.json(organizations);
    }else {
      console.log("Organization not found")
      return;
    }
  } catch(e) {
    console.log(e);
    return;
  }
});


/*OrganizationsController.get("/own", async (req, res) => {
  console.log(req.body)
  try {
    if(req.body.username) {
      const organizations = await getOwnedOrganizations(req.body.username);

      if(organizations) {
        return res.status(200).json(organizations);
      }else {
        return res.status(500);
      }
    }else {
      return res.status(400);
    }
  }catch(e) {
    console.log(e);
    return;
  }
});*/
