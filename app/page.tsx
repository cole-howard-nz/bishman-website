import ClientShowcase from "@/components/client-showcase"
import CompanyCarousel from "@/components/logo-carousel/company-carousel"
import ProjectShowcase from "@/components/project-showcase"
import ServiceShowcase from "@/components/service-showcase"
import { clients, services } from "@/lib/temp-data"

const Home = () => {
  return (
    <section className="flex flex-col">
      <ProjectShowcase />
      <ServiceShowcase services={ services } />
      <CompanyCarousel />
      {/* <ClientShowcase clients={ clients } /> */}
    </section>
  )
}

export default Home