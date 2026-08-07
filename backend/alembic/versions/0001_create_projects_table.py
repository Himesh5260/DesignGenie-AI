"""create projects table

Revision ID: 0001_create_projects_table
Revises: 
Create Date: 2026-08-07 00:00:00.000000
"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '0001_create_projects_table'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'projects',
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('room_type', sa.String(), nullable=True),
        sa.Column('style', sa.String(), nullable=True),
        sa.Column('preferences', sa.String(), nullable=True),
        sa.Column('image_path', sa.String(), nullable=True),
        sa.Column('recommendation', postgresql.JSON(), nullable=True),
        sa.Column('created_at', sa.DateTime(), server_default=sa.func.now(), nullable=True),
    )


def downgrade():
    op.drop_table('projects')
