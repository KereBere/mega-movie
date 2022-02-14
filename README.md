 # Ali Saydam - Final Project


Patika bitirme projesi . 

-Backend tarafında nodejs
-Frontend tarafında Svelte js kullanan film projesi.
-Localde çalışıyor fakat herokuya yüklemede hata aldım. O yüzden henüz canlıya alamadım.

- Localde kullanmak için env dosyaları
```ACCESS_TOKEN_SECRET= 
CLIENT_ID=1076165607566-n80j275v4u2nat71sndbltght69lr2v1.apps.googleusercontent.com 
TYPEORM_CONNECTION =  
TYPEORM_HOST = localhost
TYPEORM_USERNAME = root
TYPEORM_PASSWORD = root
TYPEORM_DATABASE = test_001
TYPEORM_PORT = 3306
TYPEORM_SYNCHRONIZE = true
TYPEORM_LOGGING = false
TYPEORM_ENTITIES = src/entity/**/*.ts,  
NODE_TLS_REJECT_UNAUTHORIZED=0
PORT=3443 (Https olduğu için port 3443 olarak verilmeli)
```
- Lokal kurulum.
1. Önce server kurulumu ve kullanımı
```
cd server
npm i
npm run dev
```
2. Client kurulumu
```
cd client
npm i
npm run dev
``` 
Not: net::ERR_CERT_AUTHORITY_INVALID hatası gelirse bir sekmeden https://localhost:3443' bağlanılıp, diğer sekmeden 4000 client portu üzerinden bağlanıp hata aşılabilir. 
https://user-images.githubusercontent.com/86746444/153860065-912dff7d-6737-4bb2-b962-88e09fe2cbc0.mp4

