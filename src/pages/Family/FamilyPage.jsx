import React, { useEffect, startTransition } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const FamilyPage = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handler = () => {
    startTransition(() => {
      navigate("contact");
    });
  };
  return (
    <div>
      <h1>familypage</h1>
      <button onClick={handler}>contact</button>
    </div>
  );
};

export default FamilyPage;
