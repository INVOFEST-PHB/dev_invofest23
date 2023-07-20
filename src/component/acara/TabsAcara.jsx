import React, { Component } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
// import "../../assets/css/card/tabs.css"

class TabsAcara extends Component {
  render() {
    const Demo1 = () => {
    return "Tab 1 using component to render tab instance";
    };
    const Demo2 = () => {
    return "Tab 2 using component to render tab instance";
    };
    const Demo3 = () => {
    return "Tab 3 using component to render tab instance";
    };
    
    
    return (
        <Container>
        <Tabs justify className="tabs mb-3">
        <Tab className="subtabs" eventKey="Deskripsi" title="Deskripsi">
        <Demo1 />
        </Tab>
        <Tab className="subtabs" eventKey="Persiapan" title="Persiapan">
        <Demo2 />
        </Tab>
        <Tab className="subtabs" eventKey="contact" title="Contact">
        <Demo3 />
        </Tab>
      </Tabs>
      </Container>
    );
  }
}

export default TabsAcara;
