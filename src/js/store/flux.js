const getState = ({ getStore, setStore }) => {
	return {
	  store: {
		planets: [],
		people: [],
		vehicles: [],
		favorites: [],
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
		fetchResourceDetails: async (type, id) => {
			try {
			  const response = await fetch(`https://www.swapi.tech/api/${type}/${id}`);
			  const data = await response.json();
			  return data.result.properties;
			} catch (error) {
			  console.error("Error fetching resource details:", error);
			  return null;
			}
		  },
	 
	
  
	  toggleFavorite: (item) => {
		console.log("Item received in toggleFavorite:", item); // Esto te ayudará a verificar los datos recibidos
		const store = getStore();
		const isFavorite = store.favorites.some((fav) => fav.uid === item.uid);
	  
		if (isFavorite) {
		  setStore({
			...store,
			favorites: store.favorites.filter((fav) => fav.uid !== item.uid),
		  });
		} else {
		  setStore({
			...store,
			favorites: [...store.favorites, item],
		  });
		}
	  },
	},
};
};
  export default getState;

