## For the backend

### in creating a new project;

```bash
cd server
npm init -y
npm i cloudinary express cors dotenv mongoose nodemon openai
npm start
```

#### in th package.json;

- replace the **scripts** object with the below;

  ```json
  "scripts": {
      "start": "nodemon index"
  }
  ```

- add the following line just below the description;
  the above will allow us use **import** and **export** statements with modules like react.js.

  ```json
  "type": "module",
  ```

### When cloning this repo;

```s
npm i
```

### then run the server;

```s
npm start
```

### Connect to mongoDB

- go to https://www.mongodb.com/atlas/database
- use the tutorial in https://www.youtube.com/watch?v=EyIvuigqDoA&t=426s from 1.07.23 - 1.10.31
