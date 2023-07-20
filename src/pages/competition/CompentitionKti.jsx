import React, { Component } from "react";
import Navbars from "../../component/Navbars";
import BannerAcara from "../../component/banner/BannerAcara";
import Footer from "../../component/Footer";
import TimelineCompetition from "../../component/card/timeline/TimelineCompetition";
import Sponsor from "../../component/LandingPage/Sponsor";
import TabsAcara from "../../component/acara/TabsAcara";

class CompentitionKti extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <BannerAcara 
        title="\Karya Tulis Ilmiyah"
        description="Lorem askm"
        />
        <div className="container">
        <div className="row">
          <div className="col-lg-12">
                <h1 className="text-center">Susunan Jadwal Lomba</h1>
            <div className="card timeline_jadwal mt-3">
              <div className="card-body">
                <div className="hori-timeline" dir="ltr">
                  <ul className="list-inline events">
                    <TimelineCompetition 
                    // 1
                    tanggal1="4 Oktc"
                    nameTime1="pendaftran"
                    descTime1="Ayo tunjukan skill Kalian!!"
                    // 2
                    tanggal2="4 Oktc"
                    nameTime2="pendaftran"
                    descTime2="Ayo Pertunjakn skill Kalian!!"
                    // 3
                    tanggal3="4 Oktc"
                    nameTime3="pendaftran"
                    descTime3="Ayo Pertunjakn skill Kalian!!"
                    // 4
                    tanggal4="4 Oktc"
                    nameTime4="pendaftran"
                    descTime4="Ayo Pertunjakn skill Kalian!!"
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="mt-4">
        <TabsAcara/>
        </div>
        <Sponsor/>
        <Footer />
      </div>
    );
  }
}

export default CompentitionKti;
