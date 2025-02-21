
import { supabase } from "@/integrations/supabase/client";

export interface Profile {
  id: string;
  username: string;
  role: "client" | "staff";
  created_at: string;
  updated_at: string;
}

export async function getProfile(): Promise<Profile | null> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const { data: profile } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    return profile;
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
}

export async function signOut() {
  try {
    await supabase.auth.signOut();
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
}
