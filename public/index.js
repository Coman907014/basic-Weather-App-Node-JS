const clickButton = document.getElementById('getSearchedLocation');
document.addEventListener('click', (event) => {
    const input = document.getElementById('searchedLocation').value;
    if(event.target.id === 'getSearchedLocation') {
        const locationParam = input.split(' ').join('-');
        const searchParams = `?location=${locationParam}`;
        window.location.replace('http://localhost:3000/weather' + searchParams)
    }
})