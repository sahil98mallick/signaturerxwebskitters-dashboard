import { Box } from "@mui/material";
import Footer from "Layout/Footer/Footer";
import HeaderPage from "Layout/Header/Header";
import Seo from "components/Seo/Seo";
// import Header from 'Layout/Header/Header'
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { WrapperStyle } from "styles/StyledComponents/WrapperStyle";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
  defaultHeader?: boolean;
}

/**
 * The Wrapper component is a TypeScript React component that sets up the layout for the application,
 * including navigation, SEO, header, main body, and footer.
 * @param {WrapperProps}  - - `WrapperProps`: The type definition for the props passed to the `Wrapper`
 * component.
 * @returns JSX elements wrapped in a WrapperStyle component. The returned JSX includes a Seo
 * component, a HeaderPage component, a Box component with the className "main_body" that wraps the
 * children, and a Footer component.
 */
export default function Wrapper({ children ,defaultHeader=false}: WrapperProps) {
  const navigate = useNavigate();

  useEffect(() => {
    if (window?.location?.pathname === "/") {
      navigate("/dashboard/branch/");
    }
  }, [navigate]);

  const routerText = window.location.pathname.split("");

  routerText.shift();
  const favText = routerText.join("").toString();
  const projectName = "Signature RX";

  return (
    <WrapperStyle>
      <Seo
        title={
          window.location.pathname === "/dashboard/branch/"
            ? `${projectName}`
            : `${projectName} || ${favText}`
        }
      />
      <HeaderPage defaultHeader={defaultHeader}/>
      <Box className="main_body">{children}</Box>

      <Footer />
    </WrapperStyle>
  );
}
