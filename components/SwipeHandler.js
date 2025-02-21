import React, {useState} from "react";

const [likedPet, setLikedPet] = useState([]);
const [dislikedPet, setDislikedPet] = useState([]);

const handlePets = () => {
    const handleLiked = (index) => {
        setLikedPet((prev) => ([...prev, likedPet[index]]));
        console.log("Pet liked: ", likedPet);
    };

    const handleDisliked = (index) => {
        setDislikedPet((prev) => ([...prev, dislikedPet[index]]));
        console.log("Disliked pet: ", dislikedPet);
    };

}

export default handlePets;