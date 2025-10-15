
import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndiData } from "../../Api/PostApi";
import Loader from "../Loder/Loader.jsx";

export default function CountryDetials() {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      try {
        const response = await getCountryIndiData(params.name);
        if (response.status === 200 && response.data?.length > 0) {
          setCountry(response.data[0]);
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    });
  }, [params.name]);

  if (isPending || !country) return <Loader />;

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        {country && (
          <div className="country-image grid grid-two-cols">


            {country?.flags?.svg || country?.flags?.png ? (
              <img
                src={country.flags.svg || country.flags.png}
                alt={country.flags?.alt || `Flag of ${country.name?.common}`}
                className="flag"
              />
            ) : (
              <p className="no-flag">Flag not available</p>
            )}



            <div className="country-content">
              <p className="card-title">{country.name?.official}</p>

              <div className="infoContainer">
                {country.name?.nativeName && (
                  <p>
                    <span className="card-description">Native Names:</span>{" "}
                    {Object.keys(country.name.nativeName)
                      .map((key) => country.name.nativeName[key].common)
                      .join(", ")}
                  </p>
                )}

                <p>
                  <span className="card-description">Population:</span>{" "}
                  {country.population?.toLocaleString()}
                </p>
                <p>
                  <span className="card-description">Region:</span> {country.region}
                </p>
                <p>
                  <span className="card-description">Sub Region:</span> {country.subregion}
                </p>
                <p>
                  <span className="card-description">Capital:</span>{" "}
                  {country.capital?.join(", ")}
                </p>
                <p>
                  <span className="card-description">Top Level Domain:</span>{" "}
                  {country.tld?.join(", ")}
                </p>
                {country.currencies && (
                  <p>
                    <span className="card-description">Currencies:</span>{" "}
                    {Object.keys(country.currencies)
                      .map((key) => country.currencies[key].name)
                      .join(", ")}
                  </p>
                )}
                {country.languages && (
                  <p>
                    <span className="card-description">Languages:</span>{" "}
                    {Object.keys(country.languages)
                      .map((key) => country.languages[key])
                      .join(", ")}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="country-card-backBtn">
          <NavLink to="/country" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}




