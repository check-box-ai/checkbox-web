import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div className="layout h-full">
    {props.children}{" "}
    <style jsx global>
      {`
        html {
          box-sizing: border-box;
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
        body {
          height: 100vh;
          margin: 0;
          padding: 0;
          font-size: 16px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
          background: rgba(0, 0, 0, 0.05);
        }
        input,
        textarea {
          font-size: 16px;
        }
        button {
          cursor: pointer;
        }
      `}
    </style>
    <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        height: 100%;
      }
      .layout {
        padding: 0 2rem;
      }
    `}</style>
  </div>
);

export default Layout;
