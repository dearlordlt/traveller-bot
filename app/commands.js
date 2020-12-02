const BOT_PREFIX = '$';

const parseCommand = (msg) => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }

    if (msg.content.startsWith('$r 2')) {
        msg.react('🎲');
        msg.reply('2d');
    }
}

exports.parseCommand = parseCommand;