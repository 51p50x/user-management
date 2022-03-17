import {useState} from 'react';
import useForm from './hooks/useForm';
import Input from './components/Input';
import Card from './components/Card';
import Container from './components/Container';
import Button from './components/Button';

function App () {
  const [users, setUsers] = useState ([]);
  const [form, handleChange, reset] = useForm ({
    name: '',
    lastname: '',
    email: '',
  });
  const submit = e => {
    e.preventDefault ();
    setUsers ([...users, form]);
    reset ();
  };

  return (
    <div style={{marginTop:'15%'}}>
      <Container>
        <Card>
          <div style={{padding: 20}}>
            <form onSubmit={submit}>
              <Input
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder = 'Name'
              />
              <Input
                label="Lastname"
                name="lastname"
                value={form.lastname}
                onChange={handleChange}
                placeholder = 'Last Name'
              />
              <Input
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder = 'Email'
              />
              <Button>Sent</Button>
            </form>
          </div>
        </Card>
        <Card>
          <ul>
            {users.map (user => (
              <li
                key={user.email}
              >{`${user.name} ${user.lastname}: ${user.email}`}</li>
            ))}
          </ul>
        </Card>
      </Container>
    </div>
  );
}

export default App;
