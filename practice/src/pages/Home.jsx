import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function CountryCard({ name, image }) {
    return (
        <div style={{
            width: "220px",
            border: "1px solid #eee",
            borderRadius: "10px",
            overflow: "hidden",
            background: "#d1d1d1",
        }}>
            <img
                src={image}
                alt={name}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <div style={{ padding: "12px" }}>
                <p style={{ fontWeight: "500", fontSize: "16px", margin: "0 0 6px", color: 'default' }}>{name}</p>
            </div>
        </div>
    );
}

export default function Home() {
    const [isLoading, setLoading] = useState(false)
    const [countries, setCountries] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchCountries() {
            setLoading(true);
            try {
                const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,cca3')
                if (!response.ok) {
                    throw new Error('API ERROR');
                }
                const data = await response.json();
                setCountries(data);
            } catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchCountries();
    }, [])

    if (isLoading) return (
        <Box sx={{justifyContent: 'center', paddingTop: '50%' }}>
            <CircularProgress />
        </Box>
    )

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            {!countries || countries.length == 0 ? (<p>No Countries Found</p>) :
                countries.map((country) => (
                    <Link style={{textDecoration: 'none', color: 'grey'}} key={country.name.official} to={`/country/${country.name.official}`}>
                        <CountryCard
                            name={country.name.official}
                            image={country.flags.png}
                        />
                    </Link>
                ))
            }
        </div>
    )
}