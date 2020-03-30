import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Blogs = () => {
  const blogs = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
        totalCount
        edges {
          node {
            excerpt(truncate: true, format: PLAIN)
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY", locale: "en")
            }
            id
          }
        }
      }
    }
  `)
  
  const results = blogs.allMarkdownRemark
  console.log(results.edges)
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Super Blog title</h1>
      <h4>Total posts: { results.totalCount } </h4>
      
      <div className="blogs-container">
        {
          results.edges.map( ({node}) => (
              <article key={node.id}>
                <h3>{node.frontmatter.title}</h3>
                <h4>{node.frontmatter.date}</h4>
                <p>{node.excerpt}</p>
              </article>
            )
          )
        }
      </div>
      
    </Layout>
  )
}

export default Blogs
