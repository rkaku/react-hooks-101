// Events Reducer
const events = (state = [], action) => {
  // Action Type
  switch (action.type) {
    // Create
    case "CREATE_EVENT":
      // New Event -> Title, Body
      const event = { title: action.title, body: action.body };
      // Events Length
      const length = state.length;
      // Additional ID
      let id = length === 0 ? 1 : state[length - 1].id + 1;
      // Update Events
      return [...state, { id, ...event }];

    // Delete
    case "DELETE_EVENT":
      return state;

    // Delete All
    case "DELETE_ALL_EVENT":
      return [];

    // Default
    default:
      return state;
  }
};

export default events;
