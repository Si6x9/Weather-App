const search = document.getElementById('searchtemp')
const searchbtn = document.getElementById('searchbtn')
const adderess = document.getElementById('adderess')
const temp = document.getElementById('temp');
const feelslike = document.getElementById('feels-like')
const addSection = document.getElementById('addsection')
const tempcondition = document.getElementById('tempcondition')
const error = document.getElementById('error')
const errdiv = document.getElementById('errdiv')

let city = "kolkata";
const searchAdd = () => {
	city = search.value
	run()
}


const run = () => {
	fetch(`https://api.weatherapi.com/v1/current.json?key=9d40c2854c5a45348ac102947220411&q=${city}&aqi=yes`)
		.then(response => response.json())
		.then(data => {
			setdata(data)
		})
		.catch(err => errorr());
}
run()
const setdata = (data) => {
	const conditionname = data.current.condition.text
	const conditionimg = data.current.condition.icon
	const currtemp = data.current.temp_c;
	const addname = data.location.name
	const addregion = data.location.region
	const feeltemp = data.current.feelslike_c;

	if (addregion == "") {
		adderess.innerText = `${addname}`;
	}
	else {
		adderess.innerText = `${addname},${addregion}`;
	}
	error.style.display = 'none';
	tempcondition.innerHTML = `${conditionname}`;
	addSection.innerHTML = `<img src="${conditionimg}" alt="">`;
	temp.innerHTML = `Temperature ${currtemp}<small class="text-muted fw-light"><sup>°C</sup></small>`;
	feelslike.innerHTML = `Feels like ${feeltemp}<small class="text-muted fw-light"><sup>°C</sup></small>`;
}

const errorr = () => {
	error.style.display = 'block';
	error.style.marginBottom = '7px'
}