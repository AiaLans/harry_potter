import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Section from "./components/section/Section";
import Footer from "./components/footer/Footer";

function App() {
  const houses = [
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQOA4haBi_TINgidyHxuXrw35uW2AuI-K9lw&s", alt: "Gryffindor" },
    { src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/76545489-55d6-4b21-90d2-66145f355fa5/d8cqn1m-86d5f7ac-5360-4879-93fb-a19b379e0576.png/v1/fill/w_600,h_769/ravenclaw_flag_banner_by_skylight1989_d8cqn1m-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY5IiwicGF0aCI6IlwvZlwvNzY1NDU0ODktNTVkNi00YjIxLTkwZDItNjYxNDVmMzU1ZmE1XC9kOGNxbjFtLTg2ZDVmN2FjLTUzNjAtNDg3OS05M2ZiLWExOWIzNzllMDU3Ni5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.rNtQcGmvowaU_6McbtHEb8NFcTS4kaSJg1X1wlBguMc", alt: "Ravenclaw" },
    { src: "https://i.pinimg.com/474x/5e/0c/22/5e0c229ce7e54e27d9b15bae77ab19e6.jpg", alt: "Slytherin" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFsY9Gzx3x0j4_cT7mumXCMlubSg6iHjEFYw&s", alt: "Hufflepuff" }
  ];

  return (
    <>
      <Header />
      <Main houses={houses} />
      <Section />
      <Footer />
    </> 
  );
}

export default App;
