module.exports = {
  up: (queryInterface, Sequelize) => {
    const anamnesisPromise = queryInterface.bulkInsert(
      'Anamnesis',
      [
        {
          Name: 'Alergická anamnéza',
          Description:
            'Alergická anamnéza obsahuje informace o alergiích pacienta na léky, potraviny i na ostatní alergeny, dále alergie na transfuzní přípravky.',
        },
        {
          Name: 'Farmakologická anamnéza (FA)',
          Description:
            'Farmakologická anamnéza obsahuje informace o tom, jaké látky pacient užívá.',
        },
      ],
      {},
    );

    return Promise.all([anamnesisPromise]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.bulkDelete('Anamnesis', null, {})]);
  },
};
