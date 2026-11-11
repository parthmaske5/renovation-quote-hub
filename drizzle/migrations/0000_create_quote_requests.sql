CREATE TABLE public.quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 9 AND 20),
  job_type text NOT NULL CHECK (job_type IN ('small_job','home_renovation','shop_renovation','not_sure')),
  area text NOT NULL CHECK (char_length(area) BETWEEN 1 AND 100),
  property_type text NOT NULL CHECK (char_length(property_type) BETWEEN 1 AND 60),
  timing text NOT NULL CHECK (char_length(timing) BETWEEN 1 AND 60),
  description text NOT NULL CHECK (char_length(description) BETWEEN 10 AND 2000),
  budget_range text CHECK (budget_range IS NULL OR char_length(budget_range) <= 60),
  photo_paths text[] NOT NULL DEFAULT '{}',
  status text NOT NULL DEFAULT 'new'
);

GRANT ALL ON public.quote_requests TO service_role;

ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;
-- No anon/authenticated policies: submissions are inserted only by server code after validation.

CREATE POLICY "Visitors can upload quote photos"
ON storage.objects
FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'quote-photos' AND (storage.foldername(name))[1] = 'uploads');