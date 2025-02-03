import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import FigureCard from './components/FigureCard'
import FiguresContainer from './components/FiguresContainer'

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
    },
    {
      name: 'Barack Obama',
      dob: '1961-08-04',
      contribution: '44th President of the U.S.',
      category: 'Politics'
    },
    {
      name: 'Maya Angelou',
      dob: '1928-04-04',
      contribution: 'Poet and Civil Rights Activist',
      category: 'Literature'
    },
    {
      name: 'Rosa Parks',
      dob: '1913-02-04',
      contribution: 'Civil Rights Leader',
      category: 'Social Justice'
    }
  ]

  return (
    <div>
      <Header />
      <Navigation />
      <FiguresContainer figures={figures} />
    </div>
  )
}

export default App
