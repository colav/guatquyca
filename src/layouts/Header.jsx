import React from "react";

/* Components */
import SearchBar from "../components/SearchBar";

/* Logos */
import logo_impactU_B from "../logos/logo_impactU_B.svg";

/* UI Library Components */
const Col = require("antd/lib/col").default;
const Layout = require("antd/lib/layout").default;
const Row = require("antd/lib/row").default;

const Header = ({ core, home, setHome }) => {
  return (
    <Layout.Header
      style={{
        width: "100%",
        padding: 0,
        position: "fixed",
        zIndex: 1,
        height: "auto",
      }}
    >
      <Row>
        <Col xs={12} sm={7} md={6}>
          <a href="/app">
            <img
              src={logo_impactU_B}
              alt="Logotipo Colav"
              className="logo-colav-header"
            />
          </a>
        </Col>
        <Col xs={24} sm={14} lg={12} xl={14}>
          {!home ? (
            <SearchBar setCurrentURL={core.setCurrentURL} setHome={setHome} />
          ) : (
            ""
          )}
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default Header;
