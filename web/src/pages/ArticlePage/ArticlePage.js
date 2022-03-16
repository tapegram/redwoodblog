import { MetaTags } from '@redwoodjs/web'
import ArticleCell from 'src/components/ArticleCell/ArticleCell'

const ArticlePage = ({ id }) => (
  <>
    <MetaTags title="Article" description="Article page" />

    <ArticleCell id={id} />
  </>
)

export default ArticlePage
