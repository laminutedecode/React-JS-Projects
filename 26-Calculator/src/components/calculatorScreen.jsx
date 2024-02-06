
import { useAppContext } from "./calculatorState"

export default function CalculatorScreen(){

  const calculator = useAppContext();
  return (
    <>
    <div className="calculatorScreen">
      <div  className="calculatorInfos">
        <span>Memory: {calculator.memory}</span>
        <span>operation: {calculator.operation}</span>
        <span>Type: {calculator.isDecimal ? "Décimal": "Entier"}</span>
      </div>
      <div className="calculatorCurrentValue">
        {calculator.currentValue}
        {calculator.isDecimal ? ".": ""}
      </div>
    </div>

    </>
  )
}