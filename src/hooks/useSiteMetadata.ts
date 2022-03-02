import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
	const { site } = useStaticQuery(
		graphql`
			query SITE_SETTINGS_QUERY {
				site {
					siteMetadata {
						title
						description
					}
				}
			}
		`
	)

	const siteTitle = site.siteMetadata.title
	const tagline = site.siteMetadata.description

	return {
		siteTitle,
		tagline,
	}
}

export default useSiteMetadata
