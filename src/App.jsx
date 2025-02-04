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
        'https://www.usatoday.com/gcdn/-mm-/a92feed2559d686f4c525856f3da8abe08587220/c=82-0-1370-1713/local/-/media/USATODAY/GenericImages/2014/05/28//1401284180000-XXX-ANGELOU-MOM-BOOKS-2370.jpg'
    },
    {
      name: 'Malcolm X',
      birthDate: '1925-05-19',
      contribution:
        'Prominent figure in the Nation of Islam and advocate for Black empowerment.',
      category: 'Civil Rights',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Malcolm_X_in_1964.jpg/640px-Malcolm_X_in_1964.jpg'
    },
    {
      name: 'Serena Williams',
      birthDate: '1981-09-26',
      contribution: 'One of the greatest tennis players of all time.',
      category: 'Sports',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Serena_Williams_US_Open_2013.jpg/640px-Serena_Williams_US_Open_2013.jpg'
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
