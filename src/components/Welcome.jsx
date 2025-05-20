import Greeting from './Greeting';

function Welcome({ user }) {
  return (
    <div>
      <Greeting name={user} />
    </div>
  );
}

export default Welcome;
