import { AccordionGroup, MainHeader, MainHome, TextNumber } from "@/Components"
import ITServiceSection from "@/Components/about-company/HeroSectionComponent"
import { CursoContainer } from "@/Components/home/CursoContainer"
import PricingSection from "@/Components/pricing-card/PlansComponent"

import { UXUICard } from "@/Components/UI/card/UXUICard"


const PageHome = () => {
  return (
    <main className="relative">
        <MainHeader/>
  <MainHome  className="w-[100%]  main-home  mx-auto flex flex-col gap-16">
          <ITServiceSection/>
          <CursoContainer/>
          <PricingSection/>
          <div  className="w-full p-8  bg-white">
          <div className="w-full md:w-4/5 mx-auto flex flex-col flex-col-reverse md:flex-row gap-8">
          <TextNumber/>
          <AccordionGroup/>
          </div>
          </div>

          <section className="w-[80%] mx-auto p-8">
            <UXUICard
          />
          </section>
  </MainHome>
  </main>
  )
}

export default PageHome
