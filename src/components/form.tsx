import React from 'react';
import { useForm } from 'react-hook-form';

interface Profile {
  firstName: string;
  lastName: string;
  age: number;
}

export const Form: React.FC = () => {
  const { register, handleSubmit } = useForm<Profile>();

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>First Name:</label>
          <input
            ref={register()}
            name='firstName'
            placeholder='enter first name'
            type='text'
          />
        </div>

        <div>
          <label>Last Name:</label>
          <input
            ref={register()}
            name='lastName'
            placeholder='enter last name'
            type='text'
          />
        </div>

        <div>
          <label>Age:</label>
          <input
            ref={register()}
            name='age'
            placeholder='enter age'
            type='text'
          />
        </div>

        <button type='submit'>Save</button>
      </form>
    </div>
  );
};
