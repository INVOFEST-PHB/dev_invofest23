import React, { Component } from 'react';
import Navbars from '../../component/Navbars';
import BannerAcara from '../../component/banner/BannerAcara';
import Footer from '../../component/Footer';
import TimelineCompetition from '../../component/card/timeline/TimelineCompetition';
import TabsAcara from '../../component/acara/TabsAcara';
import Sponsor from '../../component/LandingPage/Sponsor';

class CompentitionVideo extends Component {
    render() {
        return (
          <div>
            <Navbars />
            <BannerAcara
            daftar_button="Daftar Competition"
            linkDaftar="/competition/register-competition"
              title="Video Kreatif"
              description="Kompetisi Video Kreatif khusus untuk Mahasiswa Politeknik Harapan Bersama"
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
              <TabsAcara
                tabsDeskripsi1="Salah satu perlombaan dalam kegiatan Invofest (Infomatics Vocational
          Festival) 2023 adalah National UI UX Design Competition yang mana
          diharapkan melalui ajang perlombaan ini para peserta dari kalangan
          mahasiswa/i dapat semakin menggali serta memacu potensi yang ada di
          dalam diri sebagai salah satu upaya menjadi sumber daya manusia yang
          unggul di bidang ilmu pengetahuan dan teknologi. Lomba ini mengusung
          tema “Innovation and creation of the golden generation to realize a
          sustainable futur."
                tabsDeskripsi2="Tema ini bertujuan mengajak generasi muda untuk mengembangkan
          inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi
          luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.
          Melalui pendekatan ini, diharapkan generasi ini akan berperan dalam
          menciptakan solusi-solusi baru untuk tantangan masa kini dan
          mendatang, baik dalam hal teknologi, lingkungan, pendidikan, maupun
          tanggung jawab sosial. Kesadaran akan dampak jangka panjang serta
          kolaborasi lintas generasi dan sektor menjadi kunci dalam mewujudkan
          tujuan tersebut."
                titleTabs="Persyaratan"
                li1="Peserta adalah mahasiswa/i aktif Politeknik Harapan Bersama yang dibuktikan dengan Kartu Tanda
          Mahasiswa atau Surat Keterangan resmi."
                li2="Peserta adalah perorangan/individu maupun tim (maksimal 3 orang)
          serta tidak dapat diwakilkan oleh orang lain."
                li3="Masing-masing tim wajib menentukan nama tim dan satu ketua tim."
                li4="Peserta lomba mendaftar dan melengkapi seluruh data yang
          diperlukan melalui formulir yang telah disediakan."
                li5="Membayar biaya pendaftaran sebesar Rp. 75.000 ke rekening BNI
          (1578789282) a.n Nurul Febi Anisa atau e-wallet Dana (081919008338)
          a.n Nurul Febi Anisa, Shopeepay (08191900338) a.n nurul_febi, dan
          OVO (081919008338) a.n Nurul Febi Anisa"
                li6="Peserta harus mengikuti seluruh rangkaian acara, prosedur, dan
          ketentuan perlombaan."
              />
            </div>
            <Sponsor />
            <Footer />
          </div>
        );
    }
}

export default CompentitionVideo;