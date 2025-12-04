-- PostgreSQL Extension Setup
-- Executed automatically on database initialization
-- Best Practice #9: Maximize Observability with Extensions

-- Enable pg_stat_statements for query performance tracking
-- This extension tracks execution statistics of all SQL statements
CREATE EXTENSION IF NOT EXISTS pg_stat_statements;

-- Enable pgcrypto for encryption functions
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Enable uuid-ossp for UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enable citext for case-insensitive text columns (useful for emails)
CREATE EXTENSION IF NOT EXISTS citext;

-- Output confirmation
DO $$
BEGIN
  RAISE NOTICE 'PostgreSQL extensions initialized successfully';
  RAISE NOTICE 'Available extensions:';
  RAISE NOTICE '  - pg_stat_statements: Query performance tracking';
  RAISE NOTICE '  - pgcrypto: Cryptographic functions';
  RAISE NOTICE '  - uuid-ossp: UUID generation';
  RAISE NOTICE '  - citext: Case-insensitive text';
END $$;
