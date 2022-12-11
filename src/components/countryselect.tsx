import { CountryName } from "../assets/constants/countryname"


interface AppProps {
  changeEvent: any
}

const CountrySelect = ({ changeEvent }: AppProps) => {
  return (
    <select defaultValue={localStorage.getItem("country") || ""} onChange={(e) => changeEvent(e.target.value)} className="form-select" aria-label="Default select example">
      <option selected >-Select-</option>
      {CountryName.map((country, index) => {
        return <option key={index} value={country}>{country}</option>
      })}
    </select>
  )
}

export default CountrySelect