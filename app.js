fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => displayCountries(data))

const displayCountries = countries => {

  console.log(countries);

    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
       
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        const countryInfo = `
        <img src="${country.flags.png}">
        <p>${country.name.common}</p>
        <p>Nome Nativo: ${country.name.nativeName}</p>
        <p>Capital: ${country.capital}</p>
        <p>Região: ${country.region}</p>
        <p>Sub-Região ${country.subregion}</p>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });
    
}
