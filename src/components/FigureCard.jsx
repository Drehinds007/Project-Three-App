const FigureCard = ({ figure }) => {
  return (
    <div className="figure-card">
      <h3>{figure.name}</h3>
      <p>
        <strong>Born:</strong> {figure.dob}
      </p>
      <p>
        <strong>Contribution:</strong> {figure.contribution}
      </p>
      <p>
        <strong>Category:</strong> {figure.category}
      </p>
    </div>
  )
}
export default FigureCard
