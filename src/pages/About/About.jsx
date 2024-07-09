import {Section, Article, Title, Paragraph} from "@/components";
import "./About.css";

const About = () => {
  return(
    <Section sectionTitle="À propos de l'application">
      <Article>
        <Title
          title="Développeur de l'application"
          levelTitle={3}
        />
        <Paragraph>
          Nom du développeur : Olga LUKIANETS.
        </Paragraph>
        <Paragraph>
          Gérant de {"l'entreprise"} Webdevoo depuis Mars 2019 et de {"l'organisme"} de Webdevoo Formation depuis Juin 2023.
        </Paragraph>
        <Paragraph>
          Spécialités (liste non exhaustive) : <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" alt="PHP" title="PHP" style={{ width: 20, height: 20, marginRight: 5 }} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML" title="HTML" style={{ width: 20, height: 20, marginRight: 5 }} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS" title="CSS" style={{ width: 20, height: 20, marginRight: 5 }} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" title="JavaScript" style={{ width: 20, height: 20, marginRight: 5 }} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" title="React" style={{ width: 20, height: 20, marginRight: 5 }} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" alt="Angular" title="Angular" style={{ width: 20, height: 20, marginRight: 5 }} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Native" title="React Native" style={{ width: 20, height: 20, marginRight: 5 }} />
          <img src="https://avatars.githubusercontent.com/u/79226042?v=4" alt="SolidJS" title="SolidJS" style={{ width: 20, height: 20, marginRight: 5 }} />
          <img src="https://remix.run/favicon-light.1.png" alt="Remix" title="Remix" style={{ width: 20, height: 20, marginRight: 5 }} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg" alt="Lua" title="Lua" style={{ width: 20, height: 20, marginRight: 5 }} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" title="Python" style={{ width: 20, height: 20, marginRight: 5 }} /> ...
        </Paragraph>
      </Article>

      <Article>
        <Title
          title="Technologies utilisées"
          levelTitle={3}
        />
        <Paragraph>
          Cette application a été développée en <img src="../../assets/react.svg" ></img> React (version 18.2).
        </Paragraph>
        <Paragraph>
          Le routage est géré par la librairie  <img src="https://www.svgrepo.com/show/354262/react-router.svg" width={25}></img>React Router .
        </Paragraph>
        <Paragraph>
          Aucune librairie UI {"n'a"} été implémentée sur {"l'application"}.
        </Paragraph>
      </Article>
    </Section>
  );
}

export default About;


