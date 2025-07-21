// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set, get } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Create references
export const likesRef = ref(database, 'likes');
export const visitsRef = ref(database, 'visits');
export const visitorCountRef = ref(database, 'visitorCount');

// Initialize database with default values if they don't exist
const initializeDatabase = async () => {
  console.log('Starting database initialization...');
  
  try {
    // First, try to write a test value to check permissions
    await set(ref(database, 'test'), {
      timestamp: Date.now(),
      status: 'Testing database access'
    });
    console.log('Database access test successful');

    // Initialize core data structure
    const dbRef = ref(database);
    const snapshot = await get(dbRef);

    if (!snapshot.exists()) {
      // Database is empty, initialize everything
      await set(dbRef, {
        likes: 0,
        visitorCount: 0,
        visits: {
          metadata: {
            created: new Date().toISOString(),
            description: 'Visitor logs for portfolio website'
          }
        }
      });
      console.log('Database initialized with complete structure');
    } else {
      // Check and initialize only missing nodes
      if (!(await get(likesRef)).exists()) {
        await set(likesRef, 0);
        console.log('Likes counter initialized');
      }
      
      if (!(await get(visitorCountRef)).exists()) {
        await set(visitorCountRef, 0);
        console.log('Visitor counter initialized');
      }
      
      if (!(await get(visitsRef)).exists()) {
        await set(visitsRef, {
          metadata: {
            created: new Date().toISOString(),
            description: 'Visitor logs for portfolio website'
          }
        });
        console.log('Visits node initialized');
      }
    }
  } catch (error) {
    console.error('Database initialization error:', error);
    throw error; // Re-throw to handle in the calling code
  }
};

// Run initialization
console.log('Starting Firebase initialization...');
initializeDatabase().catch(error => {
  console.error('Failed to initialize database:', error);
});

export { onValue, set, ref, database, get };
