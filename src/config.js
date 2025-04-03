module.exports = {
  token: process.env.token || "", // Ensure this env variable is set
  channelId: process.env.channelId || "1355561533014544414",

  webMonitor: true, // Set to false if you don't want a website
  expressPort: process.env.expressPort || 3000,

  nodes: [
    {
      host: "78.46.65.243", // Your lavalink host address 
      password: "dsc.gg/Zahard23", // Your lavalink password
      port: 4626, // Your lavalink port
      identifier: "Main Node V4", // Name for your lavalink
      secure: false, // set to true if your lavalink has SSL
      reconnectTimeout: 300000,
      reconnectTries: 100,
    },
  ],
};
