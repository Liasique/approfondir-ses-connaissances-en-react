import {Title, Paragraph} from "@/components";
import "./NotFound.css";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  return(
    <div>
          <Title
            title="Page not found 404"
            levelTitle={2}
          />
      <Paragraph>
        La ressource demandée est introuvable...
      </Paragraph>
    
      {error?.statusText || error?.message && (<Paragraph><small>{`Èrreur: ${error?.statusText || error?.message}`} </small></Paragraph>)}

    </div>
  );
}

export default NotFound;


