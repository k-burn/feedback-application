# Feedback Application

## Built With

- Javascript
- React
- Redux
- PostgreSQL

## Getting Started

1. Download this project 

2. Create your database and tables using the provided `data.sql` file. 

```SQL
CREATE DATABASE "prime_feedback";

-- Switch to "prime_feedback" before making feedback table

CREATE TABLE "feedback" (
  "id" serial primary key,
  "feeling" INT not null,
  "understanding" INT not null,
  "support" INT not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

-- Sample feedback item
INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES (4, 4, 5, 'Doing Great!');
```

3. Start the server.

```
npm install
npm run server
```

4. Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```
5. The home page has not yet been completed and connected to the first feedback input page. For the time being, you can type #/1 at the end of the url path to get to the first slide. I apologize for the incovenience.

### Completed Features
- [x] Feature a
- [x] Feature b

### Next Steps

- [ ] Style the project using Material-UI
- [ ] Add the ability to flag an existing feedback entry for further review on the /admin view
- [ ] Deploy the feedback application to Heroku 

