import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imgSrc: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Dropdown Style',
    imgSrc: '/img/github/drop-down.png',
    description: (
      <>
        A sleek dropdown selector with flag icons and language names.
        Perfect for header navigation and space-saving designs.
        Includes smooth animations and custom styling options.
      </>
    ),
  },
  {
    title: 'Flag-list Style',
    imgSrc: '/img/github/flag-list.png',
    description: (
      <>
        Vertical list layout with flag icons beside each language.
        Ideal for sidebars or dedicated language selection areas.
        All options visible at once with hover effects.
      </>
    ),
  },
  {
    title: 'Text Style',
    imgSrc: '/img/github/text.png',
    description: (
      <>
        Minimalist text-only design without flag icons.
        Lightweight, fast, and easy to customize.
        Perfect for clean, text-focused designs.
      </>
    ),
  },
];

function Feature({ title, imgSrc, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={useBaseUrl(imgSrc)} alt={title} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
