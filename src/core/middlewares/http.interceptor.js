const BASE_URL = "https://abc.com/api";
const DEFAULT_HEADERS = {
  "Content-Type": "application/json"
};

const parseJSON = str => {
  try {
    return str ? JSON.parse(str) : {};
  } catch (e) {
    return {};
  }
};

const dispatchAtion = dispatch => cb => args => {
  if (cb) {
    return Array.isArray(cb)
      ? cb.forEach(func => {
          if (typeof func == "function") {
            dispatch(func(args));
          }
        })
      : typeof cb == "function" && dispatch(cb(args));
  }
};

const httpInterceptor = store => next => action => {
  console.log("API Interceptor", action);
  if (action.http) {
    const {
      url,
      method,
      body,
      headers = DEFAULT_HEADERS,
      onSuccess,
      onFailure,
      beforeFetch
    } = action.http;
    const { app } = store.getState();

    // Adding token
    const user = parseJSON(sessionStorage.getItem("app_user"));
    DEFAULT_HEADERS["Authorization"] =
      app && app.session && app.session.token ? app.session.token : user.token;

    // Dispatching first
    console.log("API Interceptor: Before Fetch", beforeFetch);
    next(beforeFetch());

    fetch(BASE_URL + url, {
      method,
      mode: "cors",
      headers: Object.assign({}, DEFAULT_HEADERS, headers),
      body: JSON.stringify(body)
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(res => {
            dispatchAtion(store.dispatch)(onFailure)(res["message"]);
          });
        }
        return res.json().then(res => {
          dispatchAtion(store.dispatch)(onSuccess)(res["data"]);
        });
      })
      .catch(err => {
        dispatchAtion(store.dispatch)(onFailure)(err.message);
      });
    // store.dispatch({ type: action.type });
  } else {
    next(action);
  }
};

export default httpInterceptor;
