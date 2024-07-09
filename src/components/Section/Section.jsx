import {Title} from "@/components";
import "./Section.css";

const Section = ({ sectionTitle, children }) => {
  return(
    <section>
      {sectionTitle !== "" && <Title
        title={sectionTitle}
        levelTitle={2}
      />}
      {children}
    </section>
  );
}

export default Section;