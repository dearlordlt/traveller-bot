Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}

const starPort = [
    { value: 'A', label: 'Excellent' },
    { value: 'B', label: 'Good' },
    { value: 'C', label: 'Routine' },
    { value: 'D', label: 'Poor' },
    { value: 'E', label: 'Frontier' },
    { value: 'F', label: 'None' },
];

const getPort = () => starPort.random();
const getPortValue = (code) => starPort.find(val => val.value === code);

const size = [
    { value: 'X', label: '<=1000 km', gravity: '0g No' },
    { value: '1', label: '1600 km', gravity: '0.05g Lo' },
    { value: '2', label: '3200 km', gravity: '0.15g Lo' },
    { value: '3', label: '4800 km', gravity: '0.25g Lo' },
    { value: '4', label: '6400 km', gravity: '0.35g Lo' },
    { value: '5', label: '8000 km', gravity: '0.45g Lo' },
    { value: '6', label: '9600 km', gravity: '0.7g Lo' },
    { value: '7', label: '11200 km', gravity: '0.9g' },
    { value: '8', label: '12800 km', gravity: '1.0g' },
    { value: '9', label: '14400 km', gravity: '1.25g' },
    { value: 'A', label: '16000 km', gravity: '1.4g Hi' },
];

const getSize = () => size.random();
const getSizeValue = (code) => size.find(val => val.value === code);

const atmosphere = [
    { value: 'X', label: 'None', pressure: '0.0000', protection: 'Vacc suit' },
    { value: '1', label: 'Trace', pressure: '0.0500', protection: 'Vacc suit' },
    { value: '2', label: 'V. Thin, Tainted', pressure: '0.2000', protection: 'Respirator, filter' },
    { value: '3', label: 'V. Thin', pressure: '0.2000', protection: 'Respirator' },
    { value: '4', label: 'Thin, Tainted', pressure: '0.6000', protection: 'Filter' },
    { value: '5', label: 'Thin', pressure: '0.6000', protection: '-' },
    { value: '6', label: 'Standard', pressure: '1.0000', protection: '-' },
    { value: '7', label: 'Std., Tainted', pressure: '1.0000', protection: 'Filter' },
    { value: '8', label: 'Dense', pressure: '2.0000', protection: '-' },
    { value: '9', label: 'Dense, Tainted', pressure: '2.0000', protection: 'Filter' },
    { value: 'A', label: 'Exotic', pressure: 'Varies', protection: 'Air supply' },
    { value: 'B', label: 'Corrosive', pressure: 'Varies', protection: 'Vacc suit' },
    { value: 'C', label: 'Insidious', pressure: 'Varies', protection: 'Vacc suit' },
    { value: 'D', label: 'V. Dense', pressure: '2.500+', protection: '-' },
    { value: 'E', label: 'Low', pressure: '<=0.50', protection: '-' },
    { value: 'F', label: 'Unusual (Varies)', pressure: 'Varies', protection: 'Varies' },
];

const getAtmosphere = () => atmosphere.random();
const getAtmosphereValue = (code) => atmosphere.find(val => val.value === code);

const hydro = [
    { value: 'X', label: '0 - 5%' },
    { value: '1', label: '6 - 15%' },
    { value: '2', label: '16 - 25%' },
    { value: '3', label: '26 - 35%' },
    { value: '4', label: '36 - 45%' },
    { value: '5', label: '46 - 55%' },
    { value: '6', label: '56 - 65%' },
    { value: '7', label: '66 - 75%' },
    { value: '8', label: '76 - 85%' },
    { value: '9', label: '86 - 95%' },
    { value: 'A', label: '96 - 100%' },
];

const getHydro = () => hydro.random();
const getHydroValue = (code) => hydro.find(val => val.value === code);

const pop = [
    { value: 'X', label: Math.pow(10, 0), pop: `10^0` },
    { value: '1', label: Math.pow(10, 1), pop: `10^1` },
    { value: '2', label: Math.pow(10, 2), pop: `10^2` },
    { value: '3', label: Math.pow(10, 3), pop: `10^3` },
    { value: '4', label: Math.pow(10, 4), pop: `10^4` },
    { value: '5', label: Math.pow(10, 5), pop: `10^5` },
    { value: '6', label: Math.pow(10, 6), pop: `10^6` },
    { value: '7', label: Math.pow(10, 7), pop: `10^7` },
    { value: '8', label: Math.pow(10, 8), pop: `10^8` },
    { value: '9', label: Math.pow(10, 9), pop: `10^9` },
    { value: 'A', label: Math.pow(10, 10), pop: `10^10` },
    { value: 'B', label: Math.pow(10, 11), pop: `10^11` },
    { value: 'C', label: Math.pow(10, 12), pop: `10^12` },
    { value: 'D', label: Math.pow(10, 13), pop: `10^13` },
    { value: 'E', label: Math.pow(10, 14), pop: `10^14` },
    { value: 'F', label: Math.pow(10, 15), pop: `10^15` },
];

const getPop = () => pop.random();
const getPopValue = (code) => pop.find(val => val.value === code);

const gov = [
    { value: 'X', label: 'None/Rebels' },
    { value: '1', label: 'Company/corporation' },
    { value: '2', label: 'Participating democracy' },
    { value: '3', label: 'Self-perpetuating oligarchy' },
    { value: '4', label: 'Representative democracy' },
    { value: '5', label: 'Feudal technocracy' },
    { value: '6', label: 'Captive government' },
    { value: '7', label: 'Balkanization' },
    { value: '8', label: 'Civil service bureaucracy' },
    { value: '9', label: 'Impersonal bureaucracy' },
    { value: 'A', label: 'Charismatic dictator' },
    { value: 'B', label: 'Non-charismatic dictator' },
    { value: 'C', label: 'Charismatic oligarchy' },
    { value: 'D', label: 'Religious dictatorship' },
    { value: 'E', label: 'Religious autocracy' },
    { value: 'F', label: 'Totalitarian oligarchy' },
];

const getGov = () => gov.random();
const getGovValue = (code) => gov.find(val => val.value === code);

const law = [
    { value: '0', label: 'None', bannedArmour: 'None' },
    { value: '1', label: 'None', bannedArmour: 'Battle dress' },
    { value: '2', label: 'Portable energy and laser weapons', bannedArmour: 'Combat armour' },
    { value: '3', label: 'Military weapons', bannedArmour: 'Flak' },
    { value: '4', label: 'Light assault weapons and SMG', bannedArmour: 'Cloth' },
    { value: '5', label: 'Personal concealable weapons', bannedArmour: 'Mesh' },
    { value: '6', label: 'All firearms except for shotguns and stunners, carrying weapons discouraged', bannedArmour: '-' },
    { value: '7', label: 'Shotguns', bannedArmour: '-' },
    { value: '8', label: 'All bladed weapons, stunners', bannedArmour: 'All visible armour' },
    { value: '9', label: 'All weapons', bannedArmour: 'All armour' },
];

const getLaw = () => law.random();
const getLawValue = (code) => law.find(val => val.value === code);

const trade = [
    { code: 'Ag', class: 'Agricultural' },
    { code: 'As', class: 'Asteroid' },
    { code: 'Ba', class: 'Barren' },
    { code: 'De', class: 'Desert' },
    { code: 'Fl', class: 'Fluid oceans' },
    { code: 'Ga', class: 'Garden' },
    { code: 'Hi', class: 'High population' },
    { code: 'Ht', class: 'High tech' },
    { code: 'Ie', class: 'Ice-capped' },
    { code: 'In', class: 'Industrial' },
    { code: 'Lo', class: 'Low-population' },
    { code: 'Lt', class: 'Low-tech' },
    { code: 'Na', class: 'Non-agricultural' },
    { code: 'Ni', class: 'Non-industrial' },
    { code: 'Po', class: 'Poor' },
    { code: 'Ri', class: 'Rich' },
    { code: 'Va', class: 'Vacuum' },
    { code: 'Wa', class: 'Water world' },
];

const data = {
    starPort,
    size,
    atmosphere,
    hydro,
    pop,
    gov,
    trade,
    law,
}

module.exports = {
    data,
    getPort,
    getSize,
    getAtmosphere,
    getHydro,
    getPop,
    getGov,
    getLaw,
    getLawValue,
    getPortValue,
    getSizeValue,
    getAtmosphereValue,
    getHydroValue,
    getPopValue,
    getGovValue,
}