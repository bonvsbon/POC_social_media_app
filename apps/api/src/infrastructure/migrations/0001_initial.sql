CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT,
  auth_provider TEXT NOT NULL DEFAULT 'password',
  status TEXT NOT NULL DEFAULT 'active',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE user_profiles (
  user_id UUID PRIMARY KEY REFERENCES users(id),
  handle TEXT UNIQUE NOT NULL,
  display_name TEXT,
  bio TEXT,
  country_code TEXT,
  language_code TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE creators (
  user_id UUID PRIMARY KEY REFERENCES users(id),
  trust_score NUMERIC(5,2) NOT NULL DEFAULT 0,
  violation_score NUMERIC(5,2) NOT NULL DEFAULT 0,
  kyc_status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE videos (
  id UUID PRIMARY KEY,
  creator_user_id UUID NOT NULL REFERENCES users(id),
  caption TEXT,
  visibility TEXT NOT NULL,
  processing_status TEXT NOT NULL DEFAULT 'pending',
  moderation_state TEXT NOT NULL DEFAULT 'pending',
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE likes (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id),
  video_id UUID NOT NULL REFERENCES videos(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (user_id, video_id)
);

CREATE TABLE follows (
  id UUID PRIMARY KEY,
  follower_user_id UUID NOT NULL REFERENCES users(id),
  following_user_id UUID NOT NULL REFERENCES users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (follower_user_id, following_user_id)
);

CREATE TABLE fee_rules (
  id UUID PRIMARY KEY,
  product_type TEXT NOT NULL,
  country_code TEXT,
  creator_tier TEXT,
  platform_fee_bps INTEGER NOT NULL,
  gateway_fee_bps INTEGER NOT NULL,
  tax_bps INTEGER NOT NULL,
  effective_from TIMESTAMPTZ NOT NULL,
  effective_to TIMESTAMPTZ
);
