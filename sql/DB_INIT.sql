-- Drop connections and the database if it exists
DO
$$
BEGIN
    IF EXISTS (
        SELECT FROM pg_database
        WHERE datname = '${POSTGRES_DB}'
        ) THEN
        PERFORM pg_terminate_backend(pid)
        FROM pg_stat_activity
        WHERE datname = '${POSTGRES_DB}';

        EXECUTE 'DROP DATABASE ${POSTGRES_DB}';
    END IF;
END
$$;

CREATE DATABASE ${POSTGRES_DB};
ALTER DATABASE ${POSTGRES_DB} OWNER TO postgres;
ALTER USER postgres WITH PASSWORD '${POSTGRES_PASSWORD}';
-- Connect to the new database
\c ${POSTGRES_DB}