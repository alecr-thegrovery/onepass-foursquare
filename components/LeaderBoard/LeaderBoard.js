/*===== Ultility Components =====*/
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

/*===== Theme Components =====*/
import Button1 from '@components/Button1'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function LeaderBoard({
    //Props
    children,
    id,
    image,
    title,
    previewText,
    author,
    date
}) {

    //JS Goes Here
    //console.log(author);

    const [scores, setScores] = useState([]);
    const [name, setName] = useState('');
    const [score, setScore] = useState(0);

    useEffect(() => {
        // Fetch scores from localStorage
        const storedScores = JSON.parse(localStorage.getItem('highScores')) || [];
        setScores(storedScores);
    }, []);

    const saveScore = (e) => {
        e.preventDefault();
        // Add new score to local storage and update state
        const newScore = { name, score };
        const newScores = [...scores, newScore].sort((a, b) => b.score - a.score).slice(0, 10);
        localStorage.setItem('highScores', JSON.stringify(newScores));
        setScores(newScores);
        // Clear input fields
        setName('');
        setScore(0);
    };

    return (
        <div className={componentStyles.LeaderBoard}>
      
      <h2 className={componentStyles.headline}>
        High Score
      </h2>

      <table>

        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>
          {scores.map((score, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{score.name}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>

      </table>

      <form onSubmit={saveScore}>
        <h3>Add Your Score</h3>
        
        <label>
          Name:
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </label>

        <label>
          Score:
          <input 
            type="number" 
            value={score} 
            onChange={(e) => setScore(e.target.value)} 
          />
        </label>

        <button type="submit">Save</button>

      </form>
          
    </div>
    )
}