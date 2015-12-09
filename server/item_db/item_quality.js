if (ItemQuality.find() === 0) {
  ItemQuality.insert({
    quality:
    [
      {
        name: 'Junk',
        headerColor: '#949494',
        enumValue: 1,
      }, {
        name: 'Common',
        headerColor: '#ffffff',
        enumValue: 2,
      }, {
        name: 'Heirloom',
        headerColor: '#1aff1a',
        enumValue: 3,
      }, {
        name: 'Magic',
        headerColor: '#0066ff',
        enumValue: 4,
      }, {
        name: 'Rare',
        headerColor: '#934dff',
        enumValue: 5,
      }, {
        name: 'Unique',
        headerColor: '#ff9900',
        enumValue: 6,
      }, {
        name: 'Legendary',
        headerColor: '#ff3333',
        enumValue: 7,
      },

    ]
  });
}
