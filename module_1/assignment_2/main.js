function mainFunc(parentInputNum1) {
  const num1 = 10;
  return (childInputNum1) => {
    console.log({
      parentInputNum1,
      childInputNum1,
      total: num1 + parentInputNum1 + childInputNum1,
    });
  };
}

const childFunc = mainFunc(10);
childFunc(8);
childFunc(7);
