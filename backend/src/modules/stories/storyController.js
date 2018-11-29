import db from '../database/model/';
const Op = db.Sequelize.Op;

export const newStoryController = async (req, res) => {

    const newStory = db.Story.build({
        Name: req.body.Name,
        Age: req.body.Age,
        Description: req.body.Description,
        Img: req.body.Img,
    })
        .save()
        .then(story => {
            return res.json("sucessfuly added new story");
        })
        .catch(error => {
            console.log(error);
            console.log(newStory);
            return res.json("problem occured during insert");
        })
};

export const deleteStoryController = async (req, res) => {

    db.Story.destroy({
        where: { IDStory: req.params.id }
    })
        .then(deletedStory => {
            console.log(`Story deleted? 1 means yes, 0 means no: ${deletedStory}`);
        });
};

export const storyController = async (req, res) => {
    const stories = await db.Story.findAll({
        attributes: ['IDStory', 'Name', 'Age', 'Description', 'Img'],
        raw: true,
    });
    return res.json({ stories });

};

