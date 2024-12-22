import { useNavigate } from "react-router";
import { Button } from "../uikit/Button/Button";

function Errorpage() {
  const navigate = useNavigate();

  const backToHomepage = () => {
    return navigate(`/`);
  };
  return (
    <>
      <section className="error-page-container">
        <h2 className="error-header-message">404</h2>
        <p className="error-message-1">Page not found</p>
        <p className="error-message-2">
          The page you are looking for doesnt exist. <br /> Click the button
          bellow to get back to the main menu
        </p>
        <Button text={"Back"} onClick={backToHomepage} />
      </section>
    </>
  );
}

export { Errorpage };
