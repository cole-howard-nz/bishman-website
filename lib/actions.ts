"use server";
import { redirect } from "next/navigation";
import { createClient } from "./supabase/server";


export const signup = async (email: string, password: string) => {
  console.log('hello')
  const supabase = await createClient()
  try {
    const { error } = await supabase.auth.signUp({
      email,
      password
    })
    if (error) throw error
    redirect("/login")
  } catch (error: unknown) {
  } finally {}
    
  return
}

export const login = async (email: string, password: string) => {
  const supabase = await createClient()
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) throw error
  } catch (error: unknown) {
  } finally {}

  return
}