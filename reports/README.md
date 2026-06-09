# Reports Directory

Thư mục này chứa báo cáo Newman/Postman sinh ra khi chạy `npm run test:compose`.

## Files được sinh ra tự động

- `newman-lab05-compose.xml` – JUnit XML report (dùng cho CI/CD)
- `newman-lab05-compose.html` – HTML report chi tiết (mở bằng browser)

> **Lưu ý:** Các file `.xml` và `.html` bị ignore trong `.gitignore`. Chỉ file `.gitkeep` và `README.md` này được commit.

## Cách tạo report

Sau khi stack Compose đã chạy (`docker compose up -d --build`), chạy:

```bash
npm install   # nếu chưa cài
npm run test:compose
```
