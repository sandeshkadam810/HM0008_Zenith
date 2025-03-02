# HM0008_Zenith
HackMatrix_PS002 Problem Statement: Students often face challenges in finding relevant job opportunities and managing their application process efficiently. Developing a platform with a personalized dashboard for both students and admins streamlines the job search and application process. Students can create detailed profiles and upload resumes, enhancing their visibility to recruiters. Admins can post opportunities with specific keywords for better searchability. The platform also notifies students about the latest and most relevant opportunities based on their profiles. The objective is to design a user-friendly job portal that simplifies opportunity discovery and application management for students.

# Problem Statement
 
In today's world, students often need an engaging and interactive way to track their learning progress and assess their knowledge. Many existing online learning platforms lack effective tools to help students see how much they have learned, where they need improvement, and how they compare with others.
To solve this, we aim to develop a student-centric platform that makes learning fun, interactive, and engaging. Our platform will offer:
1.	A Student Platform:
A dedicated space where students can track their progress, access lessons, and take quizzes.
A structured way to measure learning and ensure students stay on track with their studies.
2.	Interactive Lessons & Quizzes:
Learning is reinforced with engaging lessons and quizzes that help students test their understanding.
Students get instant feedback on their performance, making learning more effective.
3.	Global Quiz Matchmaking with Gamified Credits:
Students can compete with peers worldwide in quizzes based on the topics they’ve learned.
This competition is gamified, meaning students earn reward credits, which makes learning more exciting and motivating.
The objective is to create an interactive educational platform that not only helps students learn but also encourages participation, competition, and continuous improvement.


# Features

### Student Platform
- Track progress, access lessons, and participate in quizzes.
- Interactive learning experience with assessments.
- Global quiz matchmaking based on learned concepts, offering gamified rewards (in development).

### User Management
- Secure user registration and login functionality.
- Customizable user profiles with personal details.

### Course Management
- Comprehensive course details, including name, instructor, and description.

### Assessments & Progress Tracking
- Quizzes to evaluate user knowledge and understanding.
- Visual representation of progress for better tracking.

### Certificate Generation
- Automated certificate issuance upon course completion.
- Certificates personalized with user details.

### Discussion Forum
- Course-specific discussion forums for peer interaction and knowledge sharing.

### Gamified Quiz Matchmaking (In Development)
- Matches students with global peers based on learned topics.
- Encourages competitive learning and engagement through rewards.

# Technologies Used

### Frontend
- React.js for dynamic user interfaces.
- Styled using CSS for a responsive and engaging design.

### Backend
- Spring Boot with a RESTful API architecture for efficient backend operations.

### Database
- MySQL for structured data management.
- Seven core tables: `course`, `learning`, `progress`, `discussion`, `feedback`, `question`, `user`, and `assessment`.

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js & npm
- Java (JDK 11 or later)
- MySQL Database

### Setup
#### Backend Setup (Spring Boot)
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd backend
   ```
2. Build and run the application:
   ```sh
   mvn spring-boot:run
   ```

#### Frontend Setup (React.js)
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

# Screenshots

## Login:
![login](https://github.com/user-attachments/assets/ebc7c1ff-e726-4c6c-864e-ea056cd3cb7b)

## Register:
![register](https://github.com/user-attachments/assets/ab28ab6e-d059-4a3f-9dbe-6c01156726f8)

## Courses:
![courses](https://github.com/user-attachments/assets/5b1a86c9-f872-4bf3-85c7-a34bb8c8a0e3)

## Profile:
![profile](https://github.com/user-attachments/assets/31f2fb98-62f1-4e63-ba52-10aa5896dcf6)

## Learnings:
![learnings](https://github.com/user-attachments/assets/67d06fb9-6108-4a9c-ab73-9e270b9c7d21)

## Course Progress and Feedback:
![progress](https://github.com/user-attachments/assets/141b0987-005a-4185-a7bd-f799ee7e69dc)

## Course Description:
![coursedecription](https://github.com/user-attachments/assets/3b59b80f-960e-4d98-839b-3eae7b0d1e6d)

## Assessment:
![assessment](https://github.com/user-attachments/assets/4604bdbe-2a8f-4af3-89e9-63036960dd33)

## Certificate:
![certificate](https://github.com/user-attachments/assets/019bcf7f-3dac-440f-aaaf-38c73d0461c5)

## Unique Characteristics:
![characteristics](https://github.com/user-attachments/assets/e0f21048-534a-474c-bdee-fb110cce3cd5)

## Popular Courses:
![popularcourses](https://github.com/user-attachments/assets/61a3be0b-4d6d-4ef7-a52a-e7880c697abb)

## About Us
![aboutus](https://github.com/user-attachments/assets/fed3a428-2cb2-4435-a6ef-c400924c0094)

# Deployed Url

[Link to Deployed Solution](https://hm-0008-zenith-e6fb.vercel.app/)

# Video Url

[Link to Demo Video](https://youtu.be/11vNBnBSUEw)

# Remarks

The global quiz matchmaking feature is currently under development. It will allow users to select a quiz topic and enter a waiting queue, where they will be automatically matched with another user who has chosen the same topic. Once matched, a quiz will be dynamically generated using the Gemini API, and both users will compete in real time to earn points. This system aims to enhance engagement through interactive learning and gamified rewards.
