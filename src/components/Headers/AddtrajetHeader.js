import React from "react";
import Datetime from "react-datetime";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
} from "reactstrap";

// core components

function AddTrajetHeader() {
  let pageHeader = React.createRef();
  const [fromFocus, setFromFocus] = React.useState(false);
  const [toFocus, settoFocus] = React.useState(false);
  const [DateFocus, setDateFocus] = React.useState(false);
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header clear-filter " filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(bg69.jpg)",
          }}
          ref={pageHeader}
        ></div>
        <Container className="text-center">
          <div style={{ marginTop: "6em" }}>
            <h1 style={{ color: "white" }}>Publier un trajet</h1>
            <div style={{ width: "9cm", marginLeft: "27em" }}>
              <InputGroup
                className={
                  "no-border" + (fromFocus ? " input-group-focus" : "")
                }
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText></InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Départ"
                  type="text"
                  onFocus={() => setFromFocus(true)}
                  onBlur={() => setFromFocus(false)}
                ></Input>
              </InputGroup>
              <InputGroup
                className={
                  "no-border" + (fromFocus ? " input-group-focus" : "")
                }
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText></InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Destination"
                  type="text"
                  onFocus={() => setFromFocus(true)}
                  onBlur={() => setFromFocus(false)}
                ></Input>
              </InputGroup>
              <InputGroup
                className={
                  "no-border" + (fromFocus ? " input-group-focus" : "")
                }
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText></InputGroupText>
                </InputGroupAddon>

                <Datetime
                  inputProps={{ placeholder: "Datetime Picker Here" }}
                />
              </InputGroup>
              <Button className="btn-round content-left" color="white" outline>
                Publier
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default AddTrajetHeader;
