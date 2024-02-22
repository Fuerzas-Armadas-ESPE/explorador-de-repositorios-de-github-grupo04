// RepoList.js
import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const RepoList = ({ username, stars, language }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );
        const sortedRepos = response.data.sort((a, b) => b.size - a.size);

        // Filtrar repositorios por estrellas y lenguaje
        const filteredRepos = sortedRepos.filter(repo => {
          return (
            repo.stargazers_count >= stars &&
            (language === "" || repo.language === language)
          );
        });

        setRepos(filteredRepos);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    };

    fetchData();
  }, [username, stars, language]);

  return (
    <div>
      <h2>Repositorios de {username}</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            {repo.name} - Tamaño: {repo.size}
          </li>
        ))}
      </ul>
    </div>
  );
};

RepoList.propTypes = {
  username: PropTypes.string.isRequired,
  stars: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired
};

export default RepoList;
