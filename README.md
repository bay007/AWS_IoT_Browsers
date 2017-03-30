# S3_CRUD_buket
Pagina estatica para manejar los archivos en un buket de Amazon S3

Requisitos
-Modificar CORS en el buket

<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
<CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>GET</AllowedMethod>
    <AllowedMethod>PUT</AllowedMethod>
    <AllowedMethod>POST</AllowedMethod>
    <AllowedMethod>DELETE</AllowedMethod>
    <MaxAgeSeconds>3000</MaxAgeSeconds>
    <AllowedHeader>*</AllowedHeader>
</CORSRule>
</CORSConfiguration>

-Generar una politica para garantizar acceso a solo los recursos necesarios, generar un grupo y a ese grupo asociar la politca recien creada, despues generar un usuario y añadirlo al grup orecien creado. La politica quedó como:

{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:Get*",
        "s3:List*",
        "s3:DeleteObject",
        "s3:PutObject"
      ],
      "Resource": "*"
    }
  ]
}

Referencia:
http://docs.aws.amazon.com/es_es/sdk-for-javascript/v2/developer-guide/s3-example-photo-album.html

Herramientas
http://awspolicygen.s3.amazonaws.com/policygen.html
https://policysim.aws.amazon.com/home/index.jsp
