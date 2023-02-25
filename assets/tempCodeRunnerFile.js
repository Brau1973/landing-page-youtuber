import fetch from "node-fetch";
const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCs3chxBZSlbJWIrKOdjcQvg&part=snippet%2Cid&order=date&maxResults=50';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '629e0947c0msh4ace69dd1aa44f9p18a0fdjsn144a32641c14',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

fetch(API, options)
	.then(response => response.json())
	.then(response => console.log(response.items[9].snippet.title))
	.catch(err => console.error(err));