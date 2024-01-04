import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);

    return {
      photo: photo.body,
      user: user,
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      photo: null,
      user: null,
    };
  }
}
