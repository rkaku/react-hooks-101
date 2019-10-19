// Events Reducer
const events = (state = [], action) => {

  // Action Types
  switch (action.type) {

    // Create
    case "CREATE_EVENT":
      // New Event
      const event = { title: action.title, body: action.body };
      // Existing Events Length
      const length = state.length;
      // ID for New Event
      let id = length === 0 ? 1 : state[length - 1].id + 1;
      // Update Events
      // ...state -> Existing Events
      // id, ...event -> New Event
      return [...state, { id, ...event }];

    // Delete
    case "DELETE_EVENT":
      // Filter -> Remaining Events
      return state.filter(event => event.id !== action.id);

    // Delete All
    case "DELETE_ALL_EVENT":
      return [];

    // Default
    default:
      return state;
  }
};

export default events;
