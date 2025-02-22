
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xhseujqwwykayedrbwds.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhoc2V1anF3d3lrYXllZHJid2RzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4ODExNDksImV4cCI6MjAyNjQ1NzE0OX0.BXt5nQAQnjbz8vTXuzvbhO8Yp0CZ0mb0X8aonm8YCng';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
