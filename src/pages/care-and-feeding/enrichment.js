import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import CarePageTemplate from '../../templates/care';

const EnrichmentPage = ({ location }) => {
  const cards = [
    {
      title: 'Benebone Wishbone',
      copy: `asdf`,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81BBbUL9dHL._AC_SL1500_.jpg',
      to:
        'https://www.amazon.com/Benebone-Wishbone-Durable-Aggressive-Chewers/dp/B00MHZTKXY/ref=sr_1_1_sspa?crid=2TNBZG1Y2F5GO&dchild=1&keywords=benebone&qid=1597761087&s=pet-supplies&sprefix=bene%2Cpets%2C870&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExUjBNTDc5WlZGNkVXJmVuY3J5cHRlZElkPUEwMzY0NDA2MzAxNVdaOUYxU0syOCZlbmNyeXB0ZWRBZElkPUEwNjQxNjcwMjFFTU5JMU03SDFKMCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
      button: 'Buy on Amazon',
    },
    {
      title: 'Kong Chew Toy',
      copy: `asdf`,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/719dcnCnHfL._AC_SL1500_.jpg',
      to:
        'https://www.amazon.com/KONG-Classic-Durable-Natural-Rubber/dp/B0002AR0I8/ref=sr_1_2?dchild=1&keywords=kong&qid=1597761244&s=pet-supplies&sr=1-2',
      button: 'Buy on Amazon',
    },
    {
      title: 'Bully Sticks',
      copy: `asdf`,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71lQCPHTLeL._AC_SL1500_.jpg',
      to:
        'https://www.amazon.com/Best-Bully-Sticks-Odor-Free-6-inch/dp/B018WBALD4/ref=sr_1_8?dchild=1&keywords=bully+sticks&qid=1597761684&s=pet-supplies&sr=1-8',
      button: 'Buy on Amazon',
    },
    {
      title: 'Home Grooming Set',
      copy: `asdf`,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71pGTyP%2BKpL._AC_SL1287_.jpg',
      to:
        'https://www.amazon.com/Ruff-Ruffus-Self-Cleaning-Clippers-Grooming/dp/B07R8WPLC5/ref=sr_1_20?crid=3J3G18V96TBTT&dchild=1&keywords=dog+nail+clippers&qid=1597760815&s=pet-supplies&sprefix=dog+%2Cpets%2C489&sr=1-20',
      button: 'Buy on Amazon',
    },
    {
      title: 'Comfy Crate',
      copy: `asdf`,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/91qtQrrA28L._AC_SL1500_.jpg',
      to:
        'https://www.amazon.com/AmazonBasics-Single-Door-Folding-Metal-Crate/dp/B00QAVO29I/ref=sxts_sxwds-bia-wc-p13n2_0?cv_ct_cx=dog+crate&dchild=1&keywords=dog+crate&pd_rd_i=B00QAVO29I&pd_rd_r=113a5c33-f6ec-4ce2-aedc-df25c169efba&pd_rd_w=voMH3&pd_rd_wg=nTcfE&pf_rd_p=13bf9bc7-d68d-44c3-9d2e-647020f56802&pf_rd_r=16WQP4J1CZ27EJT6631G&psc=1&qid=1597760475&sr=1-2-791c2399-d602-4248-afbb-8a79de2d236f',
      button: 'Buy on Amazon',
    },
    {
      title: 'Calming Dog Bed',
      copy: `asdf`,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81IIrtSFi%2BL._AC_SL1500_.jpg',
      to:
        'http://amazon.com/Best-Friends-Sheri-Calming-Cuddler/dp/B01MV0IX66/ref=sr_1_6?dchild=1&keywords=dog+bed&qid=1597761395&s=pet-supplies&sr=1-6',
      button: 'Buy on Amazon',
    },
  ];

  return (
    <Layout location={location}>
      <SEO title="Enrichment" />
      <CarePageTemplate
        location={location}
        title="Enrichment"
        intro={`asdf`}
        cards={cards}
      />
    </Layout>
  );
};

export default EnrichmentPage;
