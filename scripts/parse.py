import json

f = open("public/ingredients.txt", "r")
fw = open("data.json", "w")
ingredients = f.read().split("\n")
parsedIngredients = []
for ingredient in ingredients:
  food, diet = ingredient.split(",")
  obj = {"food": food.strip(), "diet": diet.strip()}
  parsedIngredients.append(obj)

json.dump(parsedIngredients, fw)
f.close()
fw.close()