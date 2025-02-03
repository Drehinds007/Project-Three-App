import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import FigureCard from './components/FigureCard'

const App = () => {
  const figures = [
    {
      name: 'Martin Luther King Jr.',
      dob: '1929-01-15',
      contribution: 'Civil Rights Leader',
      category: 'Social Justice'
    },
    {
      name: 'Madam C.J. Walker',
      dob: '1867-12-23',
      contribution: 'First Female Self-Made Millionaire',
      category: 'Business'
    }
  ]

  return (
    <div>
      <Header />
      <Navigation />
      <div className="figure-container">
        {figures.map((figure, index) => (
          <FigureCard key={index} figure={figure} />
        ))}
      </div>
    </div>
  )
}

export default App
