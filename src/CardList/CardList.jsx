import { useEffect, useState } from "react";
import axios from "axios";
import { StyledCard, StyledCardButton } from "./CardList.styled";

axios.defaults.baseURL = "https://6492d14f428c3d2035d0be95.mockapi.io/";

export const CardList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await axios.get("users", {
          params: { l: 3, p: page },
        });
        page === 1
          ? setUsers([...usersData.data])
          : setUsers((prev) => [...prev, ...usersData.data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, [page]);

  const onFollowBtnClick = (id) => {
    const currentIndex = users.findIndex((el) => el.id === id);
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      const currentUser = { ...updatedUsers[currentIndex] };
      if (currentUser.isFollowing) {
        currentUser.followers -= 1;
        currentUser.isFollowing = !currentUser.isFollowing;
        axios.put(`users/${id}`, currentUser);
      } else {
        currentUser.followers += 1;
        currentUser.isFollowing = !currentUser.isFollowing;
        axios.put(`users/${id}`, currentUser);
      }
      updatedUsers[currentIndex] = currentUser;
      return updatedUsers;
    });
  };

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <StyledCard>
            {user.user}
            {user.followers}
            <StyledCardButton
              follow={user.isFollowing}
              onClick={() => onFollowBtnClick(user.id)}
            >
              {user.isFollowing ? "Follow" : "Following"}
            </StyledCardButton>
          </StyledCard>
        </li>
      ))}
      {page < 10 && (
        <button
          type="button"
          onClick={() => {
            setPage((prev) => (prev += 1));
          }}
        >
          Load more
        </button>
      )}
    </ul>
  );
};
