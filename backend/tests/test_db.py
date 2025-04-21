import pytest
from unittest.mock import patch, MagicMock

# Patch db_pool before importing the db module
@pytest.fixture(autouse=True)
def mock_db_pool(monkeypatch):
    mock_pool = MagicMock()
    monkeypatch.setattr("db.db_pool", mock_pool)
    return mock_pool


def test_get_db_connection(mock_db_pool):
    mock_conn = MagicMock()
    mock_db_pool.getconn.return_value = mock_conn

    from utils.db import get_db_connection

    with get_db_connection() as conn:
        assert conn == mock_conn

    mock_db_pool.putconn.assert_called_once_with(mock_conn)


def test_get_db_cursor_without_commit(mock_db_pool):
    mock_conn = MagicMock()
    mock_cursor = MagicMock()
    mock_conn.cursor.return_value = mock_cursor
    mock_db_pool.getconn.return_value = mock_conn

    from utils.db import get_db_cursor

    with get_db_cursor(commit=False) as cursor:
        assert cursor == mock_cursor

    mock_conn.commit.assert_not_called()
    mock_cursor.close.assert_called_once()
    mock_db_pool.putconn.assert_called_once_with(mock_conn)


def test_get_db_cursor_with_commit(mock_db_pool):
    mock_conn = MagicMock()
    mock_cursor = MagicMock()
    mock_conn.cursor.return_value = mock_cursor
    mock_db_pool.getconn.return_value = mock_conn

    from utils.db import get_db_cursor

    with get_db_cursor(commit=True) as cursor:
        assert cursor == mock_cursor

    mock_conn.commit.assert_called_once()
    mock_cursor.close.assert_called_once()
    mock_db_pool.putconn.assert_called_once_with(mock_conn)