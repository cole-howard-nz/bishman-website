import AboutUsShowcase from "@/components/home-widgets/aboutus-showcase"
import CompanyCarousel from "@/components/home-widgets/logo-carousel/company-carousel"
import ProjectShowcase from "@/components/home-widgets/project-showcase"
import ServiceShowcase from "@/components/home-widgets/service-showcase"

const Home = () => {
  return (
    <section className="flex flex-col">
      <CompanyCarousel />
      <AboutUsShowcase />
      <ProjectShowcase />
      <ServiceShowcase />
      {/* <ClientShowcase clients={ clients } /> */}
    </section>
  )
}

export default Home