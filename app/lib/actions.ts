'use server';

export async function createRecipe(formData: FormData) {
  
  const rawData = {
    diet: formData.get('diet'),
    ingredients: formData.getAll('ingredients')
  };

  console.log(rawData);
  try {
    const response = await fetch("https://5urhvcrdr0.execute-api.us-east-1.amazonaws.com/dev/generate-recipe", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(rawData)
    })

    const jsonObj = await response.json();
    console.log(jsonObj);
    const obj = JSON.parse(jsonObj.body);
    console.log(obj);

  } catch (error) {
    return `Error Message: ${error}`
  }
}