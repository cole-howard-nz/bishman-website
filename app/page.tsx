import ProjectShowcase from "@/components/project-showcase"
import { projects } from "@/lib/temp-data"

const Home = () => {
  return (
    <section>
      <ProjectShowcase header={ 'Some message to showcase these projects' } projects={ projects } />
    </section>
  )
}

export default Home