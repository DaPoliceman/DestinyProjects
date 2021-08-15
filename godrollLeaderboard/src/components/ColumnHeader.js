import './style.css'

const ColumnHeader = ({gunInfo}) => {
  console.log(gunInfo)

  return (

  <thead>
    <tr>
      <th key="headerName">
        Name
      </th>

      <th key="headerTotalPoints">
        Total Points
      </th>

      {Object.entries(gunInfo).map(([key, info]) => (
        <th key={key}>
          <p>{info.name}</p>
        </th>
      ))}
    </tr>
  </thead>
  )
}

export default ColumnHeader


//  <img className="align-bottom" src={'https://www.bungie.net/' + info["icon"]} alt="emblem" className="img-fluid" />