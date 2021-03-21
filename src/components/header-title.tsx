/** @jsx jsx */
import { Link } from "gatsby";
import { jsx } from "theme-ui";
import replaceSlashes from "../utils/replaceSlashes";
import useSiteMetadata from "../hooks/use-site-metadata";
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config";
import "../global.scss";
import React from "react";

const HeaderTitle = () => {
  const { siteTitle } = useSiteMetadata();
  const { basePath } = useMinimalBlogConfig();
  let [animate, setAnimate] = React.useState(true);

  return (
    <Link
      className={animate ? "homelink animate" : "homelink"}
      to={replaceSlashes(`/${basePath}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{ color: `heading`, textDecoration: `none` }}
      onMouseEnter={() => setAnimate(true)}
      onMouseLeave={() => setAnimate(false)}
      onAnimationEnd={() => setAnimate(false)}
    >
      <div
        sx={{ my: 0, fontWeight: `medium`, fontSize: [3, 4] }}
        style={{ display: "flex" }}
      >
        <div
          className="logo"
          style={{
            width: 60,
            height: 60,
            backgroundImage:
              "url(https://avatars.githubusercontent.com/u/3542006?s=460&u=a69f3f307bce2651dcca4f959bcc5a6c232101cd&v=4)",
            backgroundSize: "cover",
            marginRight: 16,
          }}
        ></div>
        {siteTitle}
      </div>
    </Link>
  );
};

export default HeaderTitle;
