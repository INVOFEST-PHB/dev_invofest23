import { ref, uploadBytes } from 'firebase/storage';

const uploadFile = async (file) => {
  const storageRef = ref(storage, 'uploads/' + file.name);
  await uploadBytes(storageRef, file);
  console.log('File uploaded successfully!');
};
