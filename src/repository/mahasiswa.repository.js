import pool from "../application/database.js";

class MahasiswaRepository {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM mahasiswa");
    return rows;
  }

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM mahasiswa WHERE id = ?", [
      id,
    ]);
    return rows[0];
  }

  async create(mahasiswa) {
    const [result] = await pool.query(
      "INSERT INTO mahasiswa (nama, nim, jurusan) VALUES (?, ?, ?)",
      [mahasiswa.nama, mahasiswa.nim, mahasiswa.jurusan]
    );
    return result.insertId;
  }

  async update(id, mahasiswa) {
    const [result] = await pool.query(
      "UPDATE mahasiswa SET nama = ?, nim = ?, jurusan = ? WHERE id = ?",
      [mahasiswa.nama, mahasiswa.nim, mahasiswa.jurusan, id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await pool.query("DELETE FROM mahasiswa WHERE id = ?", [
      id,
    ]);
    return result.affectedRows;
  }
}

export default new MahasiswaRepository();