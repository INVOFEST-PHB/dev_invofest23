import React, { useEffect, Component } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
// import "../../assets/css/card/tabs.css"
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

class TabsAcara extends Component {
  render() {

    // useEffect(() => {
    //   AOS.init();
    // }, []);
    
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
        {/* <Demo1 /> */}
        <p className="blockquote">{this.props.tabsDeskripsi1}
        <br /><br />{this.props.tabsDeskripsi2}</p>

        </Tab>
        <Tab className="subtabs" eventKey="Persiapan" title={ this.props.titleTabs}>
        <ol>
        <p className="blockquote"><li className="ms-2">{this.props.li1}</li></p>
        <p className="blockquote"><li className="ms-2">{this.props.li2}</li></p>
        <p className="blockquote"><li className="ms-2">{this.props.li3}</li></p>
        <p className="blockquote"><li className="ms-2">{this.props.li4}</li></p>
        <p className="blockquote"><li className="ms-2">{this.props.li5}</li></p>
        <p className="blockquote"><li className="ms-2">{this.props.li6}</li></p>
        <p className="blockquote"><li className="ms-2">{this.props.li7}</li></p>
        </ol>
        </Tab>
        <Tab className="subtabs" eventKey="contact" title="Contact">
        <p className="blockquote">{this.props.contact1}
        <br /><br />{this.props.contact2}</p>
        {/* <Demo3 /> */}
        </Tab>
      </Tabs>
      </Container>
    );
  }
}

export default TabsAcara;
