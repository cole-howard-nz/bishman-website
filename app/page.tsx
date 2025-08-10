import ClientShowcase from "@/components/client-showcase"
import CompanyCarousel from "@/components/logo-carousel/company-carousel"
import ProjectShowcase from "@/components/project-showcase"
import ServiceShowcase from "@/components/service-showcase"
import { clients, projects, services } from "@/lib/temp-data"

const Home = () => {
  return (
    <section className="flex flex-col">
      <CompanyCarousel />
      <ProjectShowcase header={ 'Some message to showcase these projects' } projects={ projects } />
      <ServiceShowcase header={ 'Some message to showcase these services' } services={ services } />
      <ClientShowcase header={ 'Read from our clients' } clients={ clients } />
    </section>
  )
}

export default Home