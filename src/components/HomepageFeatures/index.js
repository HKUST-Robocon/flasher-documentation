import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Flash',
    Svg: require('@site/static/img/undraw_the_world_is_mine_re_j5cr.svg').default,
    description: (
      <>
        The flasher allows you to flash the program without taking cares of any compilation. With just a few clicks, done!
      </>
    ),
  },
  {
    title: 'Built-in Serial Streaming',
    Svg: require('@site/static/img/undraw_control_panel_re_y3ar.svg').default,
    description: (
      <>
        The flasher offers built-in serial debugging console, no more application switchs between the flasher and the debugger.
      </>
    ),
  },
  {
    title: 'Upate-to-date Testing Program Release',
    Svg: require('@site/static/img/undraw_cloud_files_wmo8.svg').default,
    description: (
      <>
        The software team maintains bianries and continues to provide latest versions. And you can download them over the air.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
