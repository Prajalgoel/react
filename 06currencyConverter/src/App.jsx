import React from 'react'
import { useState, useEffect } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './customhooks/useCurrencyInfo'

function App() {
  const [initialCurrency, setinitialCurrency] = useState("usd")
  const [FinalCurrency, setFinalCurrency] = useState("inr")
  const [initialAmount, setinitialAmount] = useState(0)
  const [finalAmount, setfinalAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(initialCurrency)
  const currencyOptions = Object.keys(currencyInfo)

  // first approach
  // const convert = (amount) => {
  //   setfinalAmount(amount * currencyInfo[FinalCurrency])
  // }

  // 2nd approach
  const convert = () => {
    if (currencyInfo[FinalCurrency]) {
      setfinalAmount(initialAmount * currencyInfo[FinalCurrency])
    }
  }
  useEffect(() => {
    convert()
  }, [initialAmount, currencyInfo, FinalCurrency])

  const swap = () => {
    setinitialAmount(finalAmount)
    setfinalAmount(initialAmount)
    setinitialCurrency(FinalCurrency)
    setFinalCurrency(initialCurrency)
  }

  

  return (
    <div className='h-screen w-screen flex justify-center items-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(https://images.moneycontrol.com/static-mcnews/2024/11/20241117131647_stock-market-forex-trading-graph.jpg)` }}>
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}
        >
          <InputBox
            label="From"
            className="w-full mb-1"
            selectedCurrency={initialCurrency}
            amount={initialAmount}
            onAmountChange={(amount) => {
              if (amount<0) {
                return
              }
              setinitialAmount(amount)
              // convert()    //not works  because initialAmount not changed immediately but scheduled so it uses previous initialAmount
              // convert(amount)  // 1st approach
              }
            }
            onCurrencyChange={(currency) => setinitialCurrency(currency)}
            currencyOptions={currencyOptions}
          />

          <div className="relative w-full h-0.5">
            <button
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swap}
              type="button"
            >swap</button>
          </div>

          <InputBox
            label="To"
            className='w-full mt-1 mb-4'
            selectedCurrency={FinalCurrency}
            amount={finalAmount}
            amountDisabled
            onCurrencyChange={(currency) => setFinalCurrency(currency)}
            currencyOptions={currencyOptions}
          />

          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
            Convert {initialCurrency.toUpperCase()} to {FinalCurrency.toUpperCase()}
          </button>
        </form>

      </div>
    </div>
  )
}

export default App