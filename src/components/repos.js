import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Repos = () => {
  const repos = useStaticQuery(graphql`
    query MyRepos {
      githubData {
        data {
          user {
            repositories {
              edges {
                node {
                  id
                  name
                  description
                  stargazers {
                    totalCount
                  }
                  url
                  isFork
                }
              }
            }
          }
        }
      }
    }
  `)

  const results = repos.githubData.data.user.repositories.edges;
  console.log(results.filter(({node}) => node.isFork === false))
  return (
      <ul className="repos__container">
        {
          results.filter(({node}) => !node.isFork).map(({node}) => (
            <li key={node.id}>
              <h4>{node.name}</h4>
              <p>{node.description || `No description available`}</p>
              <p><a href={node.url}>Github</a></p>
            </li>
          ))
        }
      </ul>
  )
}

export default Repos;