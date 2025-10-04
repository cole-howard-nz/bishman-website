import CompanyCarousel from "@/components/logo-carousel/company-carousel"
import ProjectShowcase from "@/components/project-showcase"

const Home = () => {
  return (
    <section className="flex flex-col">
      <ProjectShowcase />
      {/* <ServiceShowcase services={ services } /> */}
      <CompanyCarousel />
      {/* <ClientShowcase clients={ clients } /> */}
    </section>
  )
}

export default Home