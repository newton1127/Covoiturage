import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import NavBar from "../components/Navbar";
import ProfilePageHeader from "../components/Headers/ProfilePageHeader";
import DefaultFooter from "../components/Footers/DefaultFooter";
import ResultHeader from "../components/Headers/resultHeader";
import trajets from "../components/trajets";
function TrajetList() {
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <ResultHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <trajets />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default TrajetList;
