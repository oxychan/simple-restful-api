const tableBody = document.getElementById("mahasiswa-list");
const tambahBtn = document.getElementById("tambah-btn");
const modal = document.getElementById("mahasiswa-modal");
const form = document.getElementById("mahasiswa-form");
const namaInput = document.getElementById("nama");
const nimInput = document.getElementById("nim");
const jurusanInput = document.getElementById("jurusan");
const closeModalBtn = document.getElementById("close-modal");

let editingId = null;

async function loadMahasiswas() {
  const mahasiswas = await apiService.getMahasiswas();

  tableBody.innerHTML = "";
  mahasiswas.data.forEach((mhs, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td class="p-4 border-b border-blue-gray-50"><p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">${
        index + 1
      }</p></td>
      <td class="p-4 border-b border-blue-gray-50"><p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">${
        mhs.nama
      }</p></td>
      <td class="p-4 border-b border-blue-gray-50"><p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">${
        mhs.nim
      }</p></td>
      <td class="p-4 border-b border-blue-gray-50"><p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">${
        mhs.jurusan
      }</p></td>
      <td class="p-4 border-b border-blue-gray-50">
        <button class="edit-btn text-blue-600 mr-2 cursor-pointer" data-id="${
          mhs.id
        }"><p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">Edit</p></button>
        <button class="delete-btn text-red-600 cursor-pointer" data-id="${
          mhs.id
        }"><p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">Hapus</p></button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

tambahBtn.addEventListener("click", () => {
  editingId = null;
  form.reset();
  modal.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  form.reset();
});

tableBody.addEventListener("click", async (e) => {
  const editBtn = e.target.closest(".edit-btn");
  const deleteBtn = e.target.closest(".delete-btn");

  if (editBtn) {
    const id = editBtn.dataset.id;
    const response = await apiService.getMahasiswaById(id);
    const data = response.data;

    namaInput.value = data.nama;
    nimInput.value = data.nim;
    jurusanInput.value = data.jurusan;
    editingId = id;
    modal.classList.remove("hidden");
  }

  if (deleteBtn) {
    const id = deleteBtn.dataset.id;
    const confirmed = confirm("Yakin ingin menghapus?");
    if (confirmed) {
      await apiService.deleteMahasiswa(id);
      await loadMahasiswas();
    }
  }
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    nama: namaInput.value,
    nim: nimInput.value,
    jurusan: jurusanInput.value,
  };

  if (editingId) {
    await apiService.updateMahasiswa(editingId, data);
  } else {
    await apiService.createMahasiswa(data);
  }

  modal.classList.add("hidden");
  await loadMahasiswas();
});

window.addEventListener("DOMContentLoaded", () => {
  loadMahasiswas();
});
