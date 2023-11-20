//This component creates progressbars from the values provided to it in the "knowledge and skills" section of the about me
//page. It returns a parent span and a div with a visual of the progress bar, as well as a hidden span with the score
//for screen readers.

export default function Progress(props) {
  const progressBars = [];
  const score = props.value;

  for (let index = 0; index < 5; index++) {
    if (index < score) {
      progressBars.push(<div className="progress-bar" key={index}></div>);
    } else {
      progressBars.push(
        <div className="progress-bar progress-bar-empty" key={index}></div>
      );
    }
  }

  return (
    <span>
      <div className="progress col">{progressBars}</div>
      <span className="visually-hidden">{score} out of 5</span>
    </span>
  );
}
