# Use the official PostgreSQL image as the base image
FROM postgres:17.5

# Copy initialization scripts and the replace_env_vars.sh script to the Docker image
# These scripts will be executed when the container starts
COPY ./sql/DB_INIT.sql /docker-entrypoint-initdb.d/
COPY ./scripts/replace_env_vars.sh /docker-entrypoint-initdb.d/

# Make the script executable
RUN chmod +x /docker-entrypoint-initdb.d/replace_env_vars.sh

# Run the replace_env_vars.sh script to replace environment variables in DB_INIT.sql
RUN /docker-entrypoint-initdb.d/replace_env_vars.sh

# Expose the default PostgreSQL port
EXPOSE 5432