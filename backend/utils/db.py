import psycopg2
from psycopg2 import pool
import os
from contextlib import contextmanager
from dotenv import load_dotenv

load_dotenv()

# Create a connection pool when the module is imported
db_pool = psycopg2.pool.SimpleConnectionPool(
    minconn=1,
    maxconn=10,
    database=os.getenv("DB_NAME"),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASSWORD"),
    host=os.getenv("DB_HOST"),
    port=os.getenv("DB_PORT")
)

@contextmanager
def get_db_connection():
    """Context manager for database connections from the pool."""
    conn = None
    try:
        conn = db_pool.getconn()
        yield conn
    finally:
        if conn is not None:
            db_pool.putconn(conn)

@contextmanager
def get_db_cursor(commit=False):
    """Context manager for database cursors."""
    with get_db_connection() as connection:
        cursor = connection.cursor()
        try:
            yield cursor
            if commit:
                connection.commit()
        finally:
            cursor.close()