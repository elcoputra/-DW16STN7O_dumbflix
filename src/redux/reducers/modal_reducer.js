import {
  OPEN_MODAL_REGISTER,
  CLOSE_MODAL_REGISTER,
  OPEN_MODAL_LOGIN,
  CLOSE_MODAL_LOGIN,
  CLOSE_MODAL_ADD_EPISODE,
  OPEN_MODAL_ADD_EPISODE,
} from '../actionTypes';
const initialStateRegisterModal = {
  registerModalOpen: false,
};
const initialStateLoginModal = {
  loginModalOpen: false,
};

const initialStateAddEpisodeModal = {
  addEpisodeModalOpen: false,
};

export const modalRegisterReducer = (state = initialStateRegisterModal, action) => {
  switch (action.type) {
    case OPEN_MODAL_REGISTER:
      return { ...state, registerModalOpen: action.payload };
    case CLOSE_MODAL_REGISTER:
      return { ...state, registerModalOpen: action.payload };
    default:
      return state;
  }
};

export const modalLoginReducer = (state = initialStateLoginModal, action) => {
  switch (action.type) {
    case OPEN_MODAL_LOGIN:
      return { ...state, loginModalOpen: action.payload };
    case CLOSE_MODAL_LOGIN:
      return { ...state, loginModalOpen: action.payload };
    default:
      return state;
  }
};

export const modalAddEpisodeReducer = (state = initialStateAddEpisodeModal, action) => {
  switch (action.type) {
    case OPEN_MODAL_ADD_EPISODE:
      return { ...state, addEpisodeModalOpen: action.payload };
    case CLOSE_MODAL_ADD_EPISODE:
      return { ...state, addEpisodeModalOpen: action.payload };
    default:
      return state;
  }
};
