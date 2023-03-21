const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Novel = require("../models/Novel");
const Messages = require("../../messages/messages");

// getting all entries
router.get("/", (req, res, next) => {
  Novel.find()
    .select("-__v")
    .exec()
    .then((result) => {
      res.status(200).json({
        message: Messages.webNovel_entry_all,
        count: result.length,
        webNovel: result,
        metadata: {
          method: req.method,
          host: req.hostname,
        },
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: {
          message: err.message,
        },
      });
    });
});

router.post("/", (req, res, next) => {
  const newNovel = new Novel({
    _id: mongoose.Types.ObjectId(),
    title: req.body.title,
    author: req.body.author,
    volumes: req.body.volumes,
  });

  //write to the database
  newNovel
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: Messages.webNovel_entry_saved,
        webNovel: {
          title: result.title,
          author: result.author,
          volumes: req.body.volumes,
          id: result._id,
        },
        metadata: {
          method: req.method,
          host: req.hostname,
        },
      });
    })
    .catch((err) => {
      if (err.code === 11000) {
        res.status(500).json({
          error: {
            message: Messages.webNovel_entry_exists,
          },
        });
      } else {
        res.status(500).json({
          error: {
            message: err.message,
          },
        });
      }
    });
});

//finding the webnovel by id
router.get("/:novelId", (req, res, next) => {
  const novelId = req.params.novelId;
  Novel.findById(novelId)
    .select("-__v")
    .exec()
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: Messages.webNovel_entry_GETbyID,
          webNovel: result,
          metadata: {
            method: req.method,
            host: req.hostname,
          },
        });
      } else {
        res.status(404).json({
          message: Messages.webNovel_entry_novalid,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: {
          message: err.message,
        },
      });
    });
});


// updating the entry
router.patch("/:novelId", (req, res, next) => {
  const novelId = req.params.novelId;

  const updateNovel = {
    title: req.body.title,
    author: req.body.author,
    volumes: req.body.volumes,
  };

  Novel.updateOne(
    {
      _id: novelId,
    },
    {
      $set: updateNovel,
    }
  )
    .then(() => {
      return Novel.findOne({ _id: novelId }).select('-__v');
    })
    .then((result) => {
      res.status(200).json({
        message: Messages.novel_entry_updated,
        novel: {
          title: result.title,
          author: result.author,
          id: result._id,
          volumes: req.body.volumes,
        },
        metadata: {
          method: req.method,
          host: req.hostname,
        },
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: {
          message: err.message,
        },
      });
    });
});

//deleting from the database by id
router.delete("/:novelId", (req, res, next) => {
  const novelId = req.params.novelId;
  Novel.findByIdAndDelete(novelId)
    .select("-__v")
    .exec()
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: Messages.novel_entry_deleted,
          novel: result,
          metadata: {
            method: req.method,
            host: req.hostname,
          },
        });
      } else {
        res.status(404).json({
          message: Messages.novel_entry_novalid,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: {
          message: err.message,
        },
      });
    });
});

module.exports = router;
