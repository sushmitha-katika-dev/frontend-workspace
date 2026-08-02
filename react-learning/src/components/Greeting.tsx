import "./Greeting.css";
type GreetingProps = {
  name: string;
  company?: string;
  salary?: number;
};


{/*
function Greeting( props: GreetingProps) {
  return (
    <>
      <h3>{props.name}</h3>
      <p>{props.company}</p>
      <p>{props.salary}</p>
    </>
  );
}
*/}
function Greeting({ name, company, salary }: GreetingProps) {
  return(
    <>
      <h3>{name}</h3>
      <p>{company}</p>
      <p>{salary}</p>
    </>
  );
}
export default Greeting;