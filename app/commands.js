const BOT_PREFIX = '$';

const r = () => (Math.ceil(Math.random(d = 6) * 6));

const simpleRoll = (numDice) => Array.apply(null, Array(numDice)).map(item => item = r());

const sum = (arr) => arr.reduce((a, b) => a + b, 0);

const dm = (num) => {
    if (num <= 0) return '-3';
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
        🪐 **$r** - *$r_x_y (x dices, y modifier)*
        🪐 **$r2** - *roll 2d*
        🪐 **$r66** - *roll d66*
        🪐 **$char** - *generates characteristics*
        🪐 **$boon** - *rolls boon roll*
        🪐 **$bane** - *rolls bane roll*
        🪐 **$boon x** - *$boon_x (x modifier)*
        🪐 **$bane x** - *$bane_x (x modifier)*
        `);
    }

    if (msg.content.startsWith('$r ') || msg.content.startsWith('$r2')) {
        let dices, dm;
        if (msg.content.startsWith('$r2')) {
            dices = 2;
            dm = 0;
        } else {
            dices = msg.content.split(' ')[1];
            dm = msg.content.split(' ')[2] || 0;
        }

        console.log(dices, dm);

        if (parseInt(dices) && (parseInt(dm) || dm === 0)) {
            msg.react('🎲');
            const value = simpleRoll(parseInt(dices));
            const sumValue = sum(value) + parseInt(dm);
            msg.reply(`🎲 [${value}] = ${sumValue}`);
        } else {
            msg.react('⛔');
        }
    }

    if (msg.content.startsWith('$r66')) {
        msg.react('🎲');
        msg.reply(`🎲 [${r()}${r()}]`);
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
            🎲 Roll1 - [${roll1}] = **${sum(roll1)}** DM:${dm(sum(roll1))}
            🎲 Roll2 - [${roll2}] = **${sum(roll2)}** DM:${dm(sum(roll2))}
            🎲 Roll3 - [${roll3}] = **${sum(roll3)}** DM:${dm(sum(roll3))}
            🎲 Roll4 - [${roll4}] = **${sum(roll4)}** DM:${dm(sum(roll4))}
            🎲 Roll5 - [${roll5}] = **${sum(roll5)}** DM:${dm(sum(roll5))}
            🎲 Roll6 - [${roll6}] = **${sum(roll6)}** DM:${dm(sum(roll6))}

            TOTAL: **${sum([sum(roll1), sum(roll2), sum(roll3), sum(roll4), sum(roll5), sum(roll6)])}**

            *Alternatively:*
            [8][7][7][6][6][4] 	= (38)
            [9][8][6][6][5][4] 	= (38)
            [10][8][6][6][4][4]   = (38)
        `);
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
    }
}

exports.parseCommand = parseCommand;