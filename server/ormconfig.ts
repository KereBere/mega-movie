export default {
  type: "mysql",
  host: "us-cdbr-east-05.cleardb.net",
  port: 3306,
  username: "b5c134c4138ccc",
  password: "662a2122",
  database: "heroku_e59a4a09fe8b7b5",
  synchronize: true,
  logging: false,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
};
