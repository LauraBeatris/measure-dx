'use server';

// TODO - Implement tool rating
export async function rateTool(formData: FormData) {
  console.log('Hello World', Object.fromEntries(formData));
}
