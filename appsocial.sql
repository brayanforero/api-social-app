-- DEFINE DATABASE

-- 1. CREATE USER
CREATE USER admin PASSWORD 'yourpassword';
-- 2. CREATE TABLESPACE
CREATE TABLESPACE tb_appsocial LOCATION 'E:\PostgreSQL\my_data\appsocial'
-- 3. CREATE DATABASE
CREATE DATABASE IF NOT EXISTS appsocial OWNER admin TABLESPACE tb_appsocial;


CREATE TABLE IF NOT EXISTS users (
  id bigserial,
  fullname varchar(100) not null,
  username varchar(100) not null,
  password varchar(250) not null

  constraint pk_users primary key(id) 
);

alter table users add constraint uq_users unique(username);

CREATE TABLE IF NOT EXISTS publications (
  id bigserial,
  title varchar(255) not null,
  body text not null,
  user_id bigint not null,
  created_at timestamp default now(),
  updated_at timestamp default now(),

  constraint pk_publications primary key(id), 
  constraint fk_publications_users foreign key(user_id) 
    references users (id)
    on delete cascade
    on update cascade 
);
alter table publications add constraint uq_publications unique(title);

CREATE TABLE IF NOT EXISTS comments (
  id bigserial,
  body varchar(255) not null,
  user_id bigint not null,
  publication_id bigint not null,
  created_at timestamp default now(),
  updated_at timestamp default now(),

  constraint pk_comments primary key(id), 
  constraint fk_comments_users foreign key(user_id) 
    references users (id)
    on delete cascade
    on update cascade ,
  constraint fk_comments_publication foreign key(publication_id) 
    references publications (id)
    on delete cascade
    on update cascade 
);