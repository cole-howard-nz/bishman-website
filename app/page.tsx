import ClientShowcase from "@/components/client-showcase"
import ProjectShowcase from "@/components/project-showcase"
import ServiceShowcase from "@/components/service-showcase"
import { clients, services } from "@/lib/temp-data"

const Home = () => {
  return (
    <section className="flex flex-col">
      <ProjectShowcase />
      {/* <CompanyCarousel /> */}
      <ServiceShowcase services={ services } />
      <ClientShowcase clients={ clients } />
    </section>
  )
}

export default Home