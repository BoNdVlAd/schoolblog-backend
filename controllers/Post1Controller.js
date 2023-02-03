import Post1Model from '../models/Post1.js';

export const getLastTags = async (req, res) => {
  try {
    const posts = await Post1Model.find().limit(5).exec();

    const tags = posts
      .map((obj) => obj.tags)
      .flat()
      .slice(0, 5);
    res.json(tags);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'не удалось получить статью',
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const posts1 = await Post1Model.find().populate('user').exec();

    res.json(posts1);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'не удалось получить статью',
    });
  }
};
export const getOne = async (req, res) => {
  try {
    const postId = req.params.id;

    Post1Model.findOneAndUpdate(
      {
        _id: postId,
      },
      {
        $inc: { viewsCount: 1 },
      },
      {
        returnDoucment: 'after',
      },

      (err, doc) => {
        if (err) {
          console.log(error);
          return res.status(500).json({
            message: 'не удалось вернуть статью',
          });
        }
        if (!doc) {
          return res.status(404).json({
            message: 'Статья не найдена ++++',
          });
        }
        res.json(doc);
      },
    ).populate('user');
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'не удалось получить статью',
    });
  }
};

export const remove = async (req, res) => {
  try {
    const postId = req.params.id;

    Post1Model.findByIdAndDelete(
      {
        _id: postId,
      },
      (err, doc) => {
        if (err) {
          console.log(error);
          res.status(500).json({
            message: 'Не удалось удалить  статью',
          });
        }
        if (!doc) {
          return res.status(404).json({
            message: 'Статья не найдена----------',
          });
        }
        res.json({
          success: true,
        });
      },
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'не удалось получить статью',
    });
  }
};

export const create = async (req, res) => {
  try {
    const doc = new Post1Model({
      title: req.body.title,
      text: req.body.text,
      imageUrl: req.body.imageUrl,
      imageUrlAll: req.body.imageUrlAll,
      tags: req.body.tags,
      user: req.userId,
    });
    const post = await doc.save();

    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'не удалось создать статью',
    });
  }
};

export const update = async (req, res) => {
  try {
    const postId = req.params.id;

    await Post1Model.updateOne(
      {
        _id: postId,
      },
      {
        title: req.body.title,
        text: req.body.text,
        imageUrl: req.body.imageUrl,
        imageUrlAll: req.body.imageUrlAll,
        tags: req.body.tags,
        user: req.userId,
      },
    );
    res.json({
      succes: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'не удалось обновить статью',
    });
  }
};
