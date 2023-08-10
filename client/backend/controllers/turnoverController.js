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
const AssetReport = require("../models/assetsReport.js");
const AdvisoryReport = require("../models/advisorReport.js");
const TurnoverStatus = require("../models/turnoverStatus.js");
const Event = require("../models/events.js");
const fs = require("fs");
const AdvisoryCouncils = require("../models/advisoryCouncils.js");
const Requests = require("../models/requests.js");

let session = {};

const controller = {
  getAllMembers: async (req, res) => {
    const chapterID = req.params.id;

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

      reportedBy: req.body.reportedBy,
      position: req.body.position,

      bankID: req.body.bankID,
      cashInBank: req.body.cashInBank,
      accountsReceivable: req.body.accountsReceivable,
      accountsPayable: req.body.accountsPayable,

      masterCouncilor: req.body.masterCouncilor,
      statusMasterCouncilor: req.body.statusMasterCouncilor,
      dateSignedMasterCouncilor: req.body.dateSignedMasterCouncilor,

      chapterScribe: req.body.chapterScribe,
      statusChapterScribe: req.body.statusChapterScribe,
      dateSignedChapterScribe: req.body.dateSignedChapterScribe,

      chapterAdvisor: req.body.chapterAdvisor,
      statusChapterAdvisor: req.body.statusChapterAdvisor,
      dateSignedChapterAdvisor: req.body.dateSignedChapterAdvisor,

      advisoryCouncilChairman: req.body.advisoryCouncilChairman,
      statusAdvisoryCouncilChairman: req.body.statusAdvisoryCouncilChairman,
      dateSignedAdvisoryCouncilChairman:
        req.body.dateSignedAdvisoryCouncilChairman,
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

    const updateApproval = req.body.updateApproval;

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
      ...updateApproval,
    };

    db.findOne(TermReport, { _id: form1ID }, {}, () => {
      db.updateOne(TermReport, { _id: form1ID }, termReport, (result) => {
        if (result) {
          // Successfully updated the document
          res.send(result);
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

  newF15: async (req, res) => {
    const newOfficers = {
      chapterID: req.body.chapterID,
      year: req.body.year,
      term: req.body.term,
      electDate: req.body.electDate,
      installDate: req.body.installDate,
      officers: req.body.officers,

      advisoryCouncilChairman: req.body.advisoryCouncilChairman,
      statusAdvisoryCouncilChairman: req.body.statusAdvisoryCouncilChairman,
      dateSignedAdvisoryCouncilChairman:
        req.body.dateSignedAdvisoryCouncilChairman,

      chapterAdvisor: req.body.chapterAdvisor,
      statusChapterAdvisor: req.body.statusChapterAdvisor,
      dateSignedChapterAdvisor: req.body.dateSignedChapterAdvisor,
    };

    db.insertOne(Form15, newOfficers, (result) => {
      if (result) {
        // Successfully created the new document
        res.send(result);
      } else {
        // Failed to create the new document
        res.json({ success: false, message: "Failed to create turnover" });
      }
    });
  },

  updateF15: async (req, res) => {
    const form15ID = req.params.id;

    const updateApproval = req.body.updateApproval;

    const newOfficers = {
      chapterID: req.body.userData.chapterID,
      year: req.body.formData.year,
      term: req.body.formData.term,
      electDate: req.body.formData.electDate,
      installDate: req.body.formData.installDate,
      officers: req.body.formData.officers,
      ...updateApproval,
    };

    db.findOne(Form15, { _id: form15ID }, {}, () => {
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
    });
  },

  newAR: async (req, res) => {
    const newAssetReport = {
      chapterID: req.body.chapterID,
      year: req.body.year,
      term: req.body.term,
      senBook: req.body.senBook,
      crown: req.body.crown,
      blackRobes: req.body.blackRobes,
      whiteRobes: req.body.whiteRobes,
      altarCloth: req.body.altarCloth,
      bible: req.body.bible,
      candleStands: req.body.candleStands,
      candleLights: req.body.candleLights,
      banner: req.body.banner,
      charterLT: req.body.charterLT,
      ballotBox: req.body.ballotBox,
      scribeNotebook: req.body.scribeNotebook,
      treasNotebook: req.body.treasNotebook,

      advisoryCouncilChairman: req.body.advisoryCouncilChairman,
      statusAdvisoryCouncilChairman: req.body.statusAdvisoryCouncilChairman,
      dateSignedAdvisoryCouncilChairman:
        req.body.dateSignedAdvisoryCouncilChairman,

      chapterAdvisor: req.body.chapterAdvisor,
      statusChapterAdvisor: req.body.statusChapterAdvisor,
      dateSignedChapterAdvisor: req.body.dateSignedChapterAdvisor,
    };

    db.insertOne(AssetReport, newAssetReport, (result) => {
      if (result) {
        // Successfully created the new document
        res.send(result);
      } else {
        // Failed to create the new document
        res.json({ success: false, message: "Failed to create turnover" });
      }
    });
  },

  updateAR: async (req, res) => {
    const arID = req.params.id;

    const updateApproval = req.body.updateApproval;

    const update = {
      chapterID: req.body.userData.chapterID,
      year: req.body.formData.year,
      term: req.body.formData.term,
      senBook: req.body.formData.senBook,
      crown: req.body.formData.crown,
      blackRobes: req.body.formData.blackRobes,
      whiteRobes: req.body.formData.whiteRobes,
      altarCloth: req.body.formData.altarCloth,
      bible: req.body.formData.bible,
      candleStands: req.body.formData.candleStands,
      candleLights: req.body.formData.candleLights,
      banner: req.body.formData.banner,
      charterLT: req.body.formData.charterLT,
      ballotBox: req.body.formData.ballotBox,
      scribeNotebook: req.body.formData.scribeNotebook,
      treasNotebook: req.body.formData.treasNotebook,
      ...updateApproval,
    };

    db.findOne(AssetReport, { _id: arID }, {}, () => {
      db.updateOne(AssetReport, { _id: arID }, update, (result) => {
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
    });
  },

  newAdvisory: async (req, res) => {
    const newReport = {
      chapterID: req.body.chapterID,
      year: req.body.year,
      term: req.body.term,

      chairID: req.body.chairID,
      chairEmail: req.body.chairEmail,
      chairAddress: req.body.chairAddress,
      chairPhone: req.body.chairPhone,
      chairIsReAppt: req.body.chairIsReAppt,
      chairYears: req.body.chairYears,

      caID: req.body.caID,
      caEmail: req.body.caEmail,
      caAddress: req.body.caAddress,
      caPhone: req.body.caPhone,
      caIsReAppt: req.body.caIsReAppt,
      caYears: req.body.caYears,
    };

    db.insertOne(AdvisoryReport, newReport, (result) => {
      if (result) {
        // Successfully created the new document
        res.send(result);
      } else {
        // Failed to create the new document
        res.json({ success: false, message: "Failed to create turnover" });
      }
    });
  },

  updateAdvisory: async (req, res) => {
    const advisoryID = req.params.id;

    const update = {
      chapterID: req.body.chapterID,
      year: req.body.year,
      term: req.body.term,

      chairID: req.body.chairID,
      chairEmail: req.body.chairEmail,
      chairAddress: req.body.chairAddress,
      chairPhone: req.body.chairPhone,
      chairIsReAppt: req.body.chairIsReAppt,
      chairYears: req.body.chairYears,

      caID: req.body.caID,
      caEmail: req.body.caEmail,
      caAddress: req.body.caAddress,
      caPhone: req.body.caPhone,
      caIsReAppt: req.body.caIsReAppt,
      caYears: req.body.caYears,
    };

    db.findOne(AdvisoryReport, { _id: advisoryID }, {}, () => {
      db.updateOne(AdvisoryReport, { _id: advisoryID }, update, (result) => {
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
    });
  },

  newEvents: async (req, res) => {
    const newEvent = {
      chapterID: req.body.chapterID,
    };

    db.insertOne(Event, newEvent, (result) => {
      if (result) {
        // Successfully created the new document
        res.send(result);
      } else {
        // Failed to create the new document
        res.json({
          success: false,
          message: "Failed to create events document",
        });
      }
    });
  },

  updateEvents: async (req, res) => {
    const id = req.params.id;

    const update = {
      [req.body.fieldToUpdate]: req.body.updateValue,
    };

    db.findOne(Event, { _id: id }, {}, () => {
      db.updateOne(Event, { _id: id }, update, (result) => {
        if (result) {
          // Successfully updated the document
          res.json({
            success: true,
            message: "Events document updated successfully",
          });
        } else {
          // Failed to update the document
          res.json({
            success: false,
            message: "Failed to update Events document",
          });
        }
      });
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

  getAR: async (req, res) => {
    const arID = req.params.id;

    db.findOne(AssetReport, { _id: arID }, {}, (result) => {
      res.send(result);
    });
  },

  getAdvisory: async (req, res) => {
    const advisoryID = req.params.id;

    db.findOne(AdvisoryReport, { _id: advisoryID }, {}, (result) => {
      res.send(result);
    });
  },

  getAllChapters: async (req, res) => {
    db.findMany(Chapters, {}, {}, (result) => {
      res.send(result);
    });
  },

  getEvents: async (req, res) => {
    const chapterID = req.params.id;

    db.findOne(Event, { chapterID: chapterID }, {}, (result) => {
      res.send(result);
    });
  },

  newApplication: async (req, res) => {
    const newApplication = {
      applicantID: req.body.applicantID,
      name: req.body.name,
      chapterID: req.body.chapterID,
      type: req.body.type,
      color: req.body.color,

      attendance: req.body.attendance,
      athletics: req.body.athletics,
      civicService: req.body.civicService,
      conclave: req.body.conclave,
      fineArts: req.body.fineArts,
      fundraising: req.body.fundraising,
      installing: req.body.installing,

      isSubmitted: false,
      isApproved: false,
      isRequested: false,
    };

    db.insertOne(AwardApplication, newApplication, (result) => {
      if (result) {
        // Successfully created the new document
        res.send(result);
      } else {
        // Failed to create the new document
        res.json({
          success: false,
          message: "Failed to create events document",
        });
      }
    });
  },

  updateApplication: async (req, res) => {
    const id = req.params.id;

    const update = {
      [req.body.fieldToUpdate]: req.body.updateValue,
    };

    db.findOne(AwardApplication, { _id: id }, {}, () => {
      db.updateOne(AwardApplication, { _id: id }, update, (result) => {
        if (result) {
          // Successfully updated the document
          res.json({
            success: true,
            message: "Events document updated successfully",
          });
        } else {
          // Failed to update the document
          res.json({
            success: false,
            message: "Failed to update Events document",
          });
        }
      });
    });
  },

  getCurrentApplications: async (req, res) => {
    const memberID = req.params.id;

    db.findMany(AwardApplication, { applicantID: memberID }, {}, (result) => {
      res.send(result);
    });
  },

  getAllApplications: async (req, res) => {
    db.findMany(AwardApplication, {}, {}, (result) => {
      res.send(result);
    });
  },

  newRequest: async (req, res) => {
    const newRequest = {
      userID: req.body.userData.userID,
      name: req.body.userData.name,
      chapterID: req.body.userData.chapterID,

      meritBars: req.body.formData,

      total: req.body.total,
      proof: req.body.photoData,

      isApproved: false,
    };

    db.insertOne(Requests, newRequest, (result) => {
      if (result) {
        // Successfully created the new document
        res.send(result);
      } else {
        // Failed to create the new document
        res.json({
          success: false,
          message: "Failed to create events document",
        });
      }
    });
  },

  updateRequest: async (req, res) => {
    const id = req.params.id;

    const update = {
      [req.body.fieldToUpdate]: req.body.updateValue,
    };

    db.findOne(Requests, { _id: id }, {}, () => {
      db.updateOne(Requests, { _id: id }, update, (result) => {
        if (result) {
          // Successfully updated the document
          res.json({
            success: true,
            message: "Events document updated successfully",
          });
        } else {
          // Failed to update the document
          res.json({
            success: false,
            message: "Failed to update Events document",
          });
        }
      });
    });
  },

  getRequests: async (req, res) => {
    const chapter = req.params.chapter;

    db.findOne(Requests, { chapterID: chapter }, {}, (result) => {
      res.send(result);
    });
  },
};

module.exports = controller;
