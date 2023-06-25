import { useEffect, useState } from "react";
import axios from "axios";
import { local } from "../../services/storage";
import { StyledList, StyledBtnLoad } from "./CardList.styled";
import { Card } from "../Card/Card";
import { ToolBar } from "../ToolBar/ToolBar";

axios.defaults.baseURL = "https://6492d14f428c3d2035d0be95.mockapi.io/";

export const CardList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [followList, setFollowList] = useState(() => {
    const listFromLS = local.load("follow");
    return listFromLS || [];
  });
  const [filter, setFilter] = useState("all");

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

  useEffect(() => {
    local.save("follow", followList);
  }, [followList]);

  function updateUser(id, index) {
    const currentIndex = users.findIndex((el) => el.id === id);
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      const currentUser = { ...updatedUsers[currentIndex] };
      currentUser.followers = currentUser.followers + index;
      axios.put(`users/${id}`, currentUser);

      updatedUsers[currentIndex] = currentUser;
      return updatedUsers;
    });
  }

  function handleRadioChange(e) {
    setFilter(e.target.value);
  }

  const onFollowBtnClick = (id) => {
    if (followList.includes(id)) {
      const newList = followList.filter((item) => item !== id);
      setFollowList([...newList]);
      updateUser(id, -1);
    } else {
      setFollowList((prev) => [...prev, id]);
      updateUser(id, 1);
    }
  };
  const filteredUsers = () => {
    if (filter === "all") {
      return users;
    }
    if (filter === "followed") {
      return users.filter((user) => followList.includes(user.id));
    }
    if (filter === "not") {
      return users.filter((user) => !followList.includes(user.id));
    }
  };
  return (
    <>
      <ToolBar handleChange={handleRadioChange} />
      <StyledList>
        {filteredUsers().map((user) => (
          <Card
            key={user.id}
            userData={user}
            handleClick={onFollowBtnClick}
            follow={followList.includes(user.id)}
          />
        ))}
      </StyledList>
      {page < 10 && (
        <StyledBtnLoad
          type="button"
          onClick={() => {
            setPage((prev) => (prev += 1));
          }}
        >
          Load more
        </StyledBtnLoad>
      )}
    </>
  );
};
