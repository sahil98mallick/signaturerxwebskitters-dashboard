import { Helmet, HelmetProps } from "react-helmet";
const Seo = (props: HelmetProps) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{props.title}</title>
    </Helmet>
  );
};

export default Seo;
