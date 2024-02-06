import {createContext, useState, useContext} from 'react';

const AppContext =  createContext({
  memory: null,
  operation:null,
  currentValue: 0,
  isDecimal: false,

  addNumber: (value)=> {

  },
  addOperation: (operation)=> {

  },
  getResult: ()=> {

  },
  executeAction: (action)=> {

  },
})


export default function CalculatorState({children}){


  const [memory, setMemory] = useState(null);
  const [operation, setOperation] = useState(null);
  const [currentValue, setCurrentValue] = useState(0);
  const [isReset, setIsReset] = useState(true);
  const [isDecimal, setIsDecimal] = useState(false)


  function handleAddNumber(value) {
    if(isReset){

      if(value === '.'){
        setIsDecimal(true)
      }else {
        const dot = isDecimal ? '.' : '';
        const newValue = currentValue.toString() + dot + value.toString();
        setCurrentValue(parseFloat(newValue));
        setIsReset(false);
        setIsDecimal(false);
      }
    }else {
      if(value ==='.'){
        setIsDecimal(true);
      }else {
        const dot = isDecimal ? '.' : '';
        const newValue = currentValue.toString() + dot + value.toString();
        setIsDecimal(false);
        setCurrentValue(parseFloat(newValue));
      }
    }
  }
  function handleAddOperation(op) {
      if(currentValue){
        if(operation){
          handleResult();
          setOperation(op)
        }else {
          setOperation(op);
          setMemory(currentValue)
          setCurrentValue(0)
          setIsReset(true);
        }
      }
  }
  function handleResult() {
    let result = 0;
    if(currentValue && operation && memory){
      switch(operation){
        case "+":
        result = parseFloat(currentValue) + parseFloat(memory);
        break;
      case "-":
        result = parseFloat(memory) - parseFloat(currentValue);
        break;
      case "*":
        result = parseFloat(currentValue) * parseFloat(memory);
        break;
      case "/":
        result = parseFloat(memory) / parseFloat(currentValue);
        break;
      case "%":
        result = (parseFloat(memory) / 100) * parseFloat(currentValue);
        break;
      default:
      }
      setCurrentValue(result);
      setOperation(null);
      setMemory(result);
      setIsReset(true);
      setIsDecimal(false);
    }
  }

  function clean(){
    setCurrentValue(0);
    setOperation(null);
    setMemory(0);
    setIsReset(true);
    setIsDecimal(false);
  }

  function deleteNumber(){
    const index = currentValue.toString().indexOf('.');
    if(index > 0){

      const numberDecimals = currentValue.toString().slice(index + 1).length;

      if(numberDecimals === 1){
        const min = Math.floor(currentValue);
        setCurrentValue(min)
      }else {
        const newNumber = parseFloat(currentValue).toFixed(numberDecimals - 1);
        setCurrentValue(newNumber)
      }

    }else {
      setCurrentValue(parseInt(currentValue / 100))
    }
  }


  function changeSign(){
    setCurrentValue(currentValue * -1)
  }

  function convertFloat(){
    if(currentValue.toString().indexOf('.') > 0) {

    }else {
      handleAddNumber('.');
    }
  }

  function handleExecuteAction(action){
    switch(action){
      case "=":
        handleResult();
        break;
      case "AC":
        clean()
        break;
      case "<=":
        deleteNumber()
        break;
      case "+/-":
        changeSign()
        break;
      case ".":
        convertFloat()
        break;
      default:
    }
  }


  return (
    <>
      <AppContext.Provider value={
        {
          memory, 
          operation, 
          currentValue,
          isDecimal, 
          addNumber: handleAddNumber, 
          addOperation: handleAddOperation, 
          getResult : handleResult,
          executeAction: handleExecuteAction
        }
        }>
        {children}
      </AppContext.Provider>
    </>
  )
}

export function useAppContext(){
  return useContext(AppContext)
}