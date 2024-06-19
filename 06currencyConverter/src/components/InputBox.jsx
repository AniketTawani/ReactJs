import React, { useId } from "react";

function InputBox({
  label, // to - from batane ke liye
  amount, // amount batane ke liye
  onAmountChange, // amount change hone ke baad jo function call honga woh
  onCurrencyChange, // currency change hoen ke baad jo function call hoga woh
  currencyOptions = [], // api se jo fetch krke itni saari list mili h woh display krne k liye
  selectCurrency = "usd", // default value of the currency
  amountDisable = false, // entered amount changeable nahi krna h toh - true
  currencyDisable = false, // entered currency -=-
  className = "", // if user itself gives you the additional styles
}) {
  const amountInputId = useId(); // this hook is used for the random id generation
  // always remember don't use this hook for the key value generation.
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId} // for is the reserved word so we are using htmlFor here
          className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId} // binding occurs
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value)) // small check that onAmountChange function exists if it exists then use it
            // usually event.target.value will return a string value that's why we are using Number here to convert it into number we required.
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency} // default value
          disabled={currencyDisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} // here we required string that's why we are not converting it into number
        >
          {currencyOptions.map((currency) => (
            // if we have 1000's of record which gonna render this option then it affects on it's performance 
            // so we have key concept here to improve the performace of the loop
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
