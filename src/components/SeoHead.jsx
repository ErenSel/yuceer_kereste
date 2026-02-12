import { Helmet } from 'react-helmet-async'

const SeoHead = ({ title, description, schema }) => {
    return (
        <Helmet>
            <title>{title} | Yüceer Kereste</title>
            <meta name="description" content={description} />
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    )
}

export default SeoHead
