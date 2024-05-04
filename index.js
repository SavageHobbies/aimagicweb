// Import the initialized Firebase app and services from firebase.js
import { app, analytics } from './firebase.js';
import { db, storage } from './firebase.js';

// Import additional Firebase services as needed
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Get references to the Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// Use the Firebase services in your code
document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form values
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const shipping = document.getElementById('shipping').value;
    const images = document.getElementById('images').files;
    
    // Create a new listing document in Firestore
    const listingRef = await addDoc(collection(db, 'listings'), {
      title,
      description,
      price,
      shipping,
      created: serverTimestamp()
    });
    
    // Upload images to Cloud Storage
    const imageUrls = [];
    for (const image of images) {
      const imageRef = ref(storage, `listings/${listingRef.id}/${image.name}`);
      await uploadBytes(imageRef, image);
      const downloadUrl = await getDownloadURL(imageRef);
      imageUrls.push(downloadUrl);
    }
    
    // Update the listing document with image URLs
    await updateDoc(listingRef, { images: imageUrls });
    
    // Reset the form
    document.querySelector('form').reset();
    document.getElementById('image-preview').innerHTML = '';
    
    console.log('Listing created successfully!');
  });
  