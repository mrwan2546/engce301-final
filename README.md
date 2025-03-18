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
Our Progress LAb6 Solution [Submission Task](https://lab-wb.cpe-rmutl.net/team06)
## Test Case Overview

Coming Soon!!

## Data Flow Diagrams
<p align="center">
    <br>
    <img src="https://i.imgur.com/OO96VW2.png" alt="DFD">
    <br>
<p>

## **Activity Flow Diagram**

```mermaid
stateDiagram
  direction LR
  [*] --> Still
  Still --> Moving
  Moving --> Crash:Send / Recieve Mesaage
  Crash --> [*]
  [*] --> s1
  Still --> s2
  s2 --> Crash:Login / Logoutgett Agent / UpdateAgent
  Crash --> s3
  s3 --> Crash
  s4 --> s5
  s5 --> Crash:Get agent histories(Message / Login / Logout)
  s5 --> s6
  s6 --> s5
  s6 --> Crash:UpdateAgentstatus
  s6 --> s7
  s7 --> s6
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
