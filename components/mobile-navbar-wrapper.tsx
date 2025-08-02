import { createClient } from '@/lib/supabase/server'
import MobileNavbar from './mobile-navbar'

const MobileNavbarWrapper = async () => {
  const supabase = await createClient()
  const { data } = await supabase.auth.getClaims()
  const user = data?.claims

  return <MobileNavbar user={user} />
}

export default MobileNavbarWrapper
