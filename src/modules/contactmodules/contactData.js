import home from "../../images/ikonki/home.png";
import phone from "../../images/ikonki/phone.png";
export default function ContactData() {
  return (
    <div id="contactData">
      <h1>Kontakt</h1>
      <div>
        <img src={home} alt="ikona domu" />
        <span>
          Skup prowadzimy na terenie nieruchomości w Zastowie 32-010, działce nr
          ewid.414. <br />
          <i>
            Dojazd od ulicy Kantorowickiej 400 {"("}Kraków{")"}.
          </i>{" "}
        </span>
      </div>
      <div>
        <img src={phone} alt="ikona telefonu" />{" "}
        <ul>
          <li>
            <a href="tel: +48519593956"> tel. 519 593 956</a>
          </li>
          <li>
            <a href="tel: +48505999001 "> tel. 505 999 001 </a>
          </li>
          <li>
            <a href="mailto: biuro@mustang-jk.pl">mail: biuro@mustang-jk.pl </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
