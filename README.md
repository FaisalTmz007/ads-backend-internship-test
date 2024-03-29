# ADS INTERN TEST BE1

### Inisialisasi Projek

1. Inisialisasi node js\
     ```
    npm init
    ```

2. Instalasi Package\
    ```
    npm i -y
    ```

3. Buat .env file seperti pada `.env.example`

4. Buat database menggunakan perintah berikut\
    ```
    npx sequelize-cli db:create
    ```

5. Lakukan migrasi databse dengan menjalankan perintah berikut\
    ```
    npx sequelize-cli db:migrate
    ```

6. Lakukan seeding data dengan menjalankan perintah berikut\
    ```
    npx sequelize-cli db:seed:all
    ```

7. Run App
    ```
    npm start
    ```

### Dokumentasi API

# Project: ADS-Backend-1-Test
Dokumentasi API
# 📁 Collection: Karyawan 


## End-point: Get All Karyawan
Endpoint ini membuat permintaan HTTP GET untuk mengambil daftar karyawan. Mengembalikan response code 200, dan body akan berisi array data karyawan, termasuk nomor induk, nama, alamat, tanggal lahir, tanggal bergabung, dan timestamp untuk pembuatan dan pembaruan.
### Method: GET
>```
>{{url}}/karyawan
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Create Karyawan
Endpoint ini memungkinkan Anda untuk membuat catatan karyawan baru dengan mengirimkan permintaan HTTP POST ke URL yang ditentukan.

### Request Body

Permintaan harus menyertakan raw JSON body dengan parameter berikut:

- `nomor_induk` (string): Nomor identitas karyawan.
    
- `nama` (string): Nama karyawan.
    
- `alamat` (string): Alamat Karyawan.
    
- `tanggal_lahir` (string): Tanggal lahir karyawan.
    
- `tanggal_bergabung` (string): Tanggal bergabung karyawan.
    

### Response

Setelah eksekusi berhasil, endpoint mengembalikan kode status 200 dan respons JSON dengan struktur berikut:

- `status`
    
- `message`
    
- `data` : {  
    `nomor_induk,   nama,   alamat,   tanggal_lahir,   tanggal_bergabung,   createdAt,   updatedAt`  
    }
    

Contoh Response:

``` json
{
    "status": 0,
    "message": "",
    "data": {
        "nomor_induk": "",
        "nama": "",
        "alamat": "",
        "tanggal_lahir": "",
        "tanggal_bergabung": "",
        "updatedAt": "",
        "createdAt": ""
    }
}

 ```
### Method: POST
>```
>{{url}}/karyawan
>```
### Body (**raw**)

```json
{
    "nomor_induk": "IP06011",
    "nama": "Asep",
    "alamat": "Jln Gaja Mada no 12, Surabaya",
    "tanggal_lahir": "1980-01-11",
    "tanggal_bergabung": "2005-08-07"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Karyawan By ID
Permintaan HTTP GET ini mengambil informasi tentang karyawan tertentu dengan ID karyawan yang diberikan. Respons akan memiliki kode status 200, yang mengindikasikan permintaan berhasil. body respons akan berisi objek JSON dengan "status", "message", dan "data". Objek "data" akan berisi detail tentang karyawan, seperti nomor induk karyawan, nama, alamat, tanggal lahir, tanggal bergabung, dan daftar cuti dengan detail seperti tanggal cuti, durasi, dan keterangan.
### Method: GET
>```
>{{url}}/karyawan/{{nomor_induk}}
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get All Karyawan Sort by TTL ASC
Endpoint ini membuat permintaan HTTP GET untuk mengambil daftar karyawan. Permintaan kali ini menyertakan parameter kueri "sortBy" berdasarkan **tanggal_lahir** yang akan disortir dan parameter "SortOrder" untuk membuat urutan menjadi **Ascending**. Respons akan memiliki kode status 200 dan akan menyertakan objek JSON dengan "status" yang menunjukkan status permintaan, "pesan" untuk informasi tambahan, dan bidang "data" yang berisi array objek karyawan. Setiap objek karyawan mencakup nomor induk karyawan, nama, alamat, tanggal lahir, tanggal bergabung, timestamp pembuatan, dan update.
### Method: GET
>```
>{{url}}/karyawan?sortBy=tanggal_lahir&SortOrder=Asc
>```
### Query Params

|Param|value|
|---|---|
|sortBy|tanggal_lahir|
|SortOrder|Asc|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get All Karyawan Sort by TTL DESC
Endpoint ini membuat permintaan HTTP GET untuk mengambil daftar karyawan. Permintaan kali ini menyertakan parameter kueri "sortBy" berdasarkan **tanggal_lahir** yang akan disortir dan parameter "SortOrder" untuk membuat urutan menjadi **Descending**. Respons akan memiliki kode status 200 dan akan menyertakan objek JSON dengan "status" yang menunjukkan status permintaan, "pesan" untuk informasi tambahan, dan bidang "data" yang berisi array objek karyawan. Setiap objek karyawan mencakup nomor induk karyawan, nama, alamat, tanggal lahir, tanggal bergabung, timestamp pembuatan, dan update.
### Method: GET
>```
>{{url}}/karyawan?sortBy=tanggal_lahir&sortOrder=Desc
>```
### Query Params

|Param|value|
|---|---|
|sortBy|tanggal_lahir|
|sortOrder|Desc|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get All Karyawan Sort By Name ASC
Endpoint ini membuat permintaan HTTP GET untuk mengambil daftar karyawan. Permintaan kali ini menyertakan parameter kueri "sortBy" berdasarkan **nama** yang akan disortir dan parameter "SortOrder" untuk membuat urutan menjadi **Ascending**. Respons akan memiliki kode status 200 dan akan menyertakan objek JSON dengan "status" yang menunjukkan status permintaan, "pesan" untuk informasi tambahan, dan bidang "data" yang berisi array objek karyawan. Setiap objek karyawan mencakup nomor induk karyawan, nama, alamat, tanggal lahir, tanggal bergabung, timestamp pembuatan, dan update.
### Method: GET
>```
>{{url}}/karyawan?sortBy=nama&sortOrder=Asc
>```
### Query Params

|Param|value|
|---|---|
|sortBy|nama|
|sortOrder|Asc|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get All Karyawan Sort By Name DESC
Endpoint ini membuat permintaan HTTP GET untuk mengambil daftar karyawan. Permintaan kali ini menyertakan parameter kueri "sortBy" berdasarkan **nama** yang akan disortir dan parameter "SortOrder" untuk membuat urutan menjadi **Descending**. Respons akan memiliki kode status 200 dan akan menyertakan objek JSON dengan "status" yang menunjukkan status permintaan, "pesan" untuk informasi tambahan, dan bidang "data" yang berisi array objek karyawan. Setiap objek karyawan mencakup nomor induk karyawan, nama, alamat, tanggal lahir, tanggal bergabung, timestamp pembuatan, dan update.
### Method: GET
>```
>{{url}}/karyawan?sortBy=nama&sortOrder=Desc
>```
### Query Params

|Param|value|
|---|---|
|sortBy|nama|
|sortOrder|Desc|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update Karyawan
This endpoint is used to update a specific employee with a given ID dengan method `PUT`.

### Request Body

Permintaan harus menyertakan raw JSON body dengan parameter berikut:

- `nama` (optional)
    
- `alamat` (optional)
    
- `tanggal_lahir` (optional)
    
- `tanggal_bergabung` (optional)
### Method: PUT
>```
>{{url}}/karyawan/IP06011
>```
### Body (**raw**)

```json
{
    "nama": "johan",
    "alamat": "Jln Gaja Mada no 12, Surabaya",
    "tanggal_lahir": "1980-01-11",
    "tanggal_bergabung": "2005-08-07"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Karyawan
Endpoint API ini menggunakan method `DELETE` untuk menghapus catatan karyawan tertentu berdasarkan nomor induk.
### Method: DELETE
>```
>{{url}}/karyawan/IP06011
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Cuti 


## End-point: Get All Cuti
Endpoint ini membuat permintaan HTTP GET untuk mengambil daftar data cuti. Respons akan memiliki kode status 200 dan akan menyertakan sebuah array data cuti, dengan setiap item berisi id, nomor_induk, tanggal_cuti, lama_cuti, keterangan, createdAt, dan updatedAt.
### Method: GET
>```
>{{url}}/cuti
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Cuti By ID
Endpoint ini membuat permintaan HTTP GET untuk mengambil data cuti tertentu berdasarkan dengan ID yang diberikan. Respons akan mencakup status permintaan, message, dan data yang berisi ID, nomor induk karyawan, tanggal cuti, lama cuti, dan keterangan.
### Method: GET
>```
>{{url}}/cuti/1
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get All Cuti Sort by Tanggal Cuti ASC
Endpoint ini membuat permintaan HTTP GET untuk mengambil daftar item 'cuti'. Permintaan tersebut menyertakan parameter kueri untuk mengurutkan hasil berdasarkan **tanggal_cuti** dalam urutan secara **ascending**.
### Method: GET
>```
>{{url}}/cuti?sortBy=tanggal_cuti&sortOrder=asc
>```
### Query Params

|Param|value|
|---|---|
|sortBy|tanggal_cuti|
|sortOrder|asc|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get All Cuti Sort by Tanggal Cuti DESC
Endpoint ini membuat permintaan HTTP GET untuk mengambil daftar item 'cuti'. Permintaan tersebut menyertakan parameter kueri untuk mengurutkan hasil berdasarkan **tanggal_cuti** dalam urutan secara **descending**.
### Method: GET
>```
>http://localhost:3000/cuti?sortBy=tanggalCuti
>```
### Query Params

|Param|value|
|---|---|
|sortBy|tanggalCuti|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get All Cuti Sort by Lama Cuti ASC
Endpoint ini membuat permintaan HTTP GET untuk mengambil daftar item 'cuti'. Permintaan tersebut menyertakan parameter kueri untuk mengurutkan hasil berdasarkan **lama_cuti** dalam urutan secara **ascending**.
### Method: GET
>```
>{{url}}/cuti?sortBy=lama_cuti&sortOrder=asc
>```
### Query Params

|Param|value|
|---|---|
|sortBy|lama_cuti|
|sortOrder|asc|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get All Cuti Sort by Lama Cuti DESC
Endpoint ini membuat permintaan HTTP GET untuk mengambil daftar item 'cuti'. Permintaan tersebut menyertakan parameter kueri untuk mengurutkan hasil berdasarkan **lama_cuti** dalam urutan secara **descending**.
### Method: GET
>```
>{{url}}/cuti?sortBy=lama_cuti&sortOrder=desc
>```
### Query Params

|Param|value|
|---|---|
|sortBy|lama_cuti|
|sortOrder|desc|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Create Cuti

This endpoint allows you to submit a POST request to http://localhost:3000/cuti in order to add a new leave record. The request should include the following parameters in the raw request body:

- nomor_induk (string): The employee's identification number.
- tanggal_cuti (string): The date of the leave.
- lama_cuti (string): The duration of the leave.
- keterangan (string): Any additional information or notes regarding the leave.

The response to the request will have a status code of 200, and it will include the following JSON data:
```json
{
    "status": 0,
    "message": "",
    "data": {
        "id": 0,
        "nomor_induk": "",
        "tanggal_cuti": "",
        "lama_cuti": "",
        "keterangan": "",
        "updatedAt": "",
        "createdAt": ""
    }
}
```
The "status" field indicates the status of the operation, while the "data" field provides the details of the newly added leave record including its ID, employee identification number, leave date, duration, notes, and timestamps for creation and update.

### Method: POST
>```
>{{url}}/cuti
>```
### Body (**raw**)

```json
{
    "nomor_induk": "IP06002",
    "tanggal_cuti": "2020-09-11",
    "lama_cuti": "2",
    "keterangan": "Sunat"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update Cuti
### Update Cuti

Endpoint ini digunakan untuk memperbarui cuti tertentu dengan memberikan ID cuti dalam URL.

#### Request Body

- `nomor_induk` (optional)
- `tanggal_cuti` (optional)
- `lama_cuti` (optional)
- `keterangan` (optional)
### Method: PUT
>```
>{{url}}/cuti/8
>```
### Body (**raw**)

```json
{
    "nomor_induk": "IP06002",
    "tanggal_cuti": "2020-09-11",
    "lama_cuti": "2",
    "keterangan": "Menikah"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Cuti
Endpoint API ini menggunakan method `DELETE` untuk menghapus catatan cuti tertentu berdasarkan ID.
### Method: DELETE
>```
>{{url}}/cuti/8
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
