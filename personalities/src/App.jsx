import { useState } from "react";

const characters = [
  {
    name: "Arthur Morgan",
    description:
      "Arthur Morgan is the protagonist of Red Dead Redemption 2. Being a member and the lead enforcer of the Van der Linde gang, the life of an outlaw is all he has ever known. Dutch met Arthur when he was just 14 years old, a particularly damaged and angry young delinquent who had been on the streets ever since losing his parents at a young age. Arthur became Dutch's first real protégé; seemingly a lost cause who, with a little mentoring and structure, transformed into his most dedicated and capable enforcer.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5bccd5717788971625e09ffc/1557874139759-NS2G5FWUFL2YC6RDAXMX/Arthur+Standing+With+Shotgun_2000px.jpg?format=500w",
  },
  {
    name: "John Marston",
    description:
      "John Marston is the secondary protagonist of Red Dead Redemption 2. Living the outlaw life since he was a child, John was saved by Dutch from a lynching, subsequently joining the Van der Linde gang. He was raised and molded into the outlaw life along with his surrogate brother, Arthur Morgan.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5bccd5717788971625e09ffc/1558025252180-RPNBTAV0FHYIAEWZ4I7B/rdr2_marston.jpg?format=500w",
  },
  {
    name: "Dutch van der Linde",
    description:
      "Dutch van der Linde is a central character in Red Dead Redemption 2 and the leader of the Van der Linde Gang. Dutch sees himself not as a criminal but as a man fighting against a corrupt system of power. Earlier in his life, Dutch had a vision of turning the West into a kind of savage utopia; that, if he spilled enough blood, he could change the way people think. He took orphans and street kids, such as Arthur Morgan and John Marston, under his wing, teaching them how to read and instilling self-worth and the importance of independent thinking.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5bccd5717788971625e09ffc/1557874185116-71KDU1ISWY2AFTW18DUY/rdr2_dutch_van_der_linde_2000px.jpg?format=500w",
  },
];

export default function CharacterDisplay() {
  const [index, setIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(true);

  const nextCharacter = () => {
    setIndex((prevIndex) => (prevIndex + 1) % characters.length);
  };

  const prevCharacter = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? characters.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        backgroundImage:
          "url('https://wallpapers.com/images/hd/red-dead-redemption-2-4k-big-red-sun-rwetm2r4wjs0clen.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Times New Roman, serif",
        color: "white",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          borderRadius: "10px",
          padding: "20px",
          width: "600px", // Increased width
          minHeight: "450px", // Maintains height even when hiding details
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>James Daniel Jurado</h2> {/* Your name at the top */}
        <h1>{characters[index].name}</h1>

        <div>
          <button onClick={prevCharacter}>Back</button>
          <button onClick={nextCharacter} style={{ marginLeft: "10px" }}>
            Next
          </button>
        </div>
        <p>({index + 1} of {characters.length})</p>

        <button
          onClick={() => setShowDetails(!showDetails)}
          style={{
            marginBottom: "10px",
          }}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>

        <div
          style={{
            height: "140px", // Keeps space even when hiding
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "justify",
          }}
        >
          {showDetails && <p>{characters[index].description}</p>}
        </div>

        <img
          src={characters[index].image}
          alt={characters[index].name}
          style={{ width: "350px", borderRadius: "10px", marginTop: "10px" }}
        />
      </div>
    </div>
  );
}
