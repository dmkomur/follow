import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../img/logo.svg";
import { local } from "../services/storage";
import {
  StyledCard,
  StyledCardButton,
  StyledList,
  StyledText,
  StyledImgThumb,
  StyledBtnLoad,
  StyledAvatar,
} from "./CardList.styled";

axios.defaults.baseURL = "https://6492d14f428c3d2035d0be95.mockapi.io/";

export const CardList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [followList, setFollowList] = useState(() => {
    const listFromLS = local.load("follow");
    return listFromLS || [];
  });
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

  return (
    <StyledList>
      {users.map((user) => (
        <StyledCard key={user.id}>
          <img src={logo} alt="logo" />
          <StyledImgThumb>
            <StyledAvatar src={user.avatar} alt="avatar" />
          </StyledImgThumb>
          <StyledText style={{ marginBottom: "16px", marginTop: "242px" }}>
            {Intl.NumberFormat().format(user.tweets)} Tweets
          </StyledText>
          <StyledText style={{ marginBottom: "26px" }}>
            {Intl.NumberFormat().format(user.followers)} Followers
          </StyledText>
          <StyledCardButton
            follow={followList.includes(user.id)}
            onClick={() => onFollowBtnClick(user.id)}
          >
            {followList.includes(user.id) ? "Following" : "Follow"}
          </StyledCardButton>
        </StyledCard>
      ))}
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
    </StyledList>
  );
};

//  const currentIndex = users.findIndex((el) => el.id === id);
//  setUsers((prevUsers) => {
//    const updatedUsers = [...prevUsers];
//    const currentUser = { ...updatedUsers[currentIndex] };
//    if (currentUser.isFollowing) {
//      currentUser.followers -= 1;
//      currentUser.isFollowing = !currentUser.isFollowing;
//      axios.put(`users/${id}`, currentUser);
//    } else {
//      currentUser.followers += 1;
//      currentUser.isFollowing = !currentUser.isFollowing;
//      axios.put(`users/${id}`, currentUser);
//    }
//    updatedUsers[currentIndex] = currentUser;
//    return updatedUsers;
//  });
