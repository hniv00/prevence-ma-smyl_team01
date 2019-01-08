const innerStore = {
  examinationResult: [
    {
      id: 1,
      title: 'Preventivní prohlídka',
      description: `Docházejte pravidelně na preventivní prohlídky,
      které praktický lékař provádí v intervalu 2 let.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
      badges: ['Obezita', 'Krátkozrakost'],
      periodicity: '1 á 2 roky',
    },
    {
      id: 2,
      title: 'Zubní prohlídka',
      description: `Docházejte pravidelně na preventivní prohlídky k zubaři,
    ideálně jednou za půl roku.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
      badges: ['Zubní kaz', 'Paradontoza'],
      periodicity: '1 á 6 měsíců',
    },
    {
      id: 3,
      title: 'Oční prohlídka',
      description: `Docházejte pravidelně na preventivní oční prohlídky,
      které oční lékař provádí v intervalu jednoho roku.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
      badges: ['Obezita', 'Krátkozrakost'],
      periodicity: '1 á 1 rok',
    },
    {
      id: 4,
      title: 'Preventivní prohlídka 2',
      description: `Docházejte pravidelně na preventivní prohlídky,
      které praktický lékař provádí v intervalu 2 let.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
      badges: ['Obezita', 'Krátkozrakost'],
      periodicity: '1 á 2 roky',
    },
  ],
  anamnesisOptions: [
    { value: 'infarkt', label: 'infarkt' },
    { value: 'cévní mozková příhoda', label: 'cévní mozková příhoda' },
    { value: 'karcinom tlustého střeva', label: 'karcinom tlustého střeva' },
    { value: 'karcinom prsu', label: 'karcinom prsu' },
  ],
  diseaseOptions: [
    { value: 'rakovina', label: 'rakovina' },
    { value: 'vysoký krevní tlak', label: 'vysoký krevní tlak' },
    { value: 'cukrovka', label: 'cukrovka' },
    { value: 'poruchy štítné žlázy', label: 'poruchy štítné žlázy' },
    { value: 'vyšší choresterol', label: 'vyšší choresterol' },
  ],
};

export const dumbStore = innerStore;
