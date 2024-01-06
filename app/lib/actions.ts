'use server';

export async function createRecipe(formData: FormData) {
  
  const rawData = {
    diet: formData.get('diet'),
    ingredients: formData.getAll('ingredients')
  };

  console.log(rawData);
}