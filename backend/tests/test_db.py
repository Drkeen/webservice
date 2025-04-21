import pytest
from unittest.mock import patch, MagicMock

@pytest.fixture(autouse=True)
def mock_simple_connection_pool(monkeypatch):
    mock_pool = MagicMock()
    
    # Patch psycopg2's SimpleConnectionPool BEFORE db_pool is created
    patcher = patch('psycopg2.pool.SimpleConnectionPool', return_value=mock_pool)
    patcher.start()
    monkeypatch.setattr('utils.db.db_pool', mock_pool)  # Patch your module's instance too
    yield mock_pool
    patcher.stop()

def test_get_db_connection(mock_simple_connection_pool):
    mock_conn = MagicMock()
    mock_simple_connection_pool.getconn.return_value = mock_conn

    from utils.db import get_db_connection

    with get_db_connection() as conn:
        assert conn == mock_conn

    mock_simple_connection_pool.putconn.assert_called_once_with(mock_conn)


def test_get_db_cursor_without_commit(mock_simple_connection_pool):
    mock_conn = MagicMock()
    mock_cursor = MagicMock()
    mock_conn.cursor.return_value = mock_cursor
    mock_simple_connection_pool.getconn.return_value = mock_conn

    from utils.db import get_db_cursor

    with get_db_cursor(commit=False) as cursor:
        assert cursor == mock_cursor

    mock_conn.commit.assert_not_called()
    mock_cursor.close.assert_called_once()
    mock_simple_connection_pool.putconn.assert_called_once_with(mock_conn)


def test_get_db_cursor_with_commit(mock_simple_connection_pool):
    mock_conn = MagicMock()
    mock_cursor = MagicMock()
    mock_conn.cursor.return_value = mock_cursor
    mock_simple_connection_pool.getconn.return_value = mock_conn

    from utils.db import get_db_cursor

    with get_db_cursor(commit=True) as cursor:
        assert cursor == mock_cursor

    mock_conn.commit.assert_called_once()
    mock_cursor.close.assert_called_once()
    mock_simple_connection_pool.putconn.assert_called_once_with(mock_conn)