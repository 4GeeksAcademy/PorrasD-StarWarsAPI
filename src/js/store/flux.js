const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		planets: [],
		people: [],
		vehicles: [],
		test: "hola"
	  },
	  actions: {
		fetchPlanets: async () => {
		  try {
			const response = await fetch("https://www.swapi.tech/api/planets?page=1&limit=10%22");
			const data = await response.json();
			setStore({ ...getStore(),planets: data.results });
		  } catch (error) {
			console.error("Error fetching contacts:", error);
		  }
		}
	}
}
}
		export default getState;
	