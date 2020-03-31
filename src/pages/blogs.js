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
            fields {
              slug
            }
            id
          }
        }
      }
    }
  `)
  
  const results = blogs.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Recent blog posts</h1>
      <h4>Total posts: { results.totalCount } </h4>
      
      <div className="blogs-container">
        {
          results.edges.map( ({node}) => (
              <article key={node.id}>
                <Link to={node.fields.slug}><h3>{node.frontmatter.title}</h3></Link>
                <h4>{node.frontmatter.date}</h4>
                <p>{node.excerpt}</p>
                <Link to={node.fields.slug}>Read post</Link>
              </article>
            )
          )
        }
      </div>

      <Link to="/">...to homepage</Link>
      
    </Layout>
  )
}

export default Blogs
