/* Next */
import Link from "next/link";
import Image from "next/image";

import SearchBar from "../../ClientSide/SearchBar/SearchBar";

/* Styles */
import styles from "./styles.module.css";

/* UI Library Components */
import { Col, Layout, Row } from "antd";

/* UI Library Sub-components */
const Header = Layout;

/**
 * Head is a "server-side" function component that displays a header.
 * It contains the logo and the search bar, it's used in all pages except the home page.
 *
 * @returns {JSX.Element} A header component.
 */
export default function HeadSearch() {
  return (
    <Header id={styles.header}>
      <Row align={"middle"} justify={"center"}>
        <Col xs={24} sm={24} md={9} lg={8} xl={6} id={styles.logo_container}>
          <Link href="/">
            <Image
              priority={true}
              src={"/media/logo_impactU_B.svg"}
              alt="Logotipo ImpactU"
              width={300}
              height={80}
              id={styles.logo}
            />
          </Link>
        </Col>
        <Col xs={24} sm={24} md={15} lg={12} id={styles.searchbar}>
          <SearchBar />
        </Col>
        <Col xs={0} lg={4} xl={6} />
      </Row>
    </Header>
  );
}