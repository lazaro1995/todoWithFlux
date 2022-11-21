const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().deleteTask(0);
				getActions().addTask(elm)
			},
			addTask: (task) => {
				const store = getStore();
				 store.demo.push({title: task.inputValue})
				 setStore({ store: store });
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			deleteTask: (index) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const deleteTask = 
					store.demo.filter(task => task.title !== store.demo[index].title)
				

				//reset the global store
				setStore({ demo: deleteTask});
			}
		}
	};
};

export default getState;
