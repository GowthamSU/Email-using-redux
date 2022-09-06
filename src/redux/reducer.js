
const initialState = {
  users: [
    {
      id: 1,
      username: "apple@gmail.com",
      password: "Doodle#22",
      mail: [
        {
          sender: "",
          description: "",
        },
      ],
    },
    {
      id: 2,
      username: "banana@gmail.com",
      password: "Doodle#24",
      mail: [
        {
          sender: "",
          description: "",
        },
      ],
    },
    {
      id: 3,
      username: "carrot@gmail.com",
      password: "Doodle#26",
      mail: [
        {
          sender: "",
          description: "",
        },
      ],
    },
    {
      id: 4,
      username: "dragon@gmail.com",
      password: "Doodle#28",
      mail: [
        {
          sender: "",
          description: "",
        },
      ],
    },
  ],
  login: false,
  currentMail: [],
  currentUser: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGINUSER":
      console.log("payload", action.payload);
      let tempUsers = [...state.users];
      let index = tempUsers.findIndex(
        (user) => user.username === action.payload.username
      );
      console.log(index, "index");
      if (index === -1) {
        alert("User doesn't exist");
      } else {
        if (tempUsers[index].password === action.payload.password) {
          alert("Login successful");
          return {
            ...state,
            login: true,
            currentMail: tempUsers[index].mail,
            currentUser: tempUsers[index].username,
            notifyMsg: "Login Successful",
          };
        } else {
          alert("Password doesn't match");
        }
      }

      return {
        ...state,
        users: tempUsers,
      };

    case "LOGOUT":
      return { ...state, login: false };

    case "COMPOSEMAIL":
      console.log("payload", action.payload);
      let tempUsers1 = [...state.users];
      let userIndex = tempUsers1.findIndex(
        (userindex) => userindex.username === action.payload.to
      );
      console.log(userIndex, "index");
      if (userIndex === -1) {
        alert("Mail id doesn't exist");
      } else {
        tempUsers1[userIndex].mail = [
          ...tempUsers1[userIndex].mail,
          {
            sender: state.currentUser,
            description: action.payload.message,
          },
        ];
        return { ...state, users: tempUsers1 };
      }
      return { ...state, users: tempUsers1 };

    default:
      return state;
  }
};
export default reducer;
