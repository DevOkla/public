import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>

        {/* if both activeTab and div is true print out div */}
        {activeTab === "instructions" && (
          <FullRecipe>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </FullRecipe>
        )}

        {/* if both activeTab=ingredient and ul is true print out ul */}
        {activeTab === "ingredients" && (
          <ul>
            {
              //the ? before mapping checks if the array exists
              details.extendedIngredients?.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))
            }
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  img {
    border-radius: 2rem;
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  margin: 1rem;
  color: #313131;
  background: rgb(255, 255, 255);
  border: 2px solid black;
  max-width: 25rem;
  align-self: center;
  width: 100%;
  font-weight: 600;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  margin: 2rem rem;
  @media (max-width: 900px) {
    margin: 0rem 1rem;
  }
`;
const FullRecipe = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0rem;
  font-size: 2rem;
  line-height: 4rem;
  @media (max-width: 900px) {
    margin: 0rem 0.4rem;
    font-size: 1rem;
    line-height: 2rem;
  }
`;
export default Recipe;
