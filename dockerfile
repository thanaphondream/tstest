# ใช้ Node.js เวอร์ชันที่ต้องการเป็นฐาน
FROM node:18

# ตั้งค่าการทำงานในไดเรกทอรี /app
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json (หรือ yarn.lock) ไปยังไดเรกทอรี /app
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกโค้ดโปรเจ็กต์ทั้งหมดไปยังไดเรกทอรี /app
COPY ./ src/index.ts ./

# สร้าง Prisma Client
RUN npx prisma generate

# ตั้งค่า port ที่จะเปิดให้ใช้งาน
EXPOSE 3000

# รันเซิร์ฟเวอร์เมื่อ container เริ่มต้น
CMD ["npm", "start"]
