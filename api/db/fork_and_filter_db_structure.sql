CREATE TABLE "user"(
    "id" bigserial NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "date_created" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "date_updated" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "date_archived" TIMESTAMP(0) WITHOUT TIME ZONE NULL
);
ALTER TABLE
    "user" ADD PRIMARY KEY("id");
ALTER TABLE
    "user" ADD CONSTRAINT "user_email_unique" UNIQUE("email");
ALTER TABLE
    "user" ADD CONSTRAINT "user_username_unique" UNIQUE("username");
CREATE TABLE "place"(
    "id" bigserial NOT NULL,
    "place_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rating" DECIMAL(8, 2) NOT NULL,
    "url" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "categories" TEXT NOT NULL,
    "date_created" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "date_updated" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "date_archived" TIMESTAMP(0) WITHOUT TIME ZONE NULL
);
ALTER TABLE
    "place" ADD PRIMARY KEY("id");
CREATE TABLE "user_place"(
    "user_id" BIGINT NOT NULL,
    "place_id" BIGINT NOT NULL
);
ALTER TABLE
    "user_place" ADD PRIMARY KEY("user_id");
ALTER TABLE
    "user_place" ADD CONSTRAINT "user_place_place_id_foreign" FOREIGN KEY("place_id") REFERENCES "place"("id");
ALTER TABLE
    "user_place" ADD CONSTRAINT "user_place_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "user"("id");