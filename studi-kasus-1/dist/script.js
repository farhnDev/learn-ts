"use strict";
var _a, _b;
//? load data from local
const loadTabunganFromStorage = () => {
    const data = localStorage.getItem("tabungan");
    return data
        ? JSON.parse(data).map((i) => ({
            siapa: i.siapa,
            tanggal: new Date(i.tanggal),
            nominal: i.nominal,
        }))
        : [];
};
const tabungan = loadTabunganFromStorage();
//? save data to local
const saveTabunganToStorage = () => {
    localStorage.setItem("tabungan", JSON.stringify(tabungan));
};
// const tabungan: ITabungan[] = [
//   //   { tanggal: new Date(2024, 8, 7), nominal: 10000 },
//   //   { tanggal: new Date(2024, 8, 18), nominal: 20000 },
//   //   { tanggal: new Date(2024, 8, 19), nominal: 30000 },
// ];
//! fungsi utility
//? showleadingzero
const showLoadingZero = (x) => {
    return x < 10 ? "0" : "";
};
//? tousend separator
const toUsd = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
function formatRupiah(angka, prefix = "") {
    const number_string = angka.replace(/[^,\d]/g, "").toString();
    const split = number_string.split(",");
    const sisa = split[0].length % 3;
    let rupiah = split[0].substring(0, sisa);
    const ribuan = split[0].substring(sisa).match(/\d{3}/gi);
    if (ribuan) {
        const separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
    }
    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
    return prefix === undefined ? rupiah : prefix + rupiah;
}
// console.log(tabungan);
//? input tabungan
const siapaInput = document.querySelector("#why-to");
const tanggalInput = document.querySelector("#tanggal");
const nominalInput = document.querySelector("#nominal");
// const submitButton = document.querySelector("#submit");
siapaInput === null || siapaInput === void 0 ? void 0 : siapaInput.addEventListener("input", (e) => {
    const target = e.target;
    return target.value;
    //   console.log(target.value);
});
tanggalInput === null || tanggalInput === void 0 ? void 0 : tanggalInput.addEventListener("change", (e) => {
    const target = e.target;
    return target.value;
    //   console.log(target.value);
});
nominalInput === null || nominalInput === void 0 ? void 0 : nominalInput.addEventListener("input", (e) => {
    const target = e.target;
    // Simpan posisi caret sebelum memodifikasi nilai
    const caretPosition = target.selectionStart;
    // Hapus format lama, format ulang dengan format Rupiah
    const unformattedValue = target.value.replace(/[^,\d]/g, "");
    target.dataset.rawValue = unformattedValue;
    const formattedValue = formatRupiah(unformattedValue);
    // Set nilai baru yang sudah diformat
    target.value = formattedValue;
    // Kembalikan posisi caret agar tetap di tempat yang benar setelah memformat
    target.setSelectionRange(caretPosition, caretPosition);
});
//? format date
const formateDate = (rawDate) => {
    const rawDateFormateObject = new Date(rawDate);
    const day = rawDateFormateObject.getDate();
    const month = rawDateFormateObject.getMonth();
    const year = rawDateFormateObject.getFullYear();
    return `${showLoadingZero(day)}${day}-${showLoadingZero(month)}${month}-${year}`;
}; //? tadi kalau compile normal tsc nama file itu akaan error. naah sekarang kita berikan --target es2017
const loadTabungan = () => {
    const tabunganBody = document.querySelector("#table-daftar-tabungan tbody");
    for (const t of tabungan) {
        tabunganBody === null || tabunganBody === void 0 ? void 0 : tabunganBody.append(loadTabunganItem(t));
    }
};
//? Load Tabungan Item row
const loadTabunganItem = (tabunganItem) => {
    const tabunganTr = document.createElement("tr");
    const indexTd = document.createElement("td");
    const whyTd = document.createElement("td");
    whyTd.textContent = tabunganItem.siapa;
    indexTd.textContent = (tabungan.indexOf(tabunganItem) + 1).toString();
    const tanggalTd = document.createElement("td");
    tanggalTd.innerText = formateDate(tabunganItem.tanggal);
    const nominalTd = document.createElement("td");
    nominalTd.innerText = toUsd(tabunganItem.nominal);
    const aksiTd = document.createElement("td");
    aksiTd.classList.add("button-table");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => {
        deleteButton.classList.add("loading");
        setTimeout(() => {
            const rowIndex = tabungan.indexOf(tabunganItem);
            if (rowIndex > -1) {
                tabungan.splice(rowIndex, 1);
            }
            tabunganTr.remove();
            calculateTotalNominal();
            saveTabunganToStorage();
        }, 1000);
    });
    // //? edit button coming soon
    // const editButton = document.createElement('button');
    // editButton.classList.add('edit');
    // editButton.textContent = 'Edit';
    //? masukan button ke td
    aksiTd.appendChild(deleteButton);
    //? masukan td ke tr
    tabunganTr.append(indexTd, whyTd, tanggalTd, nominalTd, aksiTd);
    //   tabunganTr.appendChild(tanggalTd);
    //   tabunganTr.appendChild(nominalTd);
    //   tabunganTr.appendChild(aksiTd);
    return tabunganTr;
};
// tabungan.forEach(loadTabunganItem);
//? kakalkulasi total nominal
const calculateTotalNominal = () => {
    const total = tabungan.reduce((sum, item) => sum + item.nominal, 0);
    document.getElementById("total-amount").innerText = toUsd(total);
};
const showAlert = (message) => {
    const alertBox = document.getElementById("custom-alert");
    const overlay = document.querySelector("#overlay");
    const alertMessage = document.getElementById("custom-alert-message");
    alertMessage.innerText = message;
    alertBox.style.display = "flex";
    overlay.style.display = "block";
};
const closeAlert = () => {
    const alertBox = document.getElementById("custom-alert");
    const overlay = document.querySelector("#overlay");
    alertBox.style.display = "none";
    overlay.style.display = "none";
    //   overlay.classList.remove("blur");
};
(_a = document
    .getElementById("custom-alert-close")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", closeAlert);
document.addEventListener("DOMContentLoaded", () => {
    const formInput = document.querySelector("#form-input");
    formInput === null || formInput === void 0 ? void 0 : formInput.addEventListener("submit", (e) => {
        var _a;
        e.preventDefault();
        const siapa = siapaInput;
        const tanggal = tanggalInput;
        const nominal = nominalInput;
        if (tanggal.value === "" || nominal.value === "") {
            showAlert("Ada input yang belum ke isi");
            return;
        }
        const unformattedNominal = nominal.value.replace(/[^,\d]/g, "");
        const parsedNominal = parseInt(unformattedNominal, 10);
        tabungan.push({
            siapa: siapa.value,
            tanggal: new Date(tanggal.value),
            nominal: parsedNominal,
        });
        saveTabunganToStorage();
        const tabunganItem = tabungan[tabungan.length - 1];
        const tabunganTr = loadTabunganItem(tabunganItem);
        (_a = document.querySelector("#table-daftar-tabungan tbody")) === null || _a === void 0 ? void 0 : _a.append(tabunganTr);
        siapa.value = "";
        tanggal.value = "";
        nominal.value = "";
        calculateTotalNominal();
    });
    loadTabungan();
    calculateTotalNominal();
});
//? print
(_b = document.getElementById("print-button")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    var _a, _b, _c;
    const table = (_a = document
        .querySelector("#table-daftar-tabungan")) === null || _a === void 0 ? void 0 : _a.cloneNode(true);
    const totalNominal = (_b = document
        .getElementById("total-nominal")) === null || _b === void 0 ? void 0 : _b.cloneNode(true);
    const btnPrint = (_c = document.getElementById("print-button")) === null || _c === void 0 ? void 0 : _c.outerHTML;
    // Remove the "Aksi" column
    table
        .querySelectorAll("th:nth-child(5), td:nth-child(5)")
        .forEach((cell) => cell.remove());
    // Create a new div to hold the table for printing
    const printContents = document.createElement("div");
    printContents.appendChild(table);
    if (totalNominal) {
        printContents.appendChild(totalNominal);
    }
    const printWindow = window.open("", "", "width=800,height=600");
    if (printWindow) {
        printWindow.document.write(`
        <html>
          <head>
            <title>Print Table</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 20px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
            }
            th {
              background-color: rgb(14, 140, 190);
              color: white;
            }
            .total-nominal {
              margin-top: 20px;
              font-weight: bold;
            }
            @media print {
              th {
                background-color: rgb(14, 140, 190) !important;
                -webkit-print-color-adjust: exact;
              }
            }
          </style>
          </head>
          <body>
            ${printContents.innerHTML.replace(btnPrint || "", "")}
          </body>
        </html>
      `);
        printWindow.document.close();
        printWindow.print();
    }
});
// submitButton?.addEventListener("click", () => {
//   const tanggal = tanggalInput as HTMLInputElement;
//   const nominal = nominalInput as HTMLInputElement;
//   if (tanggal.value === "" || nominal.value === "") {
//     alert("Tanggal dan Nominal harus diisi");
//     return;
//   }
//   tabungan.push({
//     tanggal: new Date(tanggal.value),
//     nominal: parseInt(nominal.value),
//   });
//   const tabunganItem = tabungan[tabungan.length - 1];
//   const tabunganTr = loadTabunganItem(tabunganItem);
//   document.querySelector("#table-daftar-tabungan tbody")?.append(tabunganTr);
//   tanggal.value = "";
//   nominal.value = "";
// });
