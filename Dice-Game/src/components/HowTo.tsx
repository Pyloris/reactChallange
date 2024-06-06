
function HowTo() {
    return (
      <div className="bg-howTo px-10 py-6 rounded-lg">
        <div className="font-roboto font-bold text-xl mb-5">How to play dice game</div>
        <ul className="flex gap-3 flex-col">
          <li>1. Select any number.</li>
          <li>2. Click on dice image.</li>
          <li>3. After click, if selected number is same as dice number, you will get same points as dice.</li>
          <li>4. If you guess wrong, then 2 points will be deducted.</li>
        </ul>
      </div>
    )
}

export default HowTo