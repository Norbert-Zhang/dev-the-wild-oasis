import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://cccvrahovockajcovlmk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjY3ZyYWhvdm9ja2FqY292bG1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5ODkzNDIsImV4cCI6MjAxMTU2NTM0Mn0.4a_wrhjQtNlAXDIPzwo3bQOLxlTOqhHnwu-otDUFCE8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
