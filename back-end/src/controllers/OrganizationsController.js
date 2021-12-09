import express from "express";

// Service
import { createOrganization, getAllOrganizations, getOrganization } from "../services/OrganizationsService.js";

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
