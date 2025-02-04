import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import FiguresContainer from './components/FiguresContainer'

const App = () => {
  const figures = [
    {
      name: 'Muhammad Ali',
      birthDate: '1942-01-17',
      contribution: 'Boxing legend and activist',
      category: 'Sports',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Muhammad_Ali%2C_gtfy.00140_%28cropped%29.jpg/640px-Muhammad_Ali%2C_gtfy.00140_%28cropped%29.jpg'
    },
    {
      name: 'Nina Simone',
      birthDate: '1933-02-21',
      contribution: 'Jazz and civil rights activist',
      category: 'Music',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Nina_Simone_1965.jpg/640px-Nina_Simone_1965.jpg'
    },
    {
      name: 'Michael Jackson',
      birthDate: '1958-08-29',
      contribution:
        'The King of Pop, known for breaking racial barriers in the music industry.',
      category: 'Music',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Michael_Jackson_1988.jpg/640px-Michael_Jackson_1988.jpg'
    },
    {
      name: 'Maya Angelou',
      birthDate: '1928-04-04',
      contribution: 'Poet, memoirist, and civil rights activist.',
      category: 'Literature',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Portrait_photograph_of_Maya_Angelou_by_Jimmy_Ellis%2C_April_25%2C_1978.webp/640px-Portrait_photograph_of_Maya_Angelou_by_Jimmy_Ellis%2C_April_25%2C_1978.webp.png'
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
