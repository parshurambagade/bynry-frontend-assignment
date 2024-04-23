import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Import your Firebase configuration

const insertMultipleUsers = async (usersData) => {
  try {
    const usersCollection = collection(db, 'users');

    // Loop through each user data and set it in Firestore
    for (const userId in usersData) {
      if (Object.hasOwnProperty.call(usersData, userId)) {
        const userData = usersData[userId];
        
        // Set user data to Firestore with the specified userId
        await setDoc(doc(usersCollection, userId), userData);
      }
    }

    console.log('Multiple users data inserted into Firestore successfully');
  } catch (error) {
    console.error('Error inserting multiple users data:', error);
  }
};

// Example users data
const usersData = {
    
    "1": {
        "name": "John Doe",
        "profileImage": "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600",
        "role": "Software Engineer",
        "location": {
          "latitude": 40.7128,
          "longitude": -74.0060
        },
        "briefBio": "Passionate software engineer with 5 years of experience in developing web applications.",
        "contactInfo": {
          "email": "john.doe@example.com",
          "phone": "+1 123-456-7890"
        },
        "additionalInfo": {
          "skills": ["JavaScript", "React", "Node.js"],
          "languages": ["English", "Spanish"],
          "interests": ["Reading", "Traveling"]
        }
    },
    
    "2":{
        "name": "Jane Smith",
        "profileImage": "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600",
        "role": "Student",
        "location": {
          "latitude": 34.0522,
          "longitude": -118.2437
        },
        "briefBio": "Computer science student with a passion for learning new technologies.",
        "contactInfo": {
          "email": "jane.smith@example.com",
          "phone": "+1 987-654-3210"
        },
        "additionalInfo": {
          "skills": ["Web Development", "React", "Devops"],
          "languages": ["English", "French"],
          "interests": ["Dancing", "Reading", "Traveling"]
        }
      },
      "3":{
        "name": "Emily Brown",
        "profileImage": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
        "role": "Teacher",
        "location": {
          "latitude": 51.5074,
          "longitude": -0.1278
        },
        "briefBio": "Experienced teacher specializing in mathematics and computer science.",
        "contactInfo": {
          "email": "emily.brown@example.com",
          "phone": "+44 20 7123 4567"
        },
        "additionalInfo": {
          "subjects": ["Mathematics", "Computer Science"],
          "interests": ["Travelling", "Music", "Reading", "Teaching"],
          "certifications": ["M.Ed", "Cisco Certified"]
        }
      },
      "4":{
        "name": "Michael Johnson",
        "profileImage": "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=600",
        "role": "Doctor",
        "location": {
          "latitude": 35.6895,
          "longitude": 139.6917
        },
        "briefBio": "Dedicated physician with a focus on internal medicine.",
        "contactInfo": {
          "email": "michael.johnson@example.com",
          "phone": "+81 3-1234-5678"
        },
        "additionalInfo": {
          "skills": ["Medicine", "Patient Care", "Research"],
          "languages": ["English", "Japanese"],
          "interests": ["Research", "Reading", "Swimming"]
        }
      },
      "5":{
        "name": "Sophia Williams",
        "profileImage": "https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?auto=compress&cs=tinysrgb&w=600",
        "role": "Software Engineer",
        "location": {
          "latitude": 37.7749,
          "longitude": -122.4194
        },
        "briefBio": "Full-stack developer with a passion for creating user-friendly applications.",
        "contactInfo": {
          "email": "sophia.williams@example.com",
          "phone": "+1 555-123-4567"
        },
        "additionalInfo": {
          "skills": ["Python", "Django", "Angular"],
          "projects": ["E-commerce Website", "Mobile App"],
          "interests": ["Technology", "Gaming"]
        }
      },
      "6":{
        "name": "William Davis",
        "profileImage": "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=600",
        "role": "Student",
        "location": {
          "latitude": 40.7128,
          "longitude": -74.0060
        },
        "briefBio": "Engineering student with a keen interest in robotics.",
        "contactInfo": {
          "email": "william.davis@example.com",
          "phone": "+1 123-789-4560"
        },
        "additionalInfo": {
          "skills": ["Java", "React", "JavaScript"],
          "languages": ["English", "French"],
          "interests": ["AI ", "Reading", "Gym"]
        }
      },
      "7":{
        "name": "Olivia Jones",
        "profileImage": "https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=600",
        "role": "Teacher",
        "location": {
          "latitude": 48.8566,
          "longitude": 2.3522
        },
        "briefBio": "Passionate educator with expertise in literature and history.",
        "contactInfo": {
          "email": "olivia.jones@example.com",
          "phone": "+33 1 23 45 67 89"
        },
        "additionalInfo": {
          "subjects": ["Literature", "History"],
          "interests": [ "Reading", "Teaching", "Travelling", "Fashion"],
          "publications": ["Educational Journals", "Books"]
        }
      },
      "8":{
        "name": "Daniel Wilson",
        "profileImage": "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600",
        "role": "Doctor",
        "location": {
          "latitude": 51.5074,
          "longitude": -0.1278
        },
        "briefBio": "Skilled surgeon with a focus on orthopedics.",
        "contactInfo": {
          "email": "daniel.wilson@example.com",
          "phone": "+44 20 7123 8901"
        },
        "additionalInfo": {
          "languages": ["English", "Japanese"],
          "interests": ["Research", "Reading", "Swimming"],
          "certifications": ["MD", "Fellowship in Orthopedics"]
        }
      },
      "9":{
        "name": "Isabella Taylor",
        "profileImage": "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=600",
        "role": "Software Engineer",
        "location": {
          "latitude": 34.0522,
          "longitude": -118.2437
        },
        "briefBio": "Front-end developer passionate about creating responsive and interactive web applications.",
        "contactInfo": {
          "email": "isabella.taylor@example.com",
          "phone": "+1 987-654-3219"
        },
        "additionalInfo": {
          "skills": ["HTML", "CSS", "JavaScript"],
          "frameworks": ["React", "Vue.js"],
          "hobbies": ["Photography", "Music"]
        }
      },
      "10":{
        "name": "Ethan White",
        "profileImage": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
        "role": "Doctor",
        "location": {
          "latitude": 35.6895,
          "longitude": 139.6917
        },
        "briefBio": "Experienced cardiologist dedicated to patient care and research.",
        "contactInfo": {
          "email": "ethan.white@example.com",
          "phone": "+81 3-1234-6789"
        },
        "additionalInfo": {
          "skills": ["Medicine", "Patient Care", "Research"],
          "languages": ["English", "Japanese"],
          "interests": ["Research", "Reading", "Swimming"]
        }
    }
};

// Call the function to insert multiple users data into Firestore

