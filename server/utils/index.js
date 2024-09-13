module.exports = {
    updatePlayerCount: (client, seconds) => {
        const interval = setInterval(function setStatus() {
            let status = `${GetNumPlayerIndices()} player(s)`;
            client.user.setActivity(status, { type: "WATCHING" });

            return setStatus;
        }(), seconds * 1000);
    }
};