const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas (the)",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia (Plurinational State of)",
  "Bonaire, Sint Eustatius and Saba",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil"];

function searchCountry(event) {
  const inputValue = document.getElementById('name').value;

  const result = [];

  countryList.forEach(country => {
    const regex = new RegExp(`${inputValue}`, 'i');
    const trouve = regex.test(country);
    if (trouve) {
      result.push(country);
    }
  })

  displayCountry(result);

}

function displayCountry(countries){
  const countryContainer = document.getElementById('countryContainer');
  console.log(countryContainer);
  while (countryContainer.firstChild) {
      countryContainer.removeChild(countryContainer.lastChild);
    }

  countries.forEach( country => {
    const newLi = document.createElement('li');
    newLi.innerText = country;
    countryContainer.appendChild(newLi);
  })



}
