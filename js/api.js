import { populateChart } from "./chart.js";
import { getList } from "./diagnosis-list.js";
import { diagnosisTopBottom } from "./diagnosis-top-bottom.js";
import { getLabResults } from "./lab-results.js";
import { patientData } from "./patients.js";
import { getProfile } from "./profile.js";

let username = 'coalition';
let password = 'skills-test';
let auth = btoa(`${username}:${password}`);

let data;

const controller = new AbortController();
// Authenticate (dummy API)
const apiCall = async () => {
	await fetch('https://fedskillstest.coalitiontechnologies.workers.dev/', {
		headers: {
			'Authorization': `Basic ${auth}`
		}
	}).then(function (response) {
		if (response.ok) {
			return response.json();
		}
		throw response;
	}).then(function (data) {
		patientData(data);
		populateChart(data);
		diagnosisTopBottom(data);
		getLabResults(data);
		getProfile(data);
		getList(data);
	}).catch(function (error) {
		console.warn(error);
	});
}

controller.abort();

apiCall();