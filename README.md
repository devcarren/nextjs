This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
#for non-prod
node start.js /DEV/nextjs/sample-next-app/config/.env.properties
#for prod
NODE_ENV=production node start.js /home/admin/nextjs/sample-app/config/.env.properties

#using PM2
#start this command on one folder on top of application folder
pm2 start pm2.config.js
```
