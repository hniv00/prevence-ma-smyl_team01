import db from '../database/model/';

export const newEventController = async (req, res) => {
  const newEvent = db.Event.build({
    Name: req.body.Name,
    Description: req.body.Description,
    Date: req.body.Date,
    Time: req.body.Time,
    Street: req.body.Street,
    StreetNum: req.body.StreetNum,
    City: req.body.City,
    PostalCode: req.body.PostalCode,
    EntryFee: req.body.EntryFee,
    URL: req.body.URL,
    Photo: req.body.Photo,
  })
    .save()
    .then(event => {
      return res.json('sucessfuly added new event');
    })
    .catch(error => {
      return res.json('problem occured during insert');
    });
};

export const deleteEventController = async (req, res) => {
  db.Event.destroy({
    where: { IDEvent: req.params.id },
  }).then(deletedEvent => {
    res.json({
      response:
        deletedEvent == 1
          ? `Event with ID ${req.params.id} was deleted`
          : `Event with ID ${req.params.id} was not deleted`,
    });
  });
};

export const eventController = async (req, res) => {
  const eventList = await db.Event.findAll({
    attributes: [
      'IDEvent',
      'Name',
      'Description',
      'Date',
      'Time',
      'Street',
      'StreetNum',
      'City',
      'PostalCode',
      'EntryFee',
      'URL',
      'Photo',
    ],
    raw: true,
  });
  return res.json({ eventList });
};

export const updateEventController = async (req, res) => {
  db.Event.update(
    {
      Name: req.body.Name,
      Description: req.body.Description,
      Date: req.body.Date,
      Time: req.body.Time,
      Street: req.body.Street,
      StreetNum: req.body.StreetNum,
      City: req.body.City,
      PostalCode: req.body.PostalCode,
      EntryFee: req.body.EntryFee,
      URL: req.body.URL,
      Photo: req.body.Photo,
    },
    {
      where: { IDEvent: req.params.id },
    },
  )
    .then(result => {
      return res.json('Event updated');
    })
    .catch(err => {
      return res.json('An error occured while changing the event');
    });
};
