# Readiness Checklist – Lab 05

Đây là danh sách kiểm tra (checklist) để đảm bảo stack Docker Compose của bạn đã sẵn sàng trước khi gửi bài.

- [x] **Database ready:** container DB đã chạy và phản hồi `pg_isready`. Kiểm tra bằng `docker exec -it fit4110-db-lab05 pg_isready -U $POSTGRES_USER`.
- [x] **AI service ready:** container AI service trả về `200` cho endpoint `/health` và `/predict` hoạt động.
- [x] **API ready:** container API trả `200` cho `/health` và có thể tạo/lấy readings khi token hợp lệ.
- [x] **Environment variables:** `.env` đã được thiết lập đúng (APP_PORT, POSTGRES_USER, AUTH_TOKEN,…). Không sử dụng secret thật; lưu secret vào `.env` cục bộ, commit `.env.example`. File `.env` được ignore trong `.gitignore`.
- [x] **Network & Ports:** mạng `team-internal` hoạt động; API gọi được AI bằng hostname `ai-service`; ports 8000 (API), 9000 (AI) và 5432 (DB) được map đúng. Mạng `class-net` được khai báo trong Compose.
- [x] **Image tags:** image build với tag `v0.1.0-team-iot` theo quy ước. Xác nhận rằng tag xuất hiện trong registry (ghcr.io hoặc Docker Hub).

---

## Ghi chú

```
- Sử dụng docker-compose.yml v3.8 với depends_on + healthcheck để đảm bảo thứ tự khởi động: db → ai-service → api.
- AI service: dùng python:3.11-slim với volume mount src/ai_service, cài fastapi + uvicorn khi khởi động.
- API service: build từ Dockerfile riêng, chạy với non-root user (appuser).
- class-net được khai báo là internal bridge (không external) để chạy độc lập được.
- Newman test pass tất cả 9 test case khi stack Compose đang chạy.
```