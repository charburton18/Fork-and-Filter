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
CREATE TABLE "business"(
    "id" bigserial NOT NULL,
    "businesses_id" TEXT NOT NULL,
    "businesses_name" TEXT NOT NULL,
    "businesses_rating" DECIMAL(8, 2) NOT NULL,
    "url" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "location_address1" TEXT NOT NULL,
    "location_city" TEXT NOT NULL,
    "location_state" TEXT NOT NULL,
    "location_country" TEXT NOT NULL,
    "location_zip_code" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "categories_title" TEXT NOT NULL,
    "date_created" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "date_updated" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "date_archived" TIMESTAMP(0) WITHOUT TIME ZONE NULL
);
ALTER TABLE
    "business" ADD PRIMARY KEY("id");
ALTER TABLE
    "business" ADD CONSTRAINT "business_id_foreign" FOREIGN KEY("id") REFERENCES "user"("id");