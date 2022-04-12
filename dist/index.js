const util = require('./util');
const { RPCClient, RPCCommands } = require('./client');

module.exports = {
    Client: RPCClient,
    Commands: RPCCommands,
    register(id) {
        return util.register(`discord-${id}`);
    },
};
