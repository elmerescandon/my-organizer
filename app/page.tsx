import Head from 'next/head';
import React from 'react';
import styles from '../styles/index.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Momento - Daily Personal Organizer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Momento</h1>
        <p>Stay organized and productive every day!</p>

        {/* Task Input */}
        <form>
          <input type="text" placeholder="Enter your task" />
          <button type="submit">Add Task</button>
        </form>

        {/* Schedule Input */}
        <form>
          <input type="text" placeholder="Enter your schedule" />
          <button type="submit">Add Schedule</button>
        </form>

        {/* Music Recommendations */}
        <h2>Music Recommendations</h2>
        {/* Display music recommendations here */}

        {/* Achievements */}
        <h2>Achievements</h2>
        {/* Display achievements here */}
      </main>

      <footer>
        <p>
          Created by Your Name. &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default Home;