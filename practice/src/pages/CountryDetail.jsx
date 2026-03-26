import { useState, useEffect } from "react";
import { useParams, useNavigate} from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import '../app.css'

export default function CountryDetails() {
    const { name } = useParams();
    const [country, setCountry] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        console.log(name)
        fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Country Not Found");
                }
                return response.json();
            })
            .then(data => {
                setCountry(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            })
    }, [name])

    let navigate = useNavigate();

    if (isLoading) return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress />
        </Box>
    )

    if (error) {
        return <div>Error:{error}</div>
    }

    if (!country) return null;

    return (
        <div>
            <div style={{
                alignItems: 'center',
                paddingTop: '10%'
            }}>
                <img
                    src={country[0].flags.png}
                    alt={country[0].flags.alt}
                    style={{
                        width: "60%",
                        height: "60%",
                        objectFit: "cover",
                    }}
                />
                <div style={{ padding: "12px" }}>
                    <p style={{ fontWeight: "500", fontSize: "40px", margin: "0 0 6px", color: 'default' }}>{country[0].name.official}</p>
                </div>
            </div>
            <div style={{padding: '20px', textAlign: 'left', color: 'white', backgroundColor: '#ffffff17', marginLeft: '20%', marginRight: '20%', border: 'solid 2px #ffffff83', borderRadius: '10px' }}>
                <p>Region: {country[0].region}</p>
                <p>Capital: {country[0].capital}</p>
                <p>Population: {country[0].population}</p>
                <p>Time zone: {country[0].timezones}</p>
            </div>
            <Button className="nav-link" style={{ marginTop: '40px', color: 'white'}} onClick={() => navigate(-1)}>Back</Button>
        </div>
    )
}