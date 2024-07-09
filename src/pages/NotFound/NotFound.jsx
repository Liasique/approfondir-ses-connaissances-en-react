import {Title, Paragraph} from "@/components";
import "./NotFound.css";

const NotFound = () => {
  return(
    <div>
          <Title
            title="Page not found 404"
            levelTitle={3}
          />
      <Paragraph>
        Erreur 404
          </Paragraph>
    </div>
  );
}

export default NotFound;