const charactersNPC = require('./random-characters');
const randomNames = require('./names');
const planet = require('./planet');

const r = (sides = 6) => (Math.ceil(Math.random() * sides));

// eslint-disable-next-line no-unused-vars
const simpleRoll = (numDice, sides = 6) => Array.apply(null, Array(numDice)).map(item => item = r(sides));

const sum = (arr) => arr.reduce((a, b) => a + b, 0);

const rollLn = (l, sides = 6) => Array.apply(null, Array(l)).map(() => r(sides));

const dmVal = (num) => {
    if (num < 0) return '-3';
    if (num <= 2) return '-2';
    if (num <= 5) return '-1';
    if (num <= 8) return '0';
    if (num <= 11) return '+1';
    if (num <= 14) return '+2';
    if (num <= 17) return '+3';
}

const parseCommand = (msg) => {

    if (msg.content.startsWith('$help')) {
        msg.react('🦮');
        msg.reply(`
        🪐 **$r** - *$r x y z /y*
                    **x** dice
                    **y** *mod (optional, default = 0))*
                    **z** *sides (optional, default = 6))*
                    **y** *difficulty (optional))*
        🪐 **$r2** - *roll 2d*
        🪐 **$r66** - *roll d66*
        🪐 **$char** - *generates characteristics*
        🪐 **$boon x** - *$boon x (x optional modifier)*
        🪐 **$bane x** - *$bane x (x optional modifier)*
        🪐 **$dm** - *list characteristics*
        🪐 **$dm x** - *$dm_x (x characteristic)*
        🪐 **$jump x** - *$jump_x (x DM), DM-2 for unrefined fuel, DM-4 for 100 diameter limit*
        🪐 **$ship** - *ship maintenance*
        🪐 **$cost** - *cost of living*
        🪐 **$npc x** - *random npc (x optional, number, max 12)*
        🪐 **$names x** - *random names (x optional, number, max 50)*
        🪐 **$planet x** - *random planet (x optional, planet code: a.e. D3C6XX1)*
        `);
        return;
    }

    if (msg.content.startsWith('$r ') || msg.content.startsWith('$r2')) {
        let dices, dm, diff, sides = 6;
        let content = msg.content;

        if (msg.content.includes('  ')) {
            msg.react('⛔');
            msg.reply(`⛔ Warning ⚠️ **Dima** detected, please use normal syntax.`);
            msg.react('💳');
            msg.react('⚠️');
            msg.reply(`💳 Imperial law strictly forbids **Dima**'s syntax`);
            msg.reply(`💳 You received a fine - **Cr100**`);
            msg.reply(`💳 Please pay in nearest spaceport`);
            content = msg.content.replace(/\s\s+/g, ' ');
        }

        if (content.startsWith('$r2')) {
            dices = 2;
            dm = 0;
        } else {
            dices = content.split(' ')[1];
            dm = content.split(' ')[2] || 0;
            sides = parseInt(content.split(' ')[3]) || 6;
        }

        if (content.includes('/')) {
            const val = content.match(/[^/]+$/);
            diff = parseInt(val[0]);
        }

        dm = parseInt(dm) ? parseInt(dm) : 0;

        if (parseInt(dices)) {
            msg.react('🎲');
            const value = simpleRoll(parseInt(dices), sides);
            const sumValue = sum(value) + parseInt(dm);
            let successLevel = '';

            if (sumValue - diff <= -6) successLevel = 'Exceptional Failure';
            else if (sumValue - diff <= -2) successLevel = 'Average Failure';
            else if (sumValue - diff === -1) successLevel = 'Marginal Failure';
            else if (sumValue - diff === 0) successLevel = 'Marginal Success';
            else if (sumValue - diff <= 5) successLevel = 'Average Success';
            else if (sumValue - diff >= 6) successLevel = 'Exceptional Success';

            const isSuccessStr = sumValue >= diff
                ? `[${sumValue} >= ${diff}] **${successLevel} (${sumValue - diff})** 🤑`
                : `[${sumValue} >= ${diff}] **${successLevel} (${sumValue - diff})** ☠️`;

            msg.reply(`🎲 [${value}]${!dm ? '' : '+' + dm}=**${sumValue}** ${diff || diff === 0 ? isSuccessStr : ''}`);
        } else {
            msg.react('⛔');
        }
        return;
    }

    if (msg.content.startsWith('$r66')) {
        msg.react('🎲');
        msg.reply(`🎲 [${r()}${r()}]`);
        return;
    }

    if (msg.content.startsWith('$dm ')) {
        msg.react('🦮');
        const dm = parseInt(msg.content.split(' ')[1]) || 0;
        msg.reply(`🦮 dm for ${dm} is ${dmVal(dm)}`);
        return;
    }

    if (msg.content.startsWith('$npc')) {
        msg.react('🧍');
        let num = msg.content.split(' ')[1] || 1;
        let rMsg = `
            `;
        if (num > 12) num = 12;
        for (let i = 0; i < num; i++) {
            const r66 = parseInt(`${r()}${r()}`);
            const rNPCName = charactersNPC.characters.find(val => val.value === r66).name;
            rMsg += `🧍 ${num > 1 ? i + 1 : ''} ${rNPCName} - ${randomNames.getName()}
            `;
        }
        msg.reply(rMsg);
        return;
    }

    if (msg.content.startsWith('$names')) {
        msg.react('🧍');
        let num = msg.content.split(' ')[1] || 1;
        let rMsg = `
            `;
        if (num > 50) num = 50;
        for (let i = 0; i < num; i++) {
            rMsg += `🧍 ${num > 1 ? i + 1 : ''} ${randomNames.getName()}
            `;
        }
        msg.reply(rMsg);
        return;
    }

    if (msg.content.startsWith('$dm')) {
        msg.react('🦮');
        msg.reply(`
            🦮 dm for characteristics are:
                *00* - **{${dmVal(0)}}**
                *01* - **{${dmVal(1)}}**
                *02* - **{${dmVal(2)}}**
                *03* - **{${dmVal(3)}}**
                *04* - **{${dmVal(4)}}**
                *05* - **{${dmVal(5)}}**
                *06* - **{${dmVal(6)}}**
                *07* - **{${dmVal(7)}}**
                *08* - **{${dmVal(8)}}**
                *09* - **{${dmVal(9)}}**
                *10* - **{${dmVal(10)}}**
                *11* - **{${dmVal(11)}}**
                *12* - **{${dmVal(12)}}**
                *13* - **{${dmVal(13)}}**
                *14* - **{${dmVal(14)}}**
                *15* - **{${dmVal(15)}}**
        `);
        return;
    }

    if (msg.content.startsWith('$char')) {
        msg.react('🥇');

        const roll1 = simpleRoll(2);
        const roll2 = simpleRoll(2);
        const roll3 = simpleRoll(2);
        const roll4 = simpleRoll(2);
        const roll5 = simpleRoll(2);
        const roll6 = simpleRoll(2);

        msg.reply(`
            🎲 Roll1 - [${roll1}] = **${sum(roll1)}** DM:${dmVal(sum(roll1))}
            🎲 Roll2 - [${roll2}] = **${sum(roll2)}** DM:${dmVal(sum(roll2))}
            🎲 Roll3 - [${roll3}] = **${sum(roll3)}** DM:${dmVal(sum(roll3))}
            🎲 Roll4 - [${roll4}] = **${sum(roll4)}** DM:${dmVal(sum(roll4))}
            🎲 Roll5 - [${roll5}] = **${sum(roll5)}** DM:${dmVal(sum(roll5))}
            🎲 Roll6 - [${roll6}] = **${sum(roll6)}** DM:${dmVal(sum(roll6))}

            TOTAL: **${sum([sum(roll1), sum(roll2), sum(roll3), sum(roll4), sum(roll5), sum(roll6)])}**

            *Alternatively:*
            [8][7][7][6][6][4] 	= (38)
            [9][8][6][6][5][4] 	= (38)
            [10][8][6][6][4][4]   = (38)
        `);
        return;
    }

    if (msg.content.startsWith('$boon') || msg.content.startsWith('$bane')) {

        const dm = msg.content.split(' ')[1] || 0;

        if (parseInt(dm) || dm === 0) {
            msg.react('🎲');
            const roll = [r(), r(), r()];
            roll.sort();
            const shifted = msg.content.startsWith('$boon') ? [roll[1], roll[2]] : [roll[0], roll[1]];
            const sumBoon = parseInt(dm) + sum(shifted);

            msg.reply(`🎲 [${roll}]${dm ? '+' + dm : ''}=**${sumBoon}**`);
        } else {
            msg.react('⛔');
        }
        return;
    }

    if (msg.content.startsWith('$jump')) {
        const dm = msg.content.split(' ')[1] || 0;
        const jumpAstrogation = [
            { val: 2, label: `Bad Jump: 16D Hours. Traveller Companion Book p.142`, hours: sum(rollLn(16)), fuel: 20, diameters: (110 - sum(rollLn(3))) },
            { val: 3, label: `Bad Jump: 10D Hours. Traveller Companion Book p.142`, hours: sum(rollLn(10)), fuel: 17, diameters: (110 - sum(rollLn(2))) },
            { val: 4, label: `Bad Jump: 8D Hours. Traveller Companion Book p.142`, hours: sum(rollLn(8)), fuel: 14, diameters: (105 - sum(rollLn(1))) },
            { val: 5, label: `Bad Jump: 6D Hours. Traveller Companion Book p.142`, hours: sum(rollLn(6)), fuel: 12, diameters: (100 + sum(rollLn(2)) * 10) },
            { val: 6, label: `5D Hours`, hours: sum(rollLn(5)), fuel: 10, diameters: (100 + sum(rollLn(2)) * 5) },
            { val: 7, label: `4D Hours`, hours: sum(rollLn(4)), fuel: 10, diameters: (100 + sum(rollLn(4))) },
            { val: 8, label: `3D Hours`, hours: sum(rollLn(3)), fuel: 10, diameters: (100 + sum(rollLn(3))) },
            { val: 9, label: `2D Hours`, hours: sum(rollLn(2)), fuel: 10, diameters: (100 + sum(rollLn(2))) },
            { val: 10, label: `1D Hours`, hours: sum(rollLn(1)), fuel: 9, diameters: (100 + sum(rollLn(1))) },
            { val: 11, label: `1D3 Hours`, hours: sum(rollLn(1, 3)), fuel: 7, diameters: (100 + sum(rollLn(1, 3))) },
            { val: 12, label: `160 Hours exactly`, hours: 0, fuel: 5, diameters: 100 },
        ];

        if (parseInt(dm) || dm === 0) {
            msg.react('🎲');
            const roll = [r(), r()];

            const sumJump = parseInt(dm) + sum(roll);
            let astroValue = sumJump;
            astroValue = astroValue > 12 ? 12 : astroValue < 2 ? 2 : astroValue;

            const result = jumpAstrogation.find(val => val.val === astroValue);

            msg.reply(`🎲 [${roll}]+${dm}=**${sumJump}**`);
            msg.reply(`🚀 Jump result: ${result.label}`);
            msg.reply(`🚀 Jump took: ${160 + result.hours} h`);
            msg.reply(`🚀 Distance eq: ${result.diameters} diameters`);
            msg.reply(`🚀 Used ${result.fuel}% of total fuel per parsec`);
        } else {
            msg.react('⛔');
        }
        return;
    }

    if (msg.content.startsWith('$ship')) {
        msg.react('🚀');
        msg.reply(`🚀 **Ship maintenance Cost**:
        **Life Support** - 
            Cr1000 per stateroom, 
            Cr3000 for double occupancy, 
            Cr100 per low berth,
            Cr1000 per person
        **Fuel** Cr500 per refined ton, Cr100 per unrefined ton
        **Repairs and Maintenance** 0.1 % of purchase price, divided by 12
        **Salary:** Pilot Cr6000
        **Salary:** Astrogator Cr5000
        **Salary:** Engineer Cr4000
        **Salary:** Steward Cr2000
        **Salary:** Medic Cr3000
        **Salary:** Gunner Cr1000
        **Salary:** Marine Cr1000`);
        return;
    }

    if (msg.content.startsWith('$cost')) {
        msg.react('💳');
        msg.reply(`
        **Very Poor** Cr400💳 *Social Standing 2*
        **Poor** Cr800💳 *Social Standing 4*
        **Low** Cr1000💳 *Social Standing 5*
        **Average** Cr1200💳 *Social Standing 6*
        **Good** Cr1500💳 *Social Standing 7*
        **High** Cr2000💳 *Social Standing 8*
        **Very High** Cr2500💳 *Social Standing 10*
        **Rich** Cr5000💳 *Social Standing 12*
        **Very Rich** Cr12000💳 *Social Standing 14*
        **Ludicrously Rich** Cr20000+💳 *Social Standing 15*
        `);
        return;
    }

    if (msg.content.startsWith('$planet')) {
        msg.react('🪐');

        if (msg.content.startsWith('$planet ')) {
            const message = msg.content.split(' ');
            if (message.length !== 2) {
                msg.react('⛔');
                msg.reply(`Expected 1 argument, got ${message.length - 1}`);
                return;
            } else {
                const planetCode = message[1].toUpperCase();
                const planetCodeArr = planetCode.split('');

                const portV = planet.getPortValue(planetCodeArr[0]);
                const sizeV = planet.getSizeValue(planetCodeArr[1]);
                const atmoV = planet.getAtmosphereValue(planetCodeArr[2]);
                const hydroV = planet.getHydroValue(planetCodeArr[3]);
                const popV = planet.getPopValue(planetCodeArr[4]);
                const govV = planet.getGovValue(planetCodeArr[5]);
                const lawV = planet.getLawValue(planetCodeArr[6]);

                msg.reply(`
                    **PLANET CODE:** ${planetCode}
                    **PORT:** (**${portV.value}**) - ${portV.label}
                    **SIZE:** (**${sizeV.value}**) - ${sizeV.label} - **Gravity**: ${sizeV.gravity}
                    **ATMOSPHERE:** (**${atmoV.value}**) - ${atmoV.label} - **Pressure**: ${atmoV.pressure} **Protection**: ${atmoV.protection}
                    **HYDRO:** (**${hydroV.value}**) - ${hydroV.label}
                    **POP:** (**${popV.value}**) - ${popV.label} (${popV.pop})
                    **GOVERNMENT:** (**${govV.value}**) - ${govV.label}
                    **LAW:** (**${lawV.value}**) - **Banned weapons** - ${lawV.label}, **Banned Armour**: ${lawV.bannedArmour}
                    `
                );
                return;
            }
        }

        const port = planet.getPort();
        const size = planet.getSize();
        const atmo = planet.getAtmosphere();
        const hydro = planet.getHydro();
        const pop = planet.getPop();
        const gov = planet.getGov();
        const law = planet.getLaw();

        const code = `${port.value}${size.value}${atmo.value}${hydro.value}${pop.value}${gov.value}${law.value}`;

        msg.reply(`
            **CODE:** **${code}** 🪐
            **PORT:** (**${port.value}**) - ${port.label}
            **SIZE:** (**${size.value}**) - ${size.label} - **Gravity**: ${size.gravity}
            **ATMOSPHERE:** (**${atmo.value}**) - ${atmo.label} - **Pressure**: ${atmo.pressure} **Protection**: ${atmo.protection}
            **HYDRO:** (**${hydro.value}**) - ${hydro.label}
            **POP:** (**${pop.value}**) - ${pop.label} (${pop.pop})
            **GOVERNMENT:** (**${gov.value}**) - ${gov.label}
            **LAW:** (**${law.value}**) - **Banned weapons** - ${law.label}, **Banned Armour**: ${law.bannedArmour}
            🪐 https://drive.google.com/file/d/12XVnhm-bBNzBv16Hr1ZVDX0DnGpmkFmw/view?usp=sharing
        `);
        return;
    }
}

exports.parseCommand = parseCommand;