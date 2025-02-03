const FigureCard = ({ figure }) => {
  return (
    <div className="figure-card">
      <h2>{figure.name}</h2>
      <p>
        <strong>DOB:</strong> {figure.dob}
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
