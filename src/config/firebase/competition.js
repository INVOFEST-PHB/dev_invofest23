import { Database } from "firebase/database"

export const addUiUxAPI = (data)=> (dispatch) =>{
    Database.ref('lombaUiUx/'+data.userId).set({
        email: data.email,
        namaTeam: data.namaTeam,
        namaKetuaTeam: data.namaKetuaTeam,
        namaAnggota1: data.namaAnggota1,
        namaAnggota2: data.namaAnggota2,
        asalPerguruanTinggi: data.asalPerguruanTinggi,
        kartuTandaMahasiswa: data.kartuTandaMahasiswa,
        noWhatsAppKetua: data.noWhatsAppKetua,
        linkUploadTwibbon: data.linkUploadTwibbon,
    })
  }