import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { StructuredText } from 'react-datocms';
import styled from "@emotion/styled"

const Wrapper = styled.div`
max-width: 900px;
margin: auto;
padding: 200px 20px 100px 20px;
`



const IndexPage = (data) => {
  return (
    <Layout dark={true}>
      <Wrapper>
        <StructuredText
            data={data.data.datoCmsTermsAndConditionsPage.termsAndConditions.value}
            renderInlineRecord={({ record }) => {
                switch (record.__typename) {
                case 'DatoCmsArticle':
                    return <a href={`/articles/${record.slug}`}>{record.title}</a>;
                default:
                    return null;
                }
            }}
        />
      </Wrapper>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <html lang="en" />
    <title>Motoschool | Terms & Conditions</title>
    <meta name="description" content="View Motoschools Terms & Conditions"/>
  </>
)

export const pageQuery = graphql`
    query TermsAndConditions{
      datoCmsTermsAndConditionsPage {
        termsAndConditions {
          value
        }
    }
    }
`