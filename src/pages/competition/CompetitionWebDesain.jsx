import React, { Component } from "react";
import Navbars from "../../component/Navbars";
import BannerAcara from "../../component/banner/BannerAcara";
import Footer from "../../component/Footer";
import TimelineCompetition from "../../component/card/timeline/TimelineCompetition";
import Sponsor from "../../component/LandingPage/Sponsor";
import TabsAcara from "../../component/acara/TabsAcara";

class CompetitionWebDesain extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <BannerAcara
          linkDaftar="/competition/register-competition"
          daftar_button="Daftar Competition"
          title="Web Desain"
          description="Kompetisi Web Desain untuk SMA/SMK Sederajat"
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
                        tanggal1="Pendaftaran"
                        nameTime1="1 September 2023-15 oktober 2023"
                        descTime1="Ayo tunjukan skill Kalian!!"
                        // 2
                        tanggal2="Pengumpulan Karya"
                        nameTime2="1 September - 16 Oktober 2023"
                        descTime2="Ayo Pertunjakn skill Kalian!!"
                        // 3
                        tanggal3="Pengumuman Finalis"
                        nameTime3="19 Oktober 2023"
                        descTime3="Ayo Pertunjakn skill Kalian!!"
                        // 4
                        tanggal4="Technical Meeting Finalis"
                        nameTime4="20 Oktober 2023"
                        descTime4="Ayo Pertunjakn skill Kalian!!"
                        // 5
                        tanggal5="Presentasi Finalis"
                        nameTime5="24 Oktober 2023"
                        descTime5="Ayo Pertunjakn skill Kalian!!"
                        // 6
                        tanggal6="Pengumuman Pemenang"
                        nameTime6="25 Oktober 2023"
                        descTime6="Ayo Pertunjakn skill Kalian!!"
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
          Festival) 2023 adalah Web Design National IT Competition INVOFEST 2023 yang mana
          diharapkan melalui ajang perlombaan ini para peserta dari kalangan
          SMA/SMK Sederajat dapat semakin menggali serta memacu potensi yang ada di
          dalam diri sebagai salah satu upaya menjadi sumber daya manusia yang
          unggul di bidang ilmu pengetahuan dan teknologi. Lomba ini mengusung
          tema “Innovation and creation of the golden generation to realize a
          sustainable future."
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
            li1="Peserta adalah siswa/siswi dari SMA/SMK Sederajat se-Indonesia yang dibuktikan dengan Kartu Pelajar
            atau Surat Keterangan resmi."
            li2="Peserta adalah perorangan/individu maupun tim (maksimal 3 orang)
          serta tidak dapat diwakilkan oleh orang lain."
            li3="Setiap anggota tim wajib berasal dari Sekolah yang sama."
            li4="Masing-masing tim wajib menentukan nama tim dan satu ketua tim."
            li5="Peserta lomba mendaftar dan melengkapi seluruh data yang
          diperlukan melalui formulir yang telah disediakan."
            li6="Membayar biaya pendaftaran sebesar Rp. 50.000 ke rekening BNI
          (1578789282) a.n Nurul Febi Anisa atau e-wallet Dana (081919008338)
          a.n Nurul Febi Anisa, Shopeepay (08191900338) a.n nurul_febi, dan
          OVO (081919008338) a.n Nurul Febi Anisa"
            li7="Peserta harus mengikuti seluruh rangkaian acara, prosedur, dan
          ketentuan perlombaan."
            contact="Contact"
            contact1="Abdul Muhith(+62 899-6071-414)"
            contact2="Fida (0855-4040-7654)"
            contact3="Besta (0895-1857-0693)"
            guidebook="https://bit.ly/GuideBook-Invofest2023"
            titleTabsLomba="Guide Book"
          />
        </div>
        {/* <Sponsor /> */}
        <Footer />
      </div>
    );
  }
}

export default CompetitionWebDesain;
