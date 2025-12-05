const DB_NAME = 'LogicQuizDB';
const DB_VERSION = 2; // Bumped version to ensure update
const STORE_NAME = 'questions';

function initDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      // If store exists, we might want to clear it or delete it to ensure fresh data
      if (db.objectStoreNames.contains(STORE_NAME)) {
        db.deleteObjectStore(STORE_NAME);
      }

      const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });

      // Populate initial data from questionBank.js
      if (typeof initialQuestions !== 'undefined') {
        initialQuestions.forEach(q => {
          store.add(q);
        });
        console.log('DB initialized/updated with ' + initialQuestions.length + ' questions');
      } else {
        console.error('initialQuestions not found! Make sure questionBank.js is loaded.');
      }
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      console.error('DB error:', event.target.error);
      reject(event.target.error);
    };
  });
}

async function getRandomQuestions(count) {
  try {
    const db = await initDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAll();

      request.onsuccess = () => {
        const allQuestions = request.result;
        if (allQuestions.length === 0) {
          console.warn("No questions found in DB.");
          resolve([]);
          return;
        }

        // Shuffle using Fisher-Yates
        for (let i = allQuestions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
        }

        resolve(allQuestions.slice(0, count));
      };

      request.onerror = (e) => reject(e);
    });
  } catch (error) {
    console.error("Error getting questions from DB:", error);
    return [];
  }
}
