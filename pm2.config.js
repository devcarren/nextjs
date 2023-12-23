module.exports = {
  apps: [
    {
      name: "next-app",
      script: "start.js",
      args: "/home/admin/nextjs/sample-app/config/.env.properties",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
