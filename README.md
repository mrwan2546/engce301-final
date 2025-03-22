# engce301 - LAB6 Solution


This our Solution for LAB6 in ENGCE301 Class

##  Overview

<p align="center">
    <br>
    <img src="https://i.imgur.com/xplm1YQ.gif" alt="DFD">
    <br>
<p>

##  **API Specification**

Link to API Specification Documentation: [This Link](./docs/api/README.md).

## Task
### Submission LAB6
Our Progress LAb6 Solution [Submission Task](https://lab-wb.cpe-rmutl.net/team06/#/wallboard)
## Test Case Overview (API)
You can see test case result in [Test Case Result](./part2/n-tier_architecture/test/test-dashboard.md)

## Test Case (Agent Notification)
| รายละเอียดการทดสอบ | รายละเอียดการทดสอบ | วิธีการทดสอบ | ผลลัพธ์ที่คาดหวัง | ผลการทดสอบ|
|----------|----------|----------| ----------| ----------|
| R 1.1| ตรวจสอบการล็อกอินด้วยรหัสผ่าน|1. เข้าไปที่หน้าเข้าสู่ระบบ 2. กรอกชื่อผู้ใช้และรหัสผ่านที่ถูกต้อง 3. กดปุ่มล็อกอิน | ระบบอนุญาตให้เข้าใช้งานได้หากข้อมูลถูกต้อง | ระบบอนุญาตให้เข้าใช้งานได้ตามที่คาดหวัง|
|R 1.2|ตรวจสอบการเก็บบันทึกการล็อกอินและล็อกเอาต์ | 1. ล็อกอินเข้าสู่ระบบ 2. ออกจากระบบ 3. ดูบันทึกกิจกรรม|บันทึกการล็อกอินและล็อกเอาต์พร้อมระบุเวลาที่ถูกต้อง|บันทึกข้อมูลครบถ้วนและถูกต้องตามเวลา|
|R 1.3| ตรวจสอบการบันทึกประวัติการปรับเปลี่ยนสถานะ| 1. เข้าสู่ระบบ 2. เปลี่ยนสถานะของตัวแทน 3. ตรวจดูบันทึกสถานะ|บันทึกการเปลี่ยนสถานะพร้อมระบุเวลาเริ่มและสิ้นสุด|การเปลี่ยนสถานะถูกบันทึกอย่างสมบูรณ์|
|R 1.4|ตรวจสอบการเก็บบันทึกการสนทนาของตัวแทน|1. เริ่มแชท 2. ส่งและรับข้อความหลายครั้ง 3. ตรวจสอบประวัติการแชท|ระบบบันทึกข้อความทั้งหมดของการสนทนา|ข้อความการสนทนาถูกบันทึกทั้งหมด|


**Test Case (Agent Wallboard)**

| รายละเอียดการทดสอบ | รายละเอียดการทดสอบ | วิธีการทดสอบ | ผลลัพธ์ที่คาดหวัง | ผลการทดสอบ|
|----------|----------|----------| ----------| ----------|
|R 2.1| ตรวจสอบการแสดงผลแบนเนอร์บน Wallboard|1. เข้าไปที่หน้า Wallboard 2. ดูว่าแบนเนอร์ปรากฏถูกต้องหรือไม่|แบนเนอร์แสดงผลตามการตั้งค่าที่กำหนด|แบนเนอร์แสดงผลได้ตามที่กำหนดไว้
|R 2.2|ตรวจสอบการแสดงข้อมูลประวัติการล็อกอิน ล็อกเอาต์ และสถานะ|1. เข้าไปที่หน้า Wallboard 2. ตรวจสอบประวัติการล็อกอิน ล็อกเอาต์ และสถานะ|แสดงประวัติทั้งหมดอย่างถูกต้อง|ข้อมูลประวัติแสดงผลครบถ้วนและถูกต้อง
|R 2.3|ตรวจสอบการแสดงประวัติการสนทนาของตัวแทน|1. เข้าไปที่หน้า Wallboard 2. ดูประวัติการแชทของตัวแทน|แสดงประวัติการสนทนาทั้งหมดอย่างถูกต้อง|ประวัติการสนทนาแสดงผลได้อย่างสมบูรณ์


## Data Flow Diagrams
<p align="center">
    <br>
    <img src="https://i.imgur.com/OO96VW2.png" alt="DFD">
    <br>
<p>

## ER Diagrams

<p align="center">
    <br>
    <img src="https://i.imgur.com/HlOWBLa.jpeg" alt="ER">
    <br>
<p>
    
## **Activity Flow Diagram**

```mermaid
stateDiagram
  direction LR
  [*] --> Still
  Still --> Moving
  Moving --> Crash:Send / Recieve Mesaage
  [*] --> s1
  s2 --> Crash:Login / Logoutgett Agent / UpdateAgent
  Crash --> s3
  s3 --> Crash
  s4 --> s5
  s5 --> s6
  s6 --> s5
  s6 --> Crash:UpdateAgentstatus
  s6 --> s7
  s7 --> s6
  s1 --> s2
  Still:PC (Agent)
  Moving:Agent-Notification
  Crash:Endpoint-api
  s1:PC (Agent)
  s2:Agent-Notification
  s3:MS SQL
  s4:PC<br>(Master)
  s5:Wallboard-fe
  s6:Parse-Server
  s7:MongoDB
```

## Our Team
- นายศิริฤกษ์  อินตาคำ 65543206036-7
- นายสหชา   อินทร์ไชย 65543206037-5
- นางสาวพานพลอย  รักปัญญา 65543206073-0
- นายศุภฤกษ์  ขันทอง 65543206130-8
