'use server';

// TODO - Implement tool rating
export async function rateTool(formData: FormData) {
  const formEntries = Object.fromEntries(formData);
  console.log(formEntries);
}
