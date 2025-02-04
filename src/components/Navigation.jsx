const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="https://www.archives.gov/research/african-americans/individuals">
            People
          </a>
        </li>
        <li>
          <a href="https://www.history.com/topics/black-history">History</a>
        </li>
        <li>
          <a href="https://www.fs.usda.gov/people/aasg/calendar/timeline.html">
            Events
          </a>
        </li>
        <li className="nav-juneteenth">
          <a href="https://nmaahc.si.edu/explore/stories/historical-legacy-juneteenth">
            Juneteenth
          </a>
        </li>
        <li className="nav-bhm">
          <a href="https://blackhistorymonth.gov/">Black History Month</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
