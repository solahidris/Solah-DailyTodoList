import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fvolyzqnkqdecedifqze.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2b2x5enFua3FkZWNlZGlmcXplIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyNTIwNTAsImV4cCI6MTk5OTgyODA1MH0.MDX6b5gHzGDIv-gg5HwZeAGDCdYHXfDACnUFpaxu2mY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;