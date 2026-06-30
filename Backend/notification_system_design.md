# Stage 1 - Notification System Design

overview

Design a REST API for a campus notification system that allows students to receive real-time notifications related to placements, events, exams, and results.


## REST APIs

### 1. Get All Notifications

GET /notifications

Response

json
[
  {
    "id": "1",
    "title": "Placement Drive",
    "message": "Amazon placement drive starts tomorrow.",
    "type": "placement",
    "isRead": false,
    "createdAt": "2026-06-30T10:00:00Z"
  }
]
```

---

### 2. Get Notification By ID

GET /notifications/{id}

Response

```json
{
  "id": "1",
  "title": "Placement Drive",
  "message": "Amazon placement drive starts tomorrow.",
  "type": "placement",
  "isRead": false,
  "createdAt": "2026-06-30T10:00:00Z"
}
```

---

### 3. Create Notification

POST /notifications

Request

```json
{
  "title": "Exam Schedule",
  "message": "Mid semester exam begins next Monday.",
  "type": "exam"
}
```

Response

```json
{
  "message": "Notification created successfully."
}
```

---

4. Mark Notification as Read

PATCH /notifications/{id}/read

Response

```json
{
  "message": "Notification marked as read."
}
```

---

5. Delete Notification

DELETE /notifications/{id}

Response

```json
{
  "message": "Notification deleted successfully."
}
```

---

Notification JSON Schema

```json
{
  "id": "string",
  "title": "string",
  "message": "string",
  "type": "placement | event | exam | result",
  "recipientId": "string",
  "isRead": false,
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

---

Core Actions

- Create notification
- View all notifications
- View notification by ID
- Mark notification as read
- Delete notification

---

Real-Time Notification Mechanism

Use **WebSocket** for real-time notification delivery.

Whenever a new notification is created, the backend pushes it instantly to all connected users without refreshing the page.

Advantages:
- Low latency
- Persistent connection
- Real-time updates
- Efficient communication

// stage 2 
 Stage 2


I recommend MongoDB because:

- Flexible schema
- High scalability
- Fast read/write performance
- Easy horizontal scaling
- Suitable for notification systems

---

Notification Collection Schema

```json
{
  "_id": "ObjectId",
  "studentId": "String",
  "title": "String",
  "message": "String",
  "type": "placement | event | exam | result"
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

---

Problems as Data Grows

- Slow queries
- High storage usage
- Duplicate notifications
- Large collection scans
- Increased response time

---

Solutions

- Create indexes on:
  - studentId
  - isRead
  - createdAt

- Archive old notifications.


- Cache frequently accessed notifications.

- Use sharding for horizontal scaling.

---

Sample NoSQL Queries

Create Notification

```javascript
db.notifications.insertOne({
  studentId: "1042",
  title: "Placement Drive",
  message: "Amazon hiring starts tomorrow.",
  type: "placement",
  isRead: false,
  createdAt: new Date()
});
```

Get All Notifications


db.notifications.find({
  studentId: "1042"
});

Get Unread Notifications

db.notifications.find({
  studentId: "1042",
  isRead: false
}).sort({
  createdAt: -1
});
```

 Mark Notification as Read

db.notifications.updateOne(
  { _id: ObjectId("id") },
  {
    $set: {
      isRead: true
    }
  }
);

Delete Notification


db.notifications.deleteOne({
  _id: ObjectId("id")
});