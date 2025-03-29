module.exports = {
  token: process.env.token || "", // Ensure this env variable is set
  channelId: process.env.channelId || "",

  webMonitor: true, // Set to false if you don't want a website
  expressPort: process.env.expressPort || 3000,

  nodes: [
    {
      host: "78.46.65.243", // Your lavalink host address 
      password: "youshallnotpass", // Your lavalink password
      port: 4626, // Your lavalink port
      identifier: "Main Node", // Name for your lavalink
      secure: false, // set to true if your lavalink has SSL
      reconnectTimeout: 300000,
      reconnectTries: 100,
    },
    {
      host: "lavalink.jirayu.net",  
      password: "youshallnotpass", 
      port: 13591,
      identifier: "Backup Node",
      secure: false,
      reconnectTimeout: 300000,
      reconnectTries: 100,
    },
  ],
};
