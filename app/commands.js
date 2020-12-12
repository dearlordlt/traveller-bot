const BOT_PREFIX = '$';

const r = (sides = 6) => (Math.ceil(Math.random() * sides));

const simpleRoll = (numDice, sides = 6) => Array.apply(null, Array(numDice)).map(item => item = r(sides));

const sum = (arr) => arr.reduce((a, b) => a + b, 0);

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
        🪐 **$boon** - *rolls boon roll*
        🪐 **$bane** - *rolls bane roll*
        🪐 **$boon x** - *$boon x (x modifier)*
        🪐 **$bane x** - *$bane x (x modifier)*
        🪐 **$dm** - *list characteristics*
        🪐 **$dm x** - *$dm_x (x characteristic)*
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
            const val = content.match(/[^\/]+$/);
            diff = parseInt(val[0]);
        }

        dm = parseInt(dm) ? parseInt(dm) : 0;

        if (parseInt(dices)) {
            msg.react('🎲');
            const value = simpleRoll(parseInt(dices), sides);
            const sumValue = sum(value) + parseInt(dm);
            const isSuccessStr = sumValue >= diff
                ? `[${sumValue} >= ${diff}] **Success!** 🤑`
                : `[${sumValue} >= ${diff}] **Failure!** ☠️`;

            msg.reply(`🎲 [${value}]${!dm ? '' : '+' + dm}= ${sumValue} ${diff ? isSuccessStr : ''}`);
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

    if (msg.content.startsWith('$dm')) {
        msg.react('🦮');
        const dm = parseInt(msg.content.split(' ')[1]) || 0;
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
}

exports.parseCommand = parseCommand;