const historyData = [
  {
    name: 'Muhammad Ali',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Muhammad_Ali%2C_gtfy.00140_%28cropped%29.jpg/640px-Muhammad_Ali%2C_gtfy.00140_%28cropped%29.jpg',
    birthDate: '1942-01-17',
    category: 'Sports',
    contribution:
      'Boxing champion and activist against racial and social injustices.',
    legacy: 'Champion for peace and justice',
    notableWork: 'Refusing draft for Vietnam War, humanitarian work'
  },
  {
    name: 'Nina Simone',
    image:
      'https://commons.wikimedia.org/wiki/File:Nina_Simone_1965_-_restoration1.jpg',
    birthDate: '1933-02-21',
    category: 'Music',
    contribution:
      'Singer, songwriter, and activist who spoke out against racism and injustice.',
    legacy: 'Voice of the civil rights movement in music',
    notableWork: 'Feeling Good, Mississippi Goddam'
  },
  {
    name: 'Malcolm X',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Malcolm_X_in_1964.jpg/640px-Malcolm_X_in_1964.jpg',
    birthDate: '1925-05-19',
    category: 'Civil Rights',
    contribution:
      'Prominent figure in the Nation of Islam and advocate for Black empowerment.',
    legacy: 'Radical voice in the fight for justice',
    notableWork: 'The Autobiography of Malcolm X'
  },
  {
    name: 'James Baldwin',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/James_Baldwin_37_Allan_Warren.jpg/640px-James_Baldwin_37_Allan_Warren.jpg',
    birthDate: '1924-08-02',
    category: 'Literature',
    contribution: 'Writer and activist known for works on race and sexuality.',
    legacy: 'Influenced global discussions on race',
    notableWork: 'The Fire Next Time'
  },
  {
    name: 'Michael Jackson',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Michael_Jackson_1988.jpg/640px-Michael_Jackson_1988.jpg',
    birthDate: '1958-08-29',
    category: 'Music',
    contribution:
      'The King of Pop, known for breaking racial barriers in the music industry.',
    legacy: 'Pioneered cross-cultural influence in music and entertainment',
    notableWork: 'Thriller, Beat It, Billie Jean'
  },
  {
    name: 'Shirley Chisholm',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Shirley_Chisholm.jpg/640px-Shirley_Chisholm.jpg',
    birthDate: '1924-11-30',
    category: 'Politics',
    contribution:
      'First Black woman elected to the U.S. Congress and first to run for president.',
    legacy: 'Trailblazer for women in politics',
    notableWork: 'Unbought and Unbossed'
  },
  {
    name: 'Maya Angelou',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Portrait_photograph_of_Maya_Angelou_by_Jimmy_Ellis%2C_April_25%2C_1978.webp/640px-Portrait_photograph_of_Maya_Angelou_by_Jimmy_Ellis%2C_April_25%2C_1978.webp.png',
    birthDate: '1928-04-04',
    category: 'Literature',
    contribution: 'Poet, memoirist, and civil rights activist.',
    legacy: 'Voice for African American literature',
    notableWork: 'I Know Why the Caged Bird Sings'
  },
  {
    name: 'W.E.B. Du Bois',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/W.E.B._Du_Bois_by_James_E._Purdy%2C_1907_%28cropped%29.jpg/640px-W.E.B._Du_Bois_by_James_E._Purdy%2C_1907_%28cropped%29.jpg',
    birthDate: '1868-02-23',
    category: 'Activism',
    contribution: 'Civil rights leader and co-founder of the NAACP.',
    legacy: 'Advocate for Pan-Africanism and civil rights',
    notableWork: 'The Souls of Black Folk'
  },
  {
    name: 'Serena Williams',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Serena_Williams_US_Open_2013.jpg/640px-Serena_Williams_US_Open_2013.jpg',
    birthDate: '1981-09-26',
    category: 'Sports',
    contribution: 'One of the greatest tennis players of all time.',
    legacy: 'Inspiration to female athletes worldwide',
    notableWork: '23-time Grand Slam champion'
  },
  {
    name: 'Michael Jordan',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Michael_Jordan.jpg/640px-Michael_Jordan.jpg',
    birthDate: '1963-02-17',
    category: 'Sports',
    contribution:
      'Widely regarded as the greatest basketball player of all time.',
    legacy: 'Global ambassador for basketball and entrepreneurship',
    notableWork: '6 NBA championships with Chicago Bulls'
  },
  {
    name: 'Marcus Garvey',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Marcus_Garvey_1924-08-05.jpg/640px-Marcus_Garvey_1924-08-05.jpg',
    birthDate: '1887-08-17',
    category: 'Activism',
    contribution:
      'Leader of the Pan-African movement and advocate for Black self-sufficiency.',
    legacy: 'Pioneer of Black nationalism and Pan-Africanism',
    notableWork: 'Universal Negro Improvement Association (UNIA)'
  },
  {
    name: 'Thurgood Marshall',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Thurgood_Marshall_and_family%2C_1965.png/640px-Thurgood_Marshall_and_family%2C_1965.png',
    birthDate: '1908-07-02',
    category: 'Law',
    contribution:
      'First African American Supreme Court Justice and civil rights lawyer.',
    legacy: 'Champion for racial equality in the legal system',
    notableWork: 'Brown v. Board of Education'
  },
  {
    name: 'Arthur Ashe',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Arthur_Ashe_%28cropped%29.jpg/640px-Arthur_Ashe_%28cropped%29.jpg',
    birthDate: '1943-07-10',
    category: 'Sports',
    contribution:
      'First African American male to win a Grand Slam title in tennis.',
    legacy: 'Promoted racial equality in sports',
    notableWork: 'Advocate for social justice and HIV/AIDS awareness'
  },
  {
    name: 'John Lewis',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/John_Lewis-2006_%28cropped%29.jpg/640px-John_Lewis-2006_%28cropped%29.jpg',
    birthDate: '1940-02-21',
    category: 'Activism',
    contribution:
      'Civil rights leader and congressman who fought for racial equality and justice.',
    legacy: 'Champion for civil rights and voting rights',
    notableWork: 'March, Speech at the March on Washington'
  },
  {
    name: 'Martin Luther King Jr.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Martin_Luther_King_press_conference_01269u_edit.jpg/640px-Martin_Luther_King_press_conference_01269u_edit.jpg',
    birthDate: '1929-01-15',
    category: 'Activism',
    contribution:
      'Leader of the civil rights movement, known for his advocacy of nonviolent resistance.',
    legacy: 'Symbol of peace and equality worldwide',
    notableWork: 'I Have a Dream Speech, Civil Rights Act of 1964'
  },
  {
    name: 'Samuel Dewitt Proctor',
    image:
      'https://img.diverseeducation.com/files/base/diverse/all/image/2021/06/edu.Proctor-Samuel-D.png?auto=format%2Ccompress&fit=max&q=70&w=400',
    birthDate: '1921-11-05',
    category: 'Religion',
    contribution:
      'Pastor, educator, and civil rights leader who advocated for racial and social justice.',
    legacy: 'Advocate for social justice within religious communities',
    notableWork: 'Ministry and civil rights activism'
  },
  {
    name: 'Mae Jemison',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Mae_Carol_Jemison_%28cropped%29.jpg/640px-Mae_Carol_Jemison_%28cropped%29.jpg',
    birthDate: '1956-10-17',
    category: 'Science',
    contribution: 'First African American woman in space.',
    legacy: 'Inspiration for young women and minorities in STEM',
    notableWork: 'NASA astronaut, physician, engineer'
  },
  {
    name: 'Althea Gibson',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Althea_Gibson_-_El_Grafico_2033-crop.jpg/640px-Althea_Gibson_-_El_Grafico_2033-crop.jpg',
    birthDate: '1927-08-25',
    category: 'Sports',
    contribution:
      'First African American woman to compete in the U.S. National Championships.',
    legacy: 'Paved the way for African American women in sports',
    notableWork: 'Wimbledon Champion, US Open Champion'
  },
  {
    name: 'Alvin Ailey',
    image:
      'https://s3.amazonaws.com/cms.ipressroom.com/292/files/201604/5711c681dfc2a546ab150aee_158240_Alvin_Ailey_Photo_by_Eric_N._Hong/158240_Alvin_Ailey_Photo_by_Eric_N._Hong_thmb.jpg',
    birthDate: '1931-01-05',
    category: 'Dance',
    contribution:
      'Revolutionized African American modern dance with his dance company.',
    legacy:
      'Influential choreographer and founder of the Alvin Ailey Dance Theater',
    notableWork: 'Revelations'
  },
  {
    name: 'Matthew Henson',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Matthew_Henson_1910.jpg/640px-Matthew_Henson_1910.jpg',
    birthDate: '1866-08-08',
    category: 'Exploration',
    contribution: 'First African American to reach the North Pole.',
    legacy: 'Pioneering African American explorer',
    notableWork: 'Explorer with Robert Peary'
  },
  {
    name: 'Ida B. Wells',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Mary_Garrity_-_Ida_B._Wells-Barnett_-_Google_Art_Project_crop.jpg/640px-Mary_Garrity_-_Ida_B._Wells-Barnett_-_Google_Art_Project_crop.jpg',
    birthDate: '1862-07-16',
    category: 'Activism',
    contribution: 'Journalist and early leader in the civil rights movement.',
    legacy: 'Pioneer in the fight against racism and lynching',
    notableWork: 'Anti-lynching campaign, Southern Horrors'
  },
  {
    name: 'Toni Morrison',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Toni_Morrison.jpg/640px-Toni_Morrison.jpg',
    birthDate: '1931-02-18',
    category: 'Literature',
    contribution:
      'Novelist and essayist, winner of the Nobel Prize in Literature.',
    legacy: 'Major voice in African American literature',
    notableWork: 'Beloved, Song of Solomon'
  },
  {
    name: 'Frederick Douglass',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Frederick_Douglass_%28circa_1879%29_%28cropped%29.jpg/640px-Frederick_Douglass_%28circa_1879%29_%28cropped%29.jpg',
    birthDate: '1818-02-14',
    category: 'Abolitionist',
    contribution:
      'Leader in the abolitionist movement, former slave, and renowned orator.',
    legacy: 'Inspired future civil rights movements',
    notableWork: 'Narrative of the Life of Frederick Douglass'
  },
  {
    name: 'Kamala Harris',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Kamala_Harris_Vice_Presidential_Portrait.jpg/640px-Kamala_Harris_Vice_Presidential_Portrait.jpg',
    birthDate: '1964-10-20',
    category: 'Politics',
    contribution:
      'First female, Black, and South Asian Vice President of the U.S.',
    legacy: 'Shattered barriers for women and minorities',
    notableWork: 'Historic vice presidency'
  },
  {
    name: 'Oprah Winfrey',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Oprah_Winfrey_2016.jpg/640px-Oprah_Winfrey_2016.jpg',
    birthDate: '1954-01-29',
    category: 'Media',
    contribution:
      'Media mogul, philanthropist, and advocate for social change.',
    legacy: 'Influenced the media landscape and philanthropy',
    notableWork: 'The Oprah Winfrey Show'
  }
]

export default historyData
