import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Repos from "../components/repos"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>GraphQL queries page</h1>
    <p>Let's get some magic going.</p>

    <Repos />

    <Link to="/">...to homepage</Link>
  </Layout>
)

export default SecondPage
