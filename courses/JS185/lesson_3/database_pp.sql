/*
JS185 Lesson 3: Working With Databases - Practice Problems
The following SQL statements are answers to the practice problems. They are not
intended for an actual SQL file.
*/

-- Q1
-- schema.sql
CREATE TABLE todolists (
  id serial PRIMARY KEY,
  title text NOT NULL UNIQUE
);

CREATE TABLE todos {
  id serial PRIMARY KEY,
  title text NOT NULL,
  done boolean NOT NULL DEFAULT false,
  todolist_id integer NOT NULL REFERENCES todolists(id) ON DELETE CASCADE
};

/*
The statements shown above reflect the required specifications for the 
'todolists' and 'todos' tables:

todolists
 - Each todo list has an id number as a primary key.
 - Each todo list has a unique title.

todos
 - Each todo has an id number as a primary key.
 - Each todo has a title. The title doesn't have to be unique.
 - Each todo can be either done or undone. Undone is the default state for new 
   todos.
 - Each todo belongs to a todo list. This relationship uses a foreign key that 
   references the todo list.
*/


-- Q2
CREATE DATABASE todo-lists;
\c todo-lists
\i schema.sql

/*
The statements shown above can be called from the 'psql' terminal. The first
statement creates a new database named 'todo-lists.' The second statement, a
meta command, connects to the newly created database. The third statement
imports the 'schema.sql' file created in Problem 1 to the currently connected
database.
*/


-- Q3
-- seed-data.sql
\c todo-lists
INSERT INTO todolists (title)
VALUES ('Work Todos'), ('Home Todos'), ('Additional Todos'), ('social todos');

INSERT INTO todos (title, done, todolist_id)
VALUES ('Get Coffee', true, 1), 
('Chat with co-workers', true, 1), 
('Duck out of meeting', false, 1), 
('Feed the cats', true, 2), 
('Go to bed', true, 2), 
('Buy milk', true, 2), 
('Study for Launch School', true, 2), 
('Go to Libby''s birthday party', false, 4);

/*
The statements shown above are rows of data that can be inserted into the
'todolists' and 'todos' tables. They are temporary data that can be used for
development purposes. In other words, they are seed data to work with.
*/