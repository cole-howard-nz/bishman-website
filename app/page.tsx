import AboutUs from "@/components/about-us"
import CompanyCarousel from "@/components/logo-carousel/company-carousel"
import ProjectShowcase from "@/components/project-showcase"

const Home = () => {
  return (
    <section className="flex flex-col">
      <CompanyCarousel />
      {/* <AboutUs /> */}
      <ProjectShowcase />
      {/* <ServiceShowcase services={ services } /> */}
      {/* <ClientShowcase clients={ clients } /> */}
    </section>
  )
}

export default Home