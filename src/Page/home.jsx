import { Link } from "react-router-dom";
import NavbarComponent from "../Componnets/navbar";

export default function HomePage() {
  return (
    <>
      <NavbarComponent />
      <div className=" flex flex-col items-center justify-center p-2 m-auto max-w-xl">
        <img src="https://monsterjournal.com/wp-content/uploads/2023/12/Native-5.webp"></img>
        <h3 className=" font-extrabold pt-2">Beyond Journey's End</h3>
        <p className=" pt-1">
          After spending a decade journeying together and defeating the Demon
          King, the Hero Party, consisting of Frieren the Mage, Himmel the Hero,
          Heiter the Priest, and Eisen the Warrior, return to the Royal Capital
          where they are celebrated and praised. The party reminisce their
          journey and watch the Era Meteors, a phenomenon that occurs once every
          fifty years, with Frieren promising to show them the sight again at a
          better viewing location. Afterwards, they go their separate ways, and
          Frieren continues her journey for the pursuit of magic.
          <br /><br />
          A still-youthful Frieren returns to the Royal City fifty years later
          to retrieve a quest item entrusted to Himmel, now a much older man,
          for safekeeping. They reunite with Heiter and Eisen, with Heiter
          having also aged considerably, and they make the trip to the viewpoint
          Frieren mentioned fifty years ago, once again watching the Era Meteors
          and reliving their adventuring experiences together.
        </p>
      </div>
    </>
  );
}
