const getState = ({ getStore, setStore }) => {
	return {
	  store: {
		planets: [],
		people: [],
		vehicles: [],
		test: "hola",
	  },
	  actions: {
		fetchPlanets: async (page = 1) => {
		  try {
			const response = await fetch(
			  `https://www.swapi.tech/api/planets?page=${page}&limit=10`
			);
			const data = await response.json();
			setStore({ ...getStore(), planets: data.results });
		  } catch (error) {
			console.error("Error fetching planets:", error);
		  }
		},
  
		fetchPeople: async (page = 1) => {
		  try {
			const response = await fetch(
			  `https://www.swapi.tech/api/people?page=${page}&limit=10`
			);
			const data = await response.json();
			setStore({ ...getStore(), people: data.results });
		  } catch (error) {
			console.error("Error fetching people:", error);
		  }
		},
  
		fetchVehicles: async (page = 1) => {
		  try {
			const response = await fetch(
			  `https://www.swapi.tech/api/vehicles?page=${page}&limit=10`
			);
			const data = await response.json();
			setStore({ ...getStore(), vehicles: data.results });
		  } catch (error) {
			console.error("Error fetching vehicles:", error);
		  }
		},
	  },
	};
  };
  export default getState;
  
