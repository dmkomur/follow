import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../img/logo.svg";
import decor1x from "../img/cloud1x.png";
import decor2x from "../img/cloud1x.png";

import {
  StyledCard,
  StyledCardButton,
  StyledList,
  StyledText,
  StyledImgThumb,
  StyledAvatar,
  StyledClouds,
} from "./CardList.styled";

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
    <StyledList>
      {users.map((user) => (
        <StyledCard key={user.id}>
          <img src={logo} alt="logo" />
          <StyledClouds
            src={decor1x}
            // srcSet={`${decor1x} 1x, ${decor2x} 2x`}
            alt="bg"
          />
          <StyledImgThumb>
            <StyledAvatar src={user.avatar} alt="avatar" />
          </StyledImgThumb>
          <StyledText style={{ marginBottom: "16px", marginTop: "242px" }}>
            {user.tweets} Tweets
          </StyledText>
          <StyledText style={{ marginBottom: "26px" }}>
            {Intl.NumberFormat().format(user.followers)} Followers
          </StyledText>
          <StyledCardButton
            follow={user.isFollowing}
            onClick={() => onFollowBtnClick(user.id)}
          >
            {user.isFollowing ? "Following" : "Follow"}
          </StyledCardButton>
        </StyledCard>
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
    </StyledList>
  );
};
