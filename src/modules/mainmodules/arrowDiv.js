import arrow from "../../images/arrow/arrow80.png";
export default function ArrowDiv(props) {
  const jsxElements = props.info.map((position) => {
    return(<div className="arrowDiv" key={position.key}>
      <img src={arrow} alt="ikona strzałki" />
      <section>
        <b>{position.title}</b>
        <p>{position.text}</p>
      </section>
    </div>);
  });

  return <div className="arrowContainer">{jsxElements}</div>;
}
