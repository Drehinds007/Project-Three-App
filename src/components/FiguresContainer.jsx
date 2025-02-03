import historyData from '../historyData'
import FigureCard from './FigureCard'

const FiguresContainer = ({ figures }) => {
  return (
    <div className="figures-container">
      {figures.map((figure, index) => (
        <div key={index} className="figure">
          <img src={figure.image} alt={figure.name} className="figure-image" />
          <h3>{figure.name}</h3>
          <p>Birthdate: {figure.birthDate}</p>
          <p>Contribution: {figure.contribution}</p>
          <p>Category: {figure.category}</p>
        </div>
      ))}
    </div>
  )
}

export default FiguresContainer
