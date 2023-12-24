//place this file in the parent of the app-folder directory and run it using the command pm2 start pm2.config.js
module.exports = {
  apps: [
    {
      name: "next-app",
      script: "./app-folder/start.js",
      args: ["/home/admin/nextjs/app-folder/config/.env.local"],
      cwd: "/home/admin/nextjs/app-folder",
    },
  ],
};
