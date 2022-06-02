import express from "express";

// Service
import { getSimilarByIco, getSponsoredOrganizations, updateVisited, getVisitedProperties, createOrganization, getAllOrganizations, getOrganization, topOrganization, getNaces, getNaceByIco, getRecommendedOrganizations, getOwnedOrganizations } from "../services/OrganizationsService.js";

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

OrganizationsController.get("/sponsored", async (req, res) => {
  try {
    const sponsored = await getSponsoredOrganizations();

    if(sponsored) {
      return res.json(sponsored);
    }else {
      console.log("Error while fetching naces")
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

OrganizationsController.get("/:ico/nace/similar", async (req, res) => {
  console.log
  try {
    const similar = await getSimilarByIco(req.params.ico);
    
    if(similar) {
      return res.json(similar);
    }else {
      console.log("Error while fetching organizations")
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


OrganizationsController.get("/:username/recommended/username", async (req, res) => {
  try {
    const organizations = await getRecommendedOrganizations(req.params.username, 1);

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

OrganizationsController.get("/:userId/visitedproperties", async (req, res) => {
  try {
    const properties = await getVisitedProperties(req.params.userId);

    if(properties) {
      return res.json(properties);
    }else {
      console.log("Properties not found")
      return;
    }
  } catch(e) {
    console.log(e);
    return;
  }
});

OrganizationsController.post("/:userId/:naceId", async (req, res) => {
  try {
    const visited = await updateVisited(req.params.userId, req.params.naceId);

    if(visited) {
      return res.json("Updated successfuly");
    }else {
      return res.status(403).send("Organization not found or already topped.");
    }
  } catch(e) {
    console.log(e);
    return;
  }
});
