import axios from "axios";
import React, { useReducer, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import { dataRequest } from "../hooks/requestMethods";
const Wrapper = styled.div`
  padding: 0px 80px;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3, 1fr);
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  input {
    padding: 10px;
    border: none;
    outline: none;

    border-bottom: 1px solid orange;
    border-radius: 10px;
  }
  label {
    font-size: 14px;
  }
  select {
    padding: 10px;
    border: none;
    outline: none;
    border-bottom: 1px solid orange;
    border-radius: 10px;
  }
`;
const Button = styled.button`
  all: unset;
  padding: 10px;
  background-color: orange;
  color: white;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  margin-top: 10px;
  width: 200px;
`;

const AddForms = () => {
  const [images, setImages] = useState([]);
  const [avatar, setAvatar] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [dishimage, setDishimage] = useState("");
  const [dishurl, setDishUrl] = useState("");
  const [room, createNewroom] = useReducer(
    (prev, next) => {
      const newRoom = { ...prev, ...next };
      return newRoom;
    },
    {
      number: "",
      floor: "",
      price: "",
      description: "",
      bedrooms: "",
      category: "",
      avatar: "",
      extraimages: [],
    }
  );
  const [dish, setNewDish] = useReducer(
    (prev, next) => {
      const newDish = { ...prev, ...next };
      return newDish;
    },
    {
      mealname: "",
      photo: "",
      price: "",
      description: "",
      category: "",
    }
  );

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const name = e.target.name;
    if (name === "avatar") {
      setAvatar(files[0]);
    } else if (name === "extraimages") {
      setImages(files);
    } else if (name === "dish") {
      setDishimage(files[0]);
    }
  };
  const createRoom = async (e) => {
    e.preventDefault();
    try {
      // Upload room main image to Cloudinary
      const avatarData = new FormData();
      avatarData.append("file", avatar);
      avatarData.append("upload_preset", "Arcade Hotel");
      await axios
        .post(
          "https://api.cloudinary.com/v1_1/dt75zlucp/image/upload",
          avatarData
        )
        .then((res) => {
          const secure_Url = res.data.secure_url;
          console.log(secure_Url);
          setAvatarUrl(secure_Url);
        });

      // Upload extra images to cloudinary
      const imagePromises = images.map((file) => {
        const formData = new FormData();
        formData.append(`file`, file);
        formData.append("upload_preset", "Arcade Hotel");
        return axios
          .post(
            "https://api.cloudinary.com/v1_1/dt75zlucp/image/upload",
            formData,
            {
              headers: { "X-Requested-With": "XmlHttpRequested" },
            }
          )
          .then((res) => res.data.secure_url);
      });
      const imageUrls = await Promise.all(imagePromises);

      // Create room in database
      await dataRequest.post("/rooms", {
        number: room.number,
        floor: room.floor,
        price: room.price,
        description: room.description,
        bedrooms: room.bedroom,
        category: room.category,
        avatar: avatarUrl,
        extraimages: imageUrls,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const createNewDish = async (e) => {
    e.preventDefault();
    try {
      // Upload dishimage to Cloudinary
      const formData = new FormData();
      formData.append("file", dishimage);
      formData.append("upload_preset", "Arcade Hotel");
      await axios
        .post(
          "https://api.cloudinary.com/v1_1/dt75zlucp/image/upload",
          formData
        )
        .then((res) => {
          const dishurl = res.data.secure_url;
          setDishUrl(dishurl);
        });
      // save dish to database
      if (dishurl) {
        const res = await dataRequest.post("/dishes", {
          mealname: dish.mealname,
          photo: dishurl,
          price: dish.price,
          description: dish.description,
          category: dish.category,
        });
        if (res.data) {
          alert("dish created succesfully");
        }
      } else alert("photo not saved");
    } catch (error) {
      if (error) {
        alert(error.message);
      }
    }
  };
  return (
    <div>
      {/* <Navbar />
      <Navbar2 /> */}
      <Wrapper>
        <Form onSubmit={createRoom}>
          <div>
            <label>Room no:</label>
            <input
              placeholder="room number"
              required
              onChange={(e) => {
                createNewroom({ number: e.target.value });
              }}
            />
          </div>
          <div>
            <label>Room floor:</label>
            <input
              placeholder="room floor"
              required
              onChange={(e) => {
                createNewroom({ floor: e.target.value });
              }}
            />
          </div>
          <div>
            <label>Room Price:</label>
            <input
              placeholder="price"
              required
              onChange={(e) => {
                createNewroom({ price: e.target.value });
              }}
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              type="text"
              placeholder="description"
              required
              onChange={(e) => {
                createNewroom({ description: e.target.value });
              }}
            />
          </div>
          <div>
            <label>category:</label>
            <select
              defaultValue="regular"
              required
              onChange={(e) => {
                createNewroom({ category: e.target.value });
              }}>
              <option value="regular">Regular Rooms</option>
              <option value="executive ">Executive Rooms</option>
              <option value="presidential">Presidential Rooms</option>
              <option value="Ballrooms">Ballrooms</option>
              <option value="party">Party Rooms</option>
            </select>
          </div>
          <div>
            <label>bedrooms:</label>
            <select
              defaultValue="1 bedroom"
              required
              onChange={(e) => {
                createNewroom({ bedrooms: e.target.value });
              }}>
              <option value="1 bedroom">1 bedroom</option>
              <option value="2 bedroom">2 bedroom</option>
            </select>
            <div>
              <label>Avatar:</label>
              <input
                type="file"
                required
                name="avatar"
                onChange={handleUpload}
              />
            </div>
            <div>
              <label>extra Images:</label>
              <input
                type="file"
                multiple
                name="extraimages"
                onChange={handleUpload}
              />
            </div>
          </div>
          <Button type="submit">Create Room</Button>
        </Form>
        <Form onSubmit={createNewDish}>
          <div>
            <label>Dish name:</label>
            <input
              type="text"
              placeholder="dish name"
              onChange={(e) => {
                setNewDish({ mealname: e.target.value });
              }}
            />
          </div>
          <div>
            <label>Dish price:</label>
            <input
              type="number"
              placeholder="price"
              onChange={(e) => {
                setNewDish({ price: e.target.value });
              }}
            />
          </div>
          <div>
            <label>dish category</label>
            <select
              onChange={(e) => {
                setNewDish({ category: e.target.value });
              }}>
              <option value="breakfast">Breakfasts</option>
              <option value="sandwiches">sandwiches and Wraps</option>
              <option value="salads">salads</option>
              <option value="burger">burgers and fries</option>
              <option value="Pasta">pasta and dishes</option>
              <option value="seafood">seafood dishes</option>
              <option value="dessert">desserts</option>
              <option value="steak">steak and chops</option>
            </select>
          </div>
          <div>
            <label>Dish description:</label>
            <input
              type="text"
              placeholder="description"
              onChange={(e) => {
                setNewDish({ description: e.target.value });
              }}
            />
          </div>
          <div>
            <label>Dish image:</label>
            <input type="file" name="dish" onChange={handleUpload} />
          </div>
          <Button type="submit">Create dish</Button>
        </Form>
      </Wrapper>
    </div>
  );
};

export default AddForms;
