module.exports = {
  up: (queryInterface, Sequelize) => {
    const diagnosisPromise = queryInterface.bulkInsert(
      'Diagnosis',
      [
        {
          Name: 'Arteriální hypertenze',
          Description:
            'Arteriální systémová hypertenze je stav zvýšení krevního tlaku nad 140/90 při opakovaném měření.',
        },
        {
          Name: 'Aplastická anémie',
          Description:
            'Aplastická anémie (dřeňový útlum) je stav vzniklý v důsledku poškození kmenové krvetvorné buňky, jež vede k jejímu zániku.',
        },
      ],
      {},
    );

    return Promise.all([diagnosisPromise]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.bulkDelete('Diagnosis', null, {})]);
  },
};
