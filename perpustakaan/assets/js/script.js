const bookListModal = document.getElementById("bookListModal");
const addBookModal = document.getElementById("addBookModal");

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
    sampulBuku: "https://dummyimage.com/18:25x1080"
  },
  {
    judul: "Bumi",
    pengarang: "Tere Liye",
    tahunTerbit: 2014,
    sampulBuku: "https://dummyimage.com/18:25x1080"
  },
  {
    judul: "Negeri 5 Menara",
    pengarang: "Ahmad Fuadi",
    tahunTerbit: 2009,
    sampulBuku: "https://dummyimage.com/18:25x1080"
  },
  {
    judul: "Ayat-Ayat Cinta",
    pengarang: "Habiburrahman El Shirazy",
    tahunTerbit: 2004,
    sampulBuku: "https://dummyimage.com/18:25x1080"
  },
  {
    judul: "Perahu Kertas",
    pengarang: "Dee Lestari",
    tahunTerbit: 2009,
    sampulBuku: "https://dummyimage.com/18:25x1080"
  },
  {
    judul: "Dilan: Dia adalah Dilanku Tahun 1990",
    pengarang: "Pidi Baiq",
    tahunTerbit: 2014,
    sampulBuku: "https://dummyimage.com/18:25x1080"
  },
  {
    judul: "Ronggeng Dukuh Paruk",
    pengarang: "Ahmad Tohari",
    tahunTerbit: 1982,
    sampulBuku: "https://dummyimage.com/18:25x1080"
  },
  {
    judul: "Pulang",
    pengarang: "Leila S. Chudori",
    tahunTerbit: 2012,
    sampulBuku: "https://dummyimage.com/18:25x1080"
  },
  {
    judul: "Critical Eleven",
    pengarang: "Ika Natassa",
    tahunTerbit: 2015,
    sampulBuku: "https://dummyimage.com/18:25x1080"
  },
  {
    judul: "Supernova: Ksatria, Puteri dan Bintang Jatuh",
    pengarang: "Dee Lestari",
    tahunTerbit: 2001,
    sampulBuku: "https://dummyimage.com/18:25x1080"
  }
];

function addBook() {
  let titleInput = document.getElementById("titleInput").value;
  let authorInput = document.getElementById("authorInput").value;
  let yearPublicationInput = document.getElementById(
    "yearPublicationInput"
  ).value;
  let coverBookInput = document.getElementById("coverBookInput").value;

  if (titleInput != "" && authorInput != "" && yearPublicationInput != "") {
    perpustakaan.push({
      judul: titleInput,
      pengarang: authorInput,
      tahunTerbit: yearPublicationInput,
      sampulBuku:
        coverBookInput === ""
          ? "https://dummyimage.com/18:25x1080"
          : coverBookInput
    });

    console.log(perpustakaan);
    alert("Buku berhasil ditambahkan!");

    document.getElementById("addBookForm").reset();

    renderBookList();
  } else {
    alert("Tolong diisi dulu semua");
  }
}

function renderBookList() {
  let bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  for (let i = 0; i < perpustakaan.length; i++) {
    let bookListDiv = document.createElement("div");
    bookListDiv.className = "book-list";

    let coverBookImg = document.createElement("img");
    coverBookImg.src = perpustakaan[i].sampulBuku;

    let titleList = document.createElement("h1");
    titleList.textContent = perpustakaan[i].judul;

    let authorList = document.createElement("h2");
    authorList.textContent = perpustakaan[i].pengarang;

    let yearPublicationlist = document.createElement("h3");
    yearPublicationlist.textContent = perpustakaan[i].tahunTerbit;

    bookListDiv.appendChild(coverBookImg);
    bookListDiv.appendChild(titleList);
    bookListDiv.appendChild(authorList);
    bookListDiv.appendChild(yearPublicationlist);
    bookList.appendChild(bookListDiv);
  }
}

function searchBook() {
  const searchInput = document.getElementById("searchBook").value.toLowerCase();

  const resultSearchModal = document.getElementById("resultSearchModal");

  let resultSearchDiv = document.getElementById("resultSearch");

  if (searchInput == "") {
    resultSearchDiv.innerHTML = "";
    alert("Pencarian kosong!");
  } else {
    resultSearchDiv.innerHTML = "";
    resultSearchModal.style.display = "flex";

    const resultSearch = perpustakaan.filter((buku) =>
      buku.judul.toLowerCase().includes(searchInput)
    );

    resultSearch.forEach((buku) => {
      let resultListDiv = document.createElement("div");
      resultListDiv.className = "result-list";

      let resultBookImg = document.createElement("img");
      resultBookImg.src = buku.sampulBuku;

      let resultTitleList = document.createElement("h1");
      resultTitleList.textContent = buku.judul;

      let resultAuthorList = document.createElement("h2");
      resultAuthorList.textContent = buku.pengarang;

      let resultYearPublicationlist = document.createElement("h3");
      resultYearPublicationlist.textContent = buku.tahunTerbit;

      resultListDiv.appendChild(resultBookImg);
      resultListDiv.appendChild(resultTitleList);
      resultListDiv.appendChild(resultAuthorList);
      resultListDiv.appendChild(resultYearPublicationlist);
      resultSearchDiv.appendChild(resultListDiv);
    });
  }
}

function closeResultSearch() {
  resultSearchModal.style.display = "none";
}

renderBookList();
