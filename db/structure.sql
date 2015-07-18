drop table if exists users;
create table users (
  id serial primary key,
  first_name varchar(255),
  last_name varchar(255),
  age integer,
  profile_url varchar(255),
  gender varchar(255),
  current_location varchar(255),
  email_address varchar(255),
  see_w boolean,
  see_m boolean,
  password_hash varchar(255)
  );