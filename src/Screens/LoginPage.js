import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

// core components
import NavBar from "../components/Navbar";
import TransparentFooter from "../components/Footers/TransparentFooter";
import NavBarlog from "../components/Navbarlog";

function LoginPage() {
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passFocus, setPasswordFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <NavBarlog />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(login.jpg)",
          }}
        ></div>
        <div className="content" style={{ margin: "6em" }}>
          <Container>
            <Row>
              {/* <Card className="card-signup" background-color="transparent"> */}
              <Form className="card-signup form" action="" method="">
                <CardHeader
                  className="text-center"
                  background-color="transparent"
                >
                  <CardTitle>
                    <h1 style={{ color: "white" }}>Login</h1>
                  </CardTitle>
                </CardHeader>
                <CardBody background-color="transparent">
                  <InputGroup
                    className={
                      "no-border" + (emailFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email..."
                      type="text"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border" + (passFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_lock-circle-open"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password..."
                      type="password"
                      onFocus={() => setPasswordFocus(true)}
                      onBlur={() => setPasswordFocus(false)}
                    ></Input>
                  </InputGroup>

                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Sign in
                  </Button>
                </CardBody>

                <div className="pull-center">
                  <h6 style={{ color: "white" }}>
                    <a
                      className="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Create account
                    </a>
                  </h6>
                </div>
              </Form>
              {/* </Card> */}
            </Row>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default LoginPage;
