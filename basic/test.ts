const data = [
  {
    id: 1,
    recipeId: 1,
    stepNumber: 1,
    description: "ini adalah sebuah step memasak capcay",
    timer: 20,
    image: null,
    stepIngredients: [
      {
        recipeId: 1,
        stepId: 1,
        ingredientId: 1,
        amount: 2,
        unit: "sendok",
      },
    ],
  },
  {
    id: 2,
    recipeId: 1,
    stepNumber: 1,
    description: "ini adalah sebuah step memasak capcay",
    timer: 20,
    image: null,
    stepIngredients: [
      {
        recipeId: 1,
        stepId: 1,
        ingredientId: 1,
        amount: 3,
        unit: "sendok",
      },
    ],
  },
];

const newDataArray = data.map((e) => {
    const {stepIngredients, ...newData} = e;
    const dataResult = {
        ...newData,
        amount: e.stepIngredients[0].amount,
        unit: e.stepIngredients[0].unit,
    }
    return dataResult;
});

console.log(newDataArray);
