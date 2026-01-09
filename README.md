# Microservice Auth

Sistem autentikasi menggunakan Express.js, Prisma, dan MongoDB.

## Prasyarat

* Node.js versi 18 atau lebih baru.
* Database MongoDB.

## Cara Instalasi

1. Clone repositori ini.
2. Jalankan perintah berikut untuk menginstal dependensi:
```bash
npm install

```


3. Buat file `.env` di direktori utama dan isi dengan konfigurasi berikut:
```env
DATABASE_URL="isi_dengan_koneksi_mongodb_anda"
JWT_SECRET="isi_dengan_secret_key_bebas"
BASE_URL="http://localhost:3000" atau link frontend

```


4. Jalankan perintah untuk sinkronisasi database:
```bash
npx prisma generate

```



## Cara Menjalankan

Untuk menjalankan server dalam mode pengembangan:

```bash
npm run start

```

Server akan berjalan di `http://localhost:3001`.

## Struktur API

* **POST** `/api/users/register`: Mendaftarkan pengguna baru.
* **POST** `/api/users/login`: Melakukan login dan mendapatkan token JWT.
* **GET** `/api/users/me`: Mendapatkan informasi profil pengguna saat ini (memerlukan token).

## Teknologi yang Digunakan

* **Express.js**: Framework web.
* **Prisma**: ORM untuk manajemen database.
* **JWT**: Autentikasi berbasis token.
* **Bcrypt**: Enkripsi password.
