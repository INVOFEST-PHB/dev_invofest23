import React, { Component } from "react";
import Navbars from "../../component/Navbars";
import BannerAcara from "../../component/banner/BannerAcara";
import Footer from "../../component/Footer";
import TimelineCompetition from "../../component/card/timeline/TimelineCompetition";
import TabsAcara from "../../component/acara/TabsAcara";
import Sponsor from "../../component/LandingPage/Sponsor";
import { Auth } from "../../config/firebase/firebase";

class CompetitonUiUx extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <BannerAcara
          title="UI/UX"
          user={Auth.currentUser} // Mengambil status login pengguna dari Firebase
          daftar_button="Daftar Competition"
          linkDaftar="/competition/register-competition"
          description="Kompetisi Desain UI/UX Desain antar Mahasiswa"
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
                        tanggal1="pendaftaran"
                        nameTime1="1 September - 15 Oktober 2023"
                        // 2
                        tanggal2="Pengumpulan Karya"
                        nameTime2=" 16 Oktober 2023"
                        // 3
                        tanggal3="Pengumuman Finalis"
                        nameTime3=" 19 Oktober 2023"
                        // 4
                        tanggal4="Technical Meeting Finalis"
                        nameTime4="20 Oktober 2023"
                        // 5
                        tanggal5="Presentasi Finalis"
                        nameTime5="24 Oktober 2023"
                        // 6
                        tanggal6="Pengumuman Juara"
                        nameTime6="25 Oktober 2023"
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
          SMA/SMK Sederajat dapat semakin menggali serta memacu potensi yang ada di
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
            li1="Peserta adalah siswa/siswi dari SMA/SMK Sederajat se-Indonesia yang dibuktikan dengan Kartu Tanda
          Mahasiswa atau Surat Keterangan resmi."
            li2="Peserta adalah perorangan/individu maupun tim (maksimal 3 orang)
          serta tidak dapat diwakilkan oleh orang lain."
            li3="Setiap anggota tim wajib berasal dari Sekolah yang sama."
            li4="Masing-masing tim wajib menentukan nama tim dan satu ketua tim."
            li5="Peserta lomba mendaftar dan melengkapi seluruh data yang
          diperlukan melalui formulir yang telah disediakan."
            li6="Membayar biaya pendaftaran sebesar Rp. 75.000 ke rekening BNI
          (1578789282) a.n Nurul Febi Anisa atau e-wallet Dana (081919008338)
          a.n Nurul Febi Anisa, Shopeepay (08191900338) a.n nurul_febi, dan
          OVO (081919008338) a.n Nurul Febi Anisa"
            li7="Peserta harus mengikuti seluruh rangkaian acara, prosedur, dan
          ketentuan perlombaan."
            contact="Contact"
            contact1="Abdul Muhith(+62 899-6071-414)"
            contact2="Besta (0895-1857-0693)"
            contact3="Fida (0855-4040-7654)"
          />
        </div>
        {/* <Sponsor /> */}
        <Footer />
      </div>
    );
  }
}

export default CompetitonUiUx;
