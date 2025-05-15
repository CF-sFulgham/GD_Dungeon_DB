#!/bin/bash

# Ensure the required environment variables are set
if [[ -z "$POSTGRES_DB" || -z "$POSTGRES_PASSWORD" ]]; then
  echo "Error: POSTGRES_DB and POSTGRES_PASSWORD environment variables must be set."
  exit 1
fi

# Path to the SQL file
SQL_FILE="../sql/DB_INIT.sql"

# Backup the original SQL file
cp "$SQL_FILE" "${SQL_FILE}.bak"

# Replace environment variables in the SQL file
sed -i '' "s/\${POSTGRES_DB}/$POSTGRES_DB/g" "$SQL_FILE"
sed -i '' "s/\${POSTGRES_PASSWORD}/$POSTGRES_PASSWORD/g" "$SQL_FILE"

echo "Environment variables replaced successfully in $SQL_FILE."