import db from '../database/model/';

export const newStoryController = async (req, res) => {
  const newStory = db.Story.build({
    Name: req.body.Name,
    Age: req.body.Age,
    Description: req.body.Description,
    Img: req.body.Img,
  })
    .save()
    .then(story => {
      return res.json('sucessfuly added new story');
    })
    .catch(error => {
      return res.json('problem occured during insert');
    });
};

export const deleteStoryController = async (req, res) => {
  db.Story.destroy({
    where: { IDStory: req.params.id },
  }).then(deletedStory => {
    res.json({
      response:
        deletedStory == 1
          ? `Story with ID ${req.params.id} was deleted`
          : `Story with ID ${req.params.id} was not deleted`,
    });
  });
};

export const storyController = async (req, res) => {
  const stories = await db.Story.findAll({
    attributes: ['IDStory', 'Name', 'Age', 'Description', 'Img'],
    raw: true,
  });
  return res.json({ stories });
};

export const updateStoryController = async (req, res) => {
  db.Story.update(
    {
      Name: req.body.Name,
      Age: req.body.Age,
      Description: req.body.Description,
      Img: req.body.Img,
    },
    {
      where: { IDStory: req.params.id },
    },
  )
    .then(result => {
      return res.json('Story updated');
    })
    .catch(err => {
      return res.json('An error occured while changing the story');
    });
};
