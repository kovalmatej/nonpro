import axios from "axios";

export const state = () => ({
  username: null,
  token: null
});

export const mutations = {
  setUsername(state, username) {
    state.username = username;
  },
  setToken(state, token) {
    state.token = token;
  }
};

const checkToken = async (username, userToken) => {
  const response = await fetch("http://localhost:5002/auth/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      token: userToken
    })
  });

  const { token } = await response.json();

  return token;
}

export const getters = {
  getIsLogged: async (state) => {
    const isTokenValid = await checkToken(state.username, state.token);
    if(isTokenValid == "") {
      console.log("ff")
      return false;
    }

    console.log("gg")
    return !!state.token
  }
}