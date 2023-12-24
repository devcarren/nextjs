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
