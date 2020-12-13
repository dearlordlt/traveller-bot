const starts = [
    'Adel',
    'Adri',
    'Ala',
    'Aemil',
    'Alb',
    'Ambr',
    'Ans',
    'Anto',
    'Barn',
    'Bria',
    'Claud',
    'Diony',
    'Eug',
    'Gal',
    'Hadri',
    'Hilar',
    'Igna',
    'Jord',
    'Luc',
    'Marc',
    'Max',
    'Mel',
    'Nico',
    'Oli',
    'Patri',
    'Phili',
    'Sebasti',
    'Steph',
    'Theo',
    'Tobi',
    'Victor',
];

const endings = [
    'marus',
    'ius',
    'anus',
    'ertus',
    'xius',
    'idus',
    'icius',
    'eas',
    'nius',
    'ata',
    'ardus',
    'abas',
    'sius',
    'llus',
];

const getName = () => {
    return `${starts[Math.floor(Math.random() * starts.length)]}${endings[Math.floor(Math.random() * endings.length)]}`;
}

module.exports = {
    getName,
}