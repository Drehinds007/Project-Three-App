import historyData from '../historyData'
import FigureCard from './FigureCard'

const FiguresContainer = () => {
  return (
    <div className="figures-container">
      {historyData.map((figure) => (
        <div className="figures-container">
          {figures.map((figure, index) => (
            <FigureCard key={index} figure={figure} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default FiguresContainer
