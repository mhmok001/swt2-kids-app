-- Address
CREATE TABLE IF NOT EXISTS address (
    id BIGINT NOT NULL AUTO_INCREMENT,
    street VARCHAR(255),
    house_number VARCHAR(50),
    postal_code VARCHAR(20),
    latitude DOUBLE,
    longitude DOUBLE,
    PRIMARY KEY (id)
);

-- Facility
CREATE TABLE IF NOT EXISTS facility (
    id BIGINT NOT NULL AUTO_INCREMENT,
    name varchar(255),
    description VARCHAR(255),
    address_id BIGINT,
    PRIMARY KEY (id),
    CONSTRAINT fk_facility_address FOREIGN KEY (address_id) REFERENCES address(id)
    );

-- Event
CREATE TABLE IF NOT EXISTS event (
    id BIGINT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255),
    facility_id BIGINT,
    event_typ VARCHAR(31),
    category varchar(255),
    start_date DATE,
    end_date DATE,
    start_time TIME,
    end_time TIME,
    status VARCHAR(20),
    max_participants INT NOT NULL,
    organizer VARCHAR(255),
    artist VARCHAR(255),
    genre VARCHAR(255),
    theme VARCHAR(255),
    sport_type VARCHAR(255),
    is_competition BOOLEAN,    
    topic VARCHAR(255),
    speaker VARCHAR(255),
    duration_minutes INT,
    PRIMARY KEY (id),
    CONSTRAINT fk_event_facility FOREIGN KEY (facility_id) REFERENCES facility(id)
);
-- User
CREATE TABLE IF NOT EXISTS user (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    firstname VARCHAR(255),
    name VARCHAR(255),
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    profile_type VARCHAR(50),
    address_id BIGINT,
    CONSTRAINT fk_user_address FOREIGN KEY (address_id) REFERENCES address(id)
);
create table IF NOT EXISTS event_users (
    event_id bigint not null,
    user_id bigint not null,
    primary key (event_id, user_id),
    constraint fk_event_users_event foreign key (event_id) references event (id),
    constraint fk_event_users_user foreign key (user_id) references user (id)
);
--  Interest
CREATE TABLE IF NOT EXISTS interest (
    id BIGINT NOT NULL AUTO_INCREMENT,
    category VARCHAR(50),
    min_age INT,
    max_age INT,
    PRIMARY KEY (id)
);

create table IF NOT EXISTS user_category (
    id bigint not null AUTO_INCREMENT,
    user_id bigint not null,
    category varchar(255) not null,
    primary key (id),
    foreign key (user_id) references user (id)
);

