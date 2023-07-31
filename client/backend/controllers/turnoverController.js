const Application = require("../models/applications.js");
const Chapters = require("../models/chapters.js");
const Regions = require("../models/demolayRegions.js");
const db = require("../models/db.js");
const bcrypt = require("bcrypt");
const Accounts = require("../models/accounts.js");
const Member = require("../models/members.js");
const AwardApplication = require("../models/awardApplication.js");
const TermReport = require("../models/termReport.js");
const TurnoverStatus = require("../models/turnoverStatus.js");
const fs = require("fs");

let session = {};

const controller = {
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

    db.findOne(TermReport, { _id: form1ID }, {}, (existingTF) => {
      if (existingTF) {
        db.updateOne(TermReport, { _id: form1ID }, termReport, (result) => {
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
        db.insertOne(TermReport, termReport, (result) => {
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

  updateTurnover: async (req, res) => {
    const update = { [req.body.fieldToUpdate]: req.body.updateValue };
    const turnoverStatus = {
      chapterID: req.body.chapterID,
      termID: req.body.termID,
      ...update,
    };
    const filter = {
      chapterID: turnoverStatus.chapterID,
      termID: turnoverStatus.termID,
    };

    db.findOne(TurnoverStatus, filter, {}, (existingTurnover) => {
      if (existingTurnover) {
        // Update the existing TurnoverStatus document
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
      } else {
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
};

module.exports = controller;
