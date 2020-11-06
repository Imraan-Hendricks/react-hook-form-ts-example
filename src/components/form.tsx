import React from 'react';

export const Form: React.FC = () => {
  return (
    <div>
      <h1>Profile</h1>
      <form>
        <div>
          <label>First Name:</label>
          <input name='firstName' placeholder='enter first name' type='text' />
        </div>

        <div>
          <label>Last Name:</label>
          <input name='lastName' placeholder='enter last name' type='text' />
        </div>

        <div>
          <label>Age:</label>
          <input name='age' placeholder='enter age' type='text' />
        </div>

        <button type='submit'>Save</button>
      </form>
    </div>
  );
};
