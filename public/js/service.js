class ApiService {
  constructor() {
    this.baseUrl = "http://localhost:3000/api";
  }

  async getMahasiswas() {
    const response = await fetch(`${this.baseUrl}/mahasiswas`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => {
      throw new Error(error.message || "Failed to fetch data");
    });

    return response.json();
  }

  async getMahasiswaById(id) {
    const response = await fetch(`${this.baseUrl}/mahasiswas/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => {
      throw new Error(error.message || "Failed to fetch data");
    });

    return response.json();
  }

  async createMahasiswa(mahasiswa) {
    const response = await fetch(`${this.baseUrl}/mahasiswas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mahasiswa),
    }).catch((error) => {
      throw new Error(error.message || "Failed to create mahasiswa");
    });
    return response.json();
  }

  async updateMahasiswa(id, mahasiswa) {
    const response = await fetch(`${this.baseUrl}/mahasiswas/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mahasiswa),
    }).catch((error) => {
      throw new Error(error.message || "Failed to update mahasiswa");
    });

    return response.json();
  }

  async deleteMahasiswa(id) {
    const response = await fetch(`${this.baseUrl}/mahasiswas/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => {
      throw new Error(error.message || "Failed to delete mahasiswa");
    });

    return response.json();
  }
}

const apiService = new ApiService();
