export const initialState = {
  student: [
    {
      id: 1,
      name: "Bawka",
      email: "bawka0427@gmail.com",
      tel: "+99890242646",
    },
    {
      id: 2,
      name: "Mark",
      email: "mark1313@gmail.com",
      tel: "+99890242646",
    },
    {
      id: 3,
      name: "John",
      email: "johndow@gmail.com",
      tel: "+99890242646",
    },
  ],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_STUDENT": {
      return {
        ...state,
        student: [action.payload, ...state.student],
      };
    }
    case "DELETE_STUDENT": {
      return {
        ...state,
        student: state.student.filter((item) => item.id !== action.payload),
      };
    }
  }
};

export const addStudentsFormInitialValue = {
  name: "",
  email: "",
  tel: "",
};
