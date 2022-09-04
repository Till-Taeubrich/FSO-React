function Header(props) {
  return <h1>{props.course}</h1>;
}

function Content(props) {
  return (
    <>
      <Part content={props.parts[0].name} number={props.parts[0].exercises}/>
      <Part content={props.parts[1].name} number={props.parts[1].exercises}/>
      <Part content={props.parts[2].name} number={props.parts[2].exercises}/>
    </>
  );
}

function Part (props) {
  return (
    <>
      <p>
        {props.content} {props.number}
      </p>
    </>
  );
}

function Total(props) {
  return (
    <div>
      Number of exercises{' '}
      {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </div>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
