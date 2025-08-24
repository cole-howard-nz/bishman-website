import { createClient } from '@/lib/supabase/server'
import DesktopNavbar from './desktop-navbar'

const DesktopNavbarWrapper = async () => {
  const supabase = await createClient()
  const { data } = await supabase.auth.getClaims()
  const user = data?.claims

  return <DesktopNavbar user={user} />
}

export default DesktopNavbarWrapper
