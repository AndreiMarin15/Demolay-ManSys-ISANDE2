const Application = require("../models/applications.js");
const Chapters = require("../models/chapters.js");
const Regions = require("../models/demolayRegions.js");
const db = require("../models/db.js");
const bcrypt = require("bcrypt");
const Accounts = require("../models/accounts.js");
const Member = require("../models/members.js");
const Advisors = require("../models/advisors.js");
const AwardApplication = require("../models/awardApplication.js");
const TermReport = require("../models/termReport.js");
const TurnoverStatus = require("../models/turnoverStatus.js");
const fs = require("fs");

let session = {};

const controller = {
  newApplication: async (req, res) => {
    const application = {
      regionId: req.body.regionId,
      chapterId: req.body.chapterId,
    };

    await db.insertOne(Application, application, (result) => {
      console.log(result._id);
      res.send(result._id);
    });
  },

  newApplication2: async (req, res) => {
    const applicationId = req.params.id;
    console.log(applicationId);
    console.log(req.body);

    const update = {
      lastName: req.body.lastName,
      givenName: req.body.givenName,
      middleName: req.body.middleName,

      streetAddress: req.body.streetAddress,
      apt: req.body.apt,
      brgy: req.body.brgy,
      city: req.body.city,
      state: req.body.state,
      memberRegion: req.body.memberRegion,
      zipCode: req.body.zipCode,

      photo: req.body.photo,

      email: req.body.email,
      birthdate: req.body.birthdate,
      currentSchool: req.body.currentSchool,
      facebook: req.body.facebook,
      birthplace: req.body.birthplace,
      course: req.body.course,
      mobile: req.body.mobile,
      religion: req.body.religion,
      phone: req.body.phone,

      schoolAddress: req.body.schoolAddress,
      hobbies: req.body.hobbies,
      interests: req.body.interests,
      clubs: req.body.clubs,
    };

    console.log(update);

    await db.updateOne(
      Application,
      { _id: applicationId },
      update,
      (result) => {
        console.log(result);
        res.send(result._id);
      }
    );
  },

  newApplication3: async (req, res) => {
    // TODO - Implement this function to handle the third step of creating an Application in the system

    const applicationId = req.params.id;
    console.log(applicationId);
    console.log(req.body);
    const update = {
      appliedInAnotherChapter: req.body.appliedInAnotherChapter,
      chapterApplied: req.body.chapterApplied,
      yearApplied: req.body.yearApplied,
      status: req.body.status,

      relativeName: req.body.relativeName,
      relationship: req.body.relationship,
      lodge: req.body.lodge,

      reference1Name: req.body.reference1Name,
      reference1Age: req.body.reference1Age,
      reference1Email: req.body.reference1Email,
      reference1Mobile: req.body.reference1Mobile,

      reference2Name: req.body.reference2Name,
      reference2Age: req.body.reference2Age,
      reference2Email: req.body.reference2Email,
      reference2Mobile: req.body.reference2Mobile,

      parentName: req.body.parentName,
      parentRelationship: req.body.parentRelationship,
      parentEmail: req.body.parentEmail,
      parentMobile: req.body.parentMobile,
      parentApproved: req.body.parentApproved,
    };

    console.log(update);

    await db.updateOne(
      Application,
      { _id: applicationId },
      update,
      (result) => {
        res.send(result._id);
      }
    );
  },

  newApplication4: async (req, res) => {
    const applicationId = req.params.id;
    console.log(applicationId);
    console.log(req.body);

    const update = {
      lastName: req.body.lastName,
      givenName: req.body.givenName,
      middleName: req.body.middleName,

      streetAddress: req.body.streetAddress,
      apt: req.body.apt,
      brgy: req.body.brgy,
      city: req.body.city,
      state: req.body.state,
      memberRegion: req.body.memberRegion,
      zipCode: req.body.zipCode,

      email: req.body.email,
      birthdate: req.body.birthdate,
      currentSchool: req.body.currentSchool,
      facebook: req.body.facebook,
      birthplace: req.body.birthplace,
      course: req.body.course,
      mobile: req.body.mobile,
      religion: req.body.religion,
      phone: req.body.phone,

      schoolAddress: req.body.schoolAddress,
      hobbies: req.body.hobbies,
      interests: req.body.interests,
      clubs: req.body.clubs,

      appliedInAnotherChapter: req.body.appliedInAnotherChapter,
      chapterApplied: req.body.chapterApplied,
      yearApplied: req.body.yearApplied,
      status: req.body.status,

      relativeName: req.body.relativeName,
      relationship: req.body.relationship,
      lodge: req.body.lodge,

      reference1Name: req.body.reference1Name,
      reference1Age: req.body.reference1Age,
      reference1Email: req.body.reference1Email,
      reference1Mobile: req.body.reference1Mobile,

      reference2Name: req.body.reference2Name,
      reference2Age: req.body.reference2Age,
      reference2Email: req.body.reference2Email,
      reference2Mobile: req.body.reference2Mobile,

      parentName: req.body.parentName,
      parentRelationship: req.body.parentRelationship,
      parentEmail: req.body.parentEmail,
      parentMobile: req.body.parentMobile,
      parentApproved: req.body.parentApproved,
    };

    console.log(update);

    await db.updateOne(
      Application,
      { _id: applicationId },
      update,
      (result) => {
        console.log(result);
        res.send(result._id);
      }
    );
  },

  newApplication5: async (req, res) => {
    const applicationId = req.params.id;
    console.log("ID: " + applicationId);
    console.log(req.body);
    bcrypt.hash(req.body.applicantPassword, 10, (err, hash) => {
      console.log("Hashed: " + hash);
      console.log("Old Password: " + req.body.applicantPassword);
      const update = {
        applicantId: req.body.applicantId,
        applicantPassword: hash,
        status: req.body.status,
        dateCreated: req.body.dateCreated,
      };

      db.updateOne(Application, { _id: applicationId }, update, (result) => {
        console.log(result._id);
        res.send(result._id);
      });
    });
  },

  createMember: async (req, res) => {
    const data = req.body;

    bcrypt.hash(data.initialPassword, 10, (err, hash) => {
      const member = {
        memberId: data.idNumber,
        password: hash,
        givenName: data.givenName,
        lastName: data.lastName,
        middleName: data.middleName,
        chapterId: data.chapterId,
        email: data.email,
        demolayDegreeDate: data.demolayDegreeDate,
        initiatoryDegreeDate: data.initiatoryDegreeDate,
      };

      db.insertOne(Member, member, (result) => {
        res.send(result._id);
      });
    });
  },

  createAdvisor: async (req, res) => {
    const data = req.body;

    bcrypt.hash(data.initialPassword, 10, (err, hash) => {
      const advisor = {
        lastName: data.lastName,
        givenName: data.givenName,
        middleName: data.middleName,
        userId: data.userId,
        initialPassword: hash,
        email: data.email,
        assignedChapterId: data.assignedChapterId,
      };

      db.insertOne(Advisors, advisor, (result) => {
        res.send(result._id);
      });
    });
  },

  createAdmin: async (req, res) => {
    const data = req.body;

    bcrypt.hash(data.initialPassword, 10, (err, hash) => {
      const admin = {
        accountId: data.userId,
        password: hash,
        accountType: 0,

        lastName: data.lastName,
        givenName: data.givenName,
        middleName: data.middleName,

        email: data.email,
      };

      db.insertOne(Accounts, admin, (result) => {
        res.send(result._id);
      });
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

  saveAttendanceAwards: async (req, res) => {
    try {
      const userId = req.session.id;
      const attendanceAwards = req.body.attendanceAwards;

      // Check if there is an existing award application for the user
      db.findOne(
        AwardApplication,
        { applicantID: userId },
        { attendance: 1 },
        (existingApplication) => {
          if (existingApplication) {
            // If an existing application is found, update the attendance field
            const updateResult = db.updateOne(
              AwardApplication,
              {},
              { $set: { attendance: attendanceAwards } }
            );

            if (updateResult.nModified > 0) {
              res.json({ message: "Attendance awards saved successfully." });
            } else {
              console.log("No award application found.");
            }
          } else {
            // If no existing application is found, create a new document with the attendance data
            const newApplication = db.insertOne(AwardApplication, {
              attendance: [
                { attendanceData: attendanceAwards[0], isApproved: false },
                { attendanceData: attendanceAwards[1], isApproved: false },
                { attendanceData: attendanceAwards[2], isApproved: false },
                { attendanceData: attendanceAwards[3], isApproved: false },
                { attendanceData: attendanceAwards[4], isApproved: false },
              ],
            });

            console.log("New award application created:", newApplication);
            res.json({ message: "Attendance awards saved successfully." });
          }
        }
      );
    } catch (error) {
      console.log("Error saving Attendance awards:", error);
    }
  },

  getAttendanceAwards: async (req, res) => {
    const userId = req.session.id; // Assuming you have the user's ID stored in the session

    try {
      const doc = await db.findOne(
        AwardApplication,
        {},
        { attendance: 1 },
        (result) => result // Use a callback to return the result directly
      );

      if (doc) {
        res.send(doc.attendance);
      } else {
        console.log("No Attendance awards found.");
      }
    } catch (error) {
      console.error("Error fetching existing Attendance awards:", error);
    }
  },

  getApplication: async (req, res) => {
    const applicationId = req.params.id;
    let toPass = [{}, [], []];

    db.findOne(Application, { _id: applicationId }, {}, (result) => {
      toPass[0] = result;
      db.findMany(Regions, {}, { regionID: 1, regionName: 1 }, (regions) => {
        toPass[1] = regions;
        Chapters.find({}, { chapterID: 1, name: 1 })
          .sort({ name: 1 })
          .then((chapters) => {
            toPass[2] = chapters;

            res.send(toPass);
          });
      });
    });
  },

  checkAndInitDB: async (req, res) => {
    const path = require("path");
    try {
      const RegionCount = await Regions.countDocuments();
      const chapterCount = await Chapters.countDocuments();
      const adminCheck = await Accounts.findOne({ accountId: "admin" }); // db.findOne(Accounts, { accountId: "admin" }, {}, (cb) => {return cb});

      if (!adminCheck) {
        const pword = await bcrypt.hash("admin", 10);

        db.insertOne(
          Accounts,
          {
            accountId: "admin",
            password: pword,
            accountType: 0,
          },
          (admin) => {}
        );
      }

      if (RegionCount === 0) {
        // If empty, initialize DeMolay Regions data

        try {
          const dmlyRegionsData = fs.readFileSync(
            path.join(__dirname, "dmlyRegionsData.json"),
            "utf8"
          );
          const dmlyRegions = JSON.parse(dmlyRegionsData);

          // Insert the DeMolay Regions array into the database
          await Regions.insertMany(dmlyRegions);
          console.log("DeMolay Regions inserted successfully.");
        } catch (error) {
          console.error("Error inserting regions:", error);
        }
      }

      if (chapterCount === 0) {
        // If empty, initialize Chapters data

        try {
          const chapterData = fs.readFileSync(
            path.join(__dirname, "chaptersData.json"),
            "utf8"
          );
          const chapters = JSON.parse(chapterData);

          // Insert the chapters array into the database
          await Chapters.insertMany(chapters);
          console.log("Chapters inserted successfully.");
        } catch (error) {
          console.error("Error inserting chapters:", error);
        }
      }
    } catch (error) {
      console.error("Error checking or initializing data:", error);
    }
  },

  getRegions: async (req, res) => {
    db.findMany(
      Regions,
      {},
      {
        regionID: 1,
        regionName: 1,
        phIslandGrp: 1,
        phRegion: 1,
      },
      (result) => {
        res.send(result);
      }
    );
  },

  getChapters: async (req, res) => {
    const regionId = req.params.regionId;
    db.findMany(
      Chapters,
      { dmlyRegion: regionId },
      { chapterID: 1, name: 1, dmlyRegion: 1 },
      (result) => {
        res.send(result);
      }
    );
  },

  getChapterByID: async (req, res) => {
    const chapterID = req.params.chapter;
    db.findOne(Chapters, { chapterID: chapterID }, {}, (result) => {
      res.send(result);
    });
  },

  getAllChapters: async (req, res) => {
    Chapters.find({}, { chapterID: 1, name: 1 })
      .sort({ name: 1 })
      .then((result) => {
        console.log(result);
        res.send(result);
      });
  },

  generateApplicantID: async (req, res) => {
    db.findMany(
      Application,
      { applicantId: { $exists: true } },
      { applicantId: 1 },
      async (applications) => {
        if (applications.length > 1 && applications) {
          let highestId = applications[0].applicantId;
          await applications.forEach((application) => {
            if (parseInt(application.applicantId) > parseInt(highestId)) {
              highestId = application.applicantId;
            }
          });

          res.send(highestId);
          // eslint-disable-next-line eqeqeq
        } else if (applications.length == 1 && applications) {
          res.send(applications[0].applicantId);
        } else {
          const currentYear = new Date().getFullYear();

          res.send((currentYear.toString() + "0000").toString());
        }
      }
    );
  },

  getCurrentUser: async (req, res) => {
    res.send(session);
  },

  login: async (req, res) => {
    db.findOne(Accounts, { accountId: req.body.idNumber }, {}, (account) => {
      if (account) {
        if (bcrypt.compareSync(req.body.password, account.password)) {
          req.session.docId = account._id;
          req.session.currentUser = 0;
          req.session.userId = account.accountId;
          req.session.userType = "admin";
          session = req.session;
          res.send([0, account.accountId]);
        } else {
          res.send("WP");
        }
      } else {
        db.findOne(
          Application,
          { applicantId: req.body.idNumber },
          {},
          (applicant) => {
            // check if applicant exists, if not, check members, and so on

            if (applicant) {
              if (
                bcrypt.compareSync(
                  req.body.password,
                  applicant.applicantPassword
                )
              ) {
                req.session.docId = applicant._id;
                req.session.currentUser = 1;
                req.session.userId = applicant.applicantId;
                req.session.userType = "Scribe"; // CHANGE to applicant.userType, only for testing route protection nakaset to Scribe
                session = req.session;
                res.send([1, applicant._id]);
              } else {
                res.send("WP");
              }
            } else {
              // check members
              res.send([false, "no hello"]);
            }
          }
        );
      }
    });
  },

  logout: function (req, res) {
    req.session.destroy((err) => {
      if (err) throw err;
      res.send("/login");
    });
  },

  getAppStatus1: async (req, res) => {
    const applicationId = req.params.id;
    console.log(applicationId);
    db.findOne(
      Application,
      { _id: applicationId },
      { applicantId: 1, chapterId: 1, dateCreated: 1, status: 1 },
      (application) => {
        db.findOne(
          Chapters,
          { chapterID: application.chapterId },
          { name: 1 },
          (chapter) => {
            const toSend = {
              applicantId: application.applicantId,
              chapter: chapter.name,
              dateCreated: application.dateCreated,
              status: application.status,
            };
            console.log(toSend);
            res.send(toSend);
          }
        );
      }
    );
  },
};

module.exports = controller;
