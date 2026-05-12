-- Enable pg_trgm extension for fuzzy text search
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- GIN trigram indexes for fast ILIKE/substring searches on name columns
CREATE INDEX CONCURRENTLY IF NOT EXISTS "customer_name_gin_idx" ON "customers" USING gin ("name" gin_trgm_ops);
CREATE INDEX CONCURRENTLY IF NOT EXISTS "product_name_gin_idx" ON "products" USING gin ("name" gin_trgm_ops);
CREATE INDEX CONCURRENTLY IF NOT EXISTS "part_name_gin_idx" ON "parts" USING gin ("name" gin_trgm_ops);
