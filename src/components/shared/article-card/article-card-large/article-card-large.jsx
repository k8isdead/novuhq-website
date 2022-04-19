import clsx from 'clsx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import AuthorWithDate from 'components/shared/author-with-date';
import CategoryLabel from 'components/shared/category-label';
import Link from 'components/shared/link';

import ArticleCardPropTypes from '../article-card-prop-types';

const ArticleCardLarge = ({
  className,
  title,
  category,
  date,
  slug,
  image,
  description,
  author,
  blogPageURL,
}) => (
  <article className={clsx('grid grid-cols-2 items-center gap-x-16 py-28 lg:block', className)}>
    <div className="flex flex-col lg:mt-5">
      <header>
        <CategoryLabel url={`/${blogPageURL}/${category.slug}`} theme={category.color} size="xs">
          {category.name}
        </CategoryLabel>
        <h1 className="mt-4 text-4xl font-bold leading-tight">
          <Link
            className="line-clamp-2 md:line-clamp-none inline-block align-top"
            to={slug}
            theme="white"
          >
            {title}
          </Link>
        </h1>
        <p className="line-clamp-3 xl:line-clamp-1 md:line-clamp-none mt-2.5 text-gray-8">
          {description}
        </p>
      </header>
      <footer className="mt-5 flex items-center space-x-4">
        <AuthorWithDate author={author} date={date} />
      </footer>
    </div>

    <Link className="lg:block" to={slug}>
      <GatsbyImage
        className="h-full"
        imgClassName="rounded-lg"
        image={getImage(image.localFile)}
        alt={image.alternativeText || ''}
      />
    </Link>
  </article>
);

ArticleCardLarge.propTypes = {
  className: PropTypes.string,
  ...ArticleCardPropTypes,
};

ArticleCardLarge.defaultProps = {
  className: null,
};

export default ArticleCardLarge;
