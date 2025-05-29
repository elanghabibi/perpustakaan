const perpustakaan = [];

function tambahBuku() {
  const judul = document.getElementById("judul").value;
  const pengarang = document.getElementById("pengarang").value;

  perpustakaan.push({
    judul: judul,
    pengarang: pengarang
  });

  console.log(perpustakaan);

  if(judul != "" && pengarang != "") {
    //   Tampilkan daftar buku
    const daftarBuku = document.getElementById("daftarBuku")
    let daftarBukuList = document.createElement("div")
    let judulBuku = document.createElement("h4")
    let pengarangBuku = document.createElement("p")

    daftarBukuList.className = "list-buku"
  
    judulBuku.textContent = judul
    pengarangBuku.textContent = pengarang
  
    daftarBukuList.appendChild(judulBuku)
    daftarBukuList.appendChild(pengarangBuku)
    daftarBuku.appendChild(daftarBukuList)
  } else {
    alert("Harap isi semua")
  }

}


function cariBuku() {
    const cari = document.getElementById("cari").value

    let hasil = perpustakaan.find(function(buku) {
        return buku.judul.toLowerCase() === cari.toLowerCase();
      });

    if(hasil) {
        let hasilCari = document.getElementById("hasilCari")

        hasilCari.textContent = `${hasil.judul} oleh ${hasil.pengarang}`
    } else {
        hasilCari.textContent = "Buku tidak ditemukan!"
    }
}
















let bookListModal = document.getElementById("bookListModal");
let addBookModal = document.getElementById("addBookModal");

function openBookList() {
  bookListModal.style.display = "flex";
  addBookModal.style.display = "none";
}

function closeBookList() {
  bookListModal.style.display = "none";
}

function openAddBook() {
  addBookModal.style.display = "flex";
  bookListModal.style.display = "none";
}

function closeAddBook() {
  addBookModal.style.display = "none";
}

let perpustakaan = [
  {
    judul: "Laskar Pelangi",
    pengarang: "Andrea Hirata",
    tahunTerbit: 2005,
    sampulBuku: "laskar-pelangi.jpg"
  },
  {
    judul: "Bumi",
    pengarang: "Tere Liye",
    tahunTerbit: 2014,
    sampulBuku: "bumi.jpg"
  },
  {
    judul: "Negeri 5 Menara",
    pengarang: "Ahmad Fuadi",
    tahunTerbit: 2009,
    sampulBuku: "negeri-5-menara.jpg"
  },
  {
    judul: "Ayat-Ayat Cinta",
    pengarang: "Habiburrahman El Shirazy",
    tahunTerbit: 2004,
    sampulBuku: "ayat-ayat-cinta.jpg"
  },
  {
    judul: "Perahu Kertas",
    pengarang: "Dee Lestari",
    tahunTerbit: 2009,
    sampulBuku: "perahu-kertas.jpg"
  },
  {
    judul: "Dilan: Dia adalah Dilanku Tahun 1990",
    pengarang: "Pidi Baiq",
    tahunTerbit: 2014,
    sampulBuku: "dilan.jpg"
  },
  {
    judul: "Ronggeng Dukuh Paruk",
    pengarang: "Ahmad Tohari",
    tahunTerbit: 1982,
    sampulBuku: "ronggeng-dukuh-paruk.jpg"
  },
  {
    judul: "Pulang",
    pengarang: "Leila S. Chudori",
    tahunTerbit: 2012,
    sampulBuku: "pulang.jpg"
  },
  {
    judul: "Critical Eleven",
    pengarang: "Ika Natassa",
    tahunTerbit: 2015,
    sampulBuku: "critical-eleven.jpg"
  },
  {
    judul: "Supernova: Ksatria, Puteri dan Bintang Jatuh",
    pengarang: "Dee Lestari",
    tahunTerbit: 2001,
    sampulBuku: "supernova.jpg"
  }
];

for (let i = 0; i < perpustakaan.length; i++) {
    let bookList = document.getElementById("bookList");
    let bookListDiv = document.createElement("div");
    bookListDiv.className = "book-list";

    let coverBookImg = document.createElement("img");

    if (coverBookInput != "") {
      coverBookImg.src = perpustakaan[i].sampulBuku;
    } else {
      coverBookImg.src =
        "https://cdn1-production-images-kly.akamaized.net/3PavQuNGh6DE4-vVpzTtRnEFu6E=/500x500/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4285636/original/092412100_1673246251-xcdd.jpg";
    }

    let titleList = document.createElement("h1");
    titleList.textContent = titleInput;

    let authorList = document.createElement("h2");
    authorList.textContent = authorInput;

    let yearPublicationlist = document.createElement("h3");
    yearPublicationlist.textContent = yearPublicationInput;

    bookListDiv.appendChild(coverBookImg);
    bookListDiv.appendChild(titleList);
    bookListDiv.appendChild(authorList);
    bookListDiv.appendChild(yearPublicationlist);
    bookList.appendChild(bookListDiv);
}


function addBook() {
  let titleInput = document.getElementById("titleInput").value;
  let authorInput = document.getElementById("authorInput").value;
  let yearPublicationInput = document.getElementById(
    "yearPublicationInput"
  ).value;
  let coverBookInput = document.getElementById("coverBookInput").value;

  if (titleInput != "" && (authorInput != "") & (yearPublicationInput != "")) {
    perpustakaan.push({
      judul: titleInput,
      pengarang: authorInput,
      tahunTerbit: yearPublicationInput,
      sampulBuku: coverBookInput
    });

    console.log(perpustakaan);
    alert("Buku berhasil ditambahkan!");

    document.getElementById("addBookForm").reset();

    let bookList = document.getElementById("bookList");
    let bookListDiv = document.createElement("div");
    bookListDiv.className = "book-list";

    let coverBookImg = document.createElement("img");

    if (coverBookInput != "") {
      coverBookImg.src = coverBookInput;
    } else {
      coverBookImg.src =
        "https://cdn1-production-images-kly.akamaized.net/3PavQuNGh6DE4-vVpzTtRnEFu6E=/500x500/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4285636/original/092412100_1673246251-xcdd.jpg";
    }

    let titleList = document.createElement("h1");
    titleList.textContent = titleInput;

    let authorList = document.createElement("h2");
    authorList.textContent = authorInput;

    let yearPublicationlist = document.createElement("h3");
    yearPublicationlist.textContent = yearPublicationInput;

    bookListDiv.appendChild(coverBookImg);
    bookListDiv.appendChild(titleList);
    bookListDiv.appendChild(authorList);
    bookListDiv.appendChild(yearPublicationlist);
    bookList.appendChild(bookListDiv);
  } else {
    alert("Tolong diisi dulu semua");
  }
}

function searchBook() {
  const searchBook = document.getElementById("searchBook").value;
  const resultSearch = perpustakaan.filter((item) => item.judul === searchBook);

  console.log(resultSearch.judul);
}