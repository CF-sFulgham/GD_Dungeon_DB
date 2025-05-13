import * as dotenv from "dotenv";
dotenv.config();

export const __prod__ = process.env.NODE_ENV === "production";
export const POSTGRES_USER = process.env.POSTGRES_USER || '';
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || '';
export const POSTGRES_DB = process.env.POSTGRES_DB || '';
export const POSTGRES_DATABASE = process.env.POSTGRES_DATABASE || '';