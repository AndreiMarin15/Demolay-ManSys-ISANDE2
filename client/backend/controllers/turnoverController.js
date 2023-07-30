const Application = require("../models/applications.js");
const Chapters = require("../models/chapters.js");
const Regions = require("../models/demolayRegions.js");
const db = require("../models/db.js");
const bcrypt = require("bcrypt");
const Accounts = require("../models/accounts.js");
const Member = require("../models/members.js");
const AwardApplication = require("../models/awardApplication.js");
const TermReport = require("../models/termReport.js");
const Form15 = require("../models/form15.js");
const TurnoverStatus = require("../models/turnoverStatus.js");
const fs = require("fs");

let session = {};

const controller = {
  getAllMembers: async (req, res) => {
    const chapterID = req.params.chapterID;

    db.findMany(
      Member,
      { chapterId: chapterID },
      { memberId: 1, givenName: 1, middleName: 1, lastName: 1 },
      (members) => {
        const formattedMembers = members.map((member) => {
          const middleInitial = member.middleName
            ? `${member.middleName.charAt(0)}.`
            : ""; // Include middle initial if available
          const name =
            `${member.givenName} ${middleInitial} ${member.lastName}`.trim(); // Concatenate givenName, middleInitial, and lastName

          return {
            memberId: member.memberId,
            name: name,
          };
        });

        res.send(formattedMembers);
      }
    );
  },

  newTF: async (req, res) => {
    const termReport = {
      chapterID: req.body.chapterID,
      year: req.body.year,
      term: req.body.term,
      startTerm: req.body.startTerm,
      endTerm: req.body.endTerm,

      totalMembers: req.body.totalMembers,
      initiated: req.body.initiated,
      affiliated: req.body.affiliated,
      totalGains: req.body.totalGains,
      majority: req.body.majority,
      transferred: req.body.transferred,
      deaths: req.body.deaths,
      resigned: req.body.resigned,
      expelled: req.body.expelled,
      totalLoss: req.body.totalLoss,
      totalNetMembers: req.body.totalNetMembers,
    };

    db.insertOne(TermReport, termReport, (result) => {
      if (result) {
        // Successfully created the new document
        res.send(result);
      } else {
        // Failed to create the new document
        res.json({ success: false, message: "Failed to create Term Report" });
      }
    });
  },

  updateTF: async (req, res) => {
    const form1ID = req.params.id;

    const termReport = {
      chapterID: req.body.userData.chapterID,
      year: req.body.formData.year,
      term: req.body.formData.term,
      startTerm: req.body.formData.startTerm,
      endTerm: req.body.formData.endTerm,

      totalMembers: req.body.formData.totalMembers,
      initiated: req.body.formData.initiated,
      affiliated: req.body.formData.affiliated,
      totalGains: req.body.formData.totalGains,
      majority: req.body.formData.majority,
      transferred: req.body.formData.transferred,
      deaths: req.body.formData.deaths,
      resigned: req.body.formData.resigned,
      expelled: req.body.formData.expelled,
      totalLoss: req.body.formData.totalLoss,
      totalNetMembers: req.body.formData.totalNetMembers,
    };

    db.findOne(TermReport, { _id: form1ID }, {}, () => {
      db.updateOne(TermReport, { _id: form1ID }, termReport, (result) => {
        if (result) {
          // Successfully updated the document
          res.send(result._id);
        } else {
          // Failed to update the document
          res.json({
            success: false,
            message: "Failed to update Term Report",
          });
        }
      });
    });
  },

  newTurnover: async (req, res) => {
    const turnoverStatus = {
      chapterID: req.body.chapterID,
      termID: req.body.termID,
      form1ID: "",
      form1Approved: false,
      form15ID: "",
      form15Approved: false,
      assetsID: "",
      assetsApproved: false,
      advisoryID: "",
      advisoryApproved: false,
      advisorApproval: false,
      eoCertification: false,
      isComplete: false,
    };

    db.insertOne(TurnoverStatus, turnoverStatus, (result) => {
      if (result) {
        // Successfully created the new document
        res.json({
          success: true,
          message: "Turnover created successfully",
        });
      } else {
        // Failed to create the new document
        res.json({ success: false, message: "Failed to create turnover" });
      }
    });
  },

  updateTurnover: async (req, res) => {
    const update = {
      [req.body.fieldToUpdate]: req.body.updateValue,
    };

    const filter = {
      chapterID: req.body.chapterID,
      termID: req.body.termID,
    };

    db.updateOne(TurnoverStatus, filter, update, (result) => {
      if (result) {
        // Successfully updated the document
        res.json({
          success: true,
          message: "Turnover updated successfully",
        });
      } else {
        // Failed to update the document
        res.json({ success: false, message: "Failed to update turnover" });
      }
    });
  },

  updateF15: async (req, res) => {
    const form15ID = req.params.id;

    const newOfficers = {
      chapterID: req.body.userData.chapterID,
      year: req.body.formData.year,
      term: req.body.formData.term,
      electDate: req.body.formData.electDate,
      installDate: req.body.formData.installDate,
      officers: req.body.formData.officers,
    };

    db.findOne(Form15, { _id: form15ID }, {}, (existingF15) => {
      if (existingF15) {
        db.updateOne(Form15, { _id: form15ID }, newOfficers, (result) => {
          if (result) {
            // Successfully updated the document
            res.json({
              success: true,
              message: "Term Report updated successfully",
            });
          } else {
            // Failed to update the document
            res.json({
              success: false,
              message: "Failed to update Term Report",
            });
          }
        });
      } else {
        db.insertOne(Form15, newOfficers, (result) => {
          if (result) {
            // Successfully created the new document
            res.json({
              success: true,
              message: "Turnover created successfully",
            });
          } else {
            // Failed to create the new document
            res.json({ success: false, message: "Failed to create turnover" });
          }
        });
      }
    });
  },

  getTurnoverReports: async (req, res) => {
    const chapterID = req.params.chapterID;
    const currentTerm = req.params.currentTerm;

    db.findOne(
      TurnoverStatus,
      { chapterID: chapterID, termID: currentTerm },
      {},
      (result) => {
        res.send(result);
      }
    );
  },

  getForm1: async (req, res) => {
    const form1ID = req.params.id;

    db.findOne(TermReport, { _id: form1ID }, {}, (result) => {
      res.send(result);
    });
  },

  getForm15: async (req, res) => {
    const form15ID = req.params.id;

    db.findOne(Form15, { _id: form15ID }, {}, (result) => {
      res.send(result);
    });
  },
};

module.exports = controller;
