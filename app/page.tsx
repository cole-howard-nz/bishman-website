import ClientShowcase from "@/components/client-showcase"
import CompanyCarousel from "@/components/logo-carousel/company-carousel"
import ProjectShowcase from "@/components/project-showcase"
import ServiceShowcase from "@/components/service-showcase"
import { clients, projects, services } from "@/lib/temp-data"

const Home = () => {
  return (
    <section className="flex flex-col">
      <ProjectShowcase header={ 'PROJECTS' } projects={ projects } />
      {/* <CompanyCarousel /> */}
      <ServiceShowcase services={ services } />
      <ClientShowcase clients={ clients } />
    </section>
  )
}

export default Home