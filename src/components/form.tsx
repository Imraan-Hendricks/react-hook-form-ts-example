import React from 'react';
import cssModule from './form.module.css';
import { useForm } from 'react-hook-form';

interface Profile {
  firstName: string;
  lastName: string;
  age: number;
}

export const Form: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<Profile>();

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });

  return (
    <div className={cssModule.container}>
      <h1>Profile</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>First Name:</label>
          <input
            ref={register({
              required: 'first name required',
              minLength: { value: 3, message: 'Too short!' },
              maxLength: { value: 20, message: 'Too long!' },
              pattern: {
                value: /^[a-z ,.'-]+$/i,
                message: 'Invalid first name',
              },
            })}
            name='firstName'
            placeholder='enter first name'
            type='text'
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>

        <div>
          <label>Last Name:</label>
          <input
            ref={register({
              required: 'last name required',
              minLength: { value: 3, message: 'Too short!' },
              maxLength: { value: 20, message: 'Too long!' },
              pattern: {
                value: /^[a-z ,.'-]+$/i,
                message: 'Invalid last name',
              },
            })}
            name='lastName'
            placeholder='enter last name'
            type='text'
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>

        <div>
          <label>Age:</label>
          <input
            ref={register({
              required: 'age required',
              pattern: { value: /^[0-9]*$/, message: 'age must be a number' },
            })}
            name='age'
            placeholder='enter age'
            type='text'
          />
          {errors.age && <p>{errors.age.message}</p>}
        </div>

        <button type='submit'>Save</button>
      </form>
    </div>
  );
};
