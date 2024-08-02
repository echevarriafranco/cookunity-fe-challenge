# - Frontend 
- Install Dependencies
- Run npm install to install the necessary dependencies.
- Install Node.js
- Ensure Node.js version 20.x is installed.
- Important: When testing server components with Next.js, use npm run start to accurately simulate the production environment. The command npm run dev will work, but it won't replicate production conditions accurately.

- The frontend application has a 2-minute cache duration. This duration provides enough time to test data caching and observe application behavior. After 2 minutes, a refetch will occur to update the cached data.




# 1 - How to Run the Project

```bash
 
# 1 - build the project
npm run build

# 2 -  run the builded app
npm run start

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment
- API URL Configuration The API is set to point to localhost by default. Make sure to update the environment variable NEXT_PUBLIC_API_URL in your environment configuration to reflect the actual server location.

```bash
# local
$ NEXT_PUBLIC_API_URL=http://localhost:3101

# remote
$ NEXT_PUBLIC_API_URL=https://cookunity-be-challenge-production.up.railway.app

```
 
