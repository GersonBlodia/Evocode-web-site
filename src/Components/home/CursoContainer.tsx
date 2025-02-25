import { SaveButton } from "../UI/button/SaveButton";
import { AccessInfoCard } from "../UI/card/AccessInfoCard";
import { ConsentOptions } from "./ConsentOptions";
import { ContextCurso } from "./ContextCurso";
import { WelcomeSection } from "./WelcomeSection";

export const CursoContainer = () => {
  return (
    <ContextCurso className={" mx-auto flex justify-between p-8 max-w-6xl  "}>
      <div className="w-1/2 pr-8">
        <WelcomeSection />
        <ConsentOptions />
        <SaveButton />
      </div>
      {/*Diseño de card a la derecha */}
      <div className="w-1/2">
        <AccessInfoCard />
      </div>
    </ContextCurso>
  );
};
