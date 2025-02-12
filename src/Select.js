import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Select.css';

function Select() {
  return (
    <>
      <div className="container">
        <div className="book-wrapper">
          <div className="notes">
            <div className="notes-cover">
              <div className="notes-skin">Planner</div>
            </div>
            <div className="notes-page"></div>
          </div>
          <h2>
            <Link to="/planner" className="link-style">Planner</Link>
          </h2>
          
        </div>

        <div className="book-wrapper">
          <div className="notes">
            <div className="notes-cover green">
              <div className="notes-skin">Creative Notes</div>
            </div>
            <div className="notes-page"></div>
          </div>
          <h2>
            <Link to="/creative-notes" className="link-style">Creative Notes</Link>
          </h2>
        </div>
        

        <div className="book-wrapper">
           
          <div className="notes">
            <div className="notes-cover blue">
              <div className="notes-skin">
                Daily Goals</div>

            </div>
            <div className="notes-page"></div>
          </div>
           
            <h2 >
            <Link to="/daily-goals" className="link-style">Daily Goals</Link>
          </h2> 
          
        </div>
      </div>
    </>
  );
}

export default Select;
