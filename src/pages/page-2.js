import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Repos from "../components/repos"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Github Repositories</h1>
    <p>Collection of active repos on my Gihtub account</p>

    <Repos />

    <Link to="/">...to homepage</Link>
  </Layout>
)

export default SecondPage
