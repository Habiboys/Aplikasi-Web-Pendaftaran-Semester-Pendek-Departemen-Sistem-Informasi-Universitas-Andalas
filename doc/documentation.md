# Panduan Instalasi Sistem Informasi Pendaftaran Semester Pendek dengan Nest.js

Berikut ini adalah langkah-langkah untuk menginstal dan menjalankan aplikasi ini.

1. Install semua dependensi yang diperlukan

```bash
npm install 
```

2. Setting Koneksi Database pada file schema.prisma
```ts
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```
3. Mingrasikan Table dengan perintah berikut

```
npx prisma migrate 
```
4. Jalankan server dengan perintah berikut
```
npm run start
```

