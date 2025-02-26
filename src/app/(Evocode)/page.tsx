import { MainHeader, MainHome } from "@/Components"
import { CursoContainer } from "@/Components/home/CursoContainer"


const PageHome = () => {
  return (
    <main className="relative">
        <MainHeader/>
  <MainHome  className="w-[100%]  main-home  mx-auto flex flex-col gap-16">
          <CursoContainer/>
  </MainHome>
  </main>
  )
}

export default PageHome
